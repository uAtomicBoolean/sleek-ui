use crate::{SlintDocPage, SlintDocPageSection, SlintDocPageStyledText};
use serde::{Deserialize, Serialize};
use slint::{ModelRc, VecModel};
use std::rc::Rc;

pub fn get_page_content(page_id: String) -> SlintDocPage {
    let file_path = format!("docs-content/en/{page_id}.yaml");
    let file_content = std::fs::read_to_string(file_path).unwrap_or_default();

    serde_yaml::from_str::<DocPage>(&file_content)
        .unwrap_or_default()
        .into()
}

#[derive(Default, Debug, Serialize, Deserialize)]
struct DocPageStyledText {
    #[serde(skip_serializing_if = "Option::is_none")]
    text: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    code: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    link: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    url: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    local: Option<bool>,
}

#[derive(Default, Debug, Serialize, Deserialize)]
struct DocPageSection {
    title: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    description: Option<Vec<Vec<DocPageStyledText>>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    widget_id: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    code: Option<String>,
}

#[derive(Default, Debug, Serialize, Deserialize)]
struct DocPage {
    title: String,
    description: String,
    sections: Vec<DocPageSection>,
}

impl Into<SlintDocPageStyledText> for DocPageStyledText {
    fn into(self) -> SlintDocPageStyledText {
        SlintDocPageStyledText {
            text: self.text.unwrap_or_default().into(),
            code: self.code.unwrap_or_default().into(),
            link: self.link.unwrap_or_default().into(),
            url: self.url.unwrap_or_default().into(),
            local: self.local.unwrap_or_default(),
        }
    }
}

impl Into<SlintDocPageSection> for DocPageSection {
    fn into(self) -> SlintDocPageSection {
        let description = if let Some(desc) = self.description {
            Rc::new(VecModel::from(
                desc.into_iter()
                    .map(|line| {
                        ModelRc::new(Rc::new(VecModel::from(
                            line.into_iter()
                                .map(|t| t.into())
                                .collect::<Vec<SlintDocPageStyledText>>(),
                        )))
                    })
                    .collect::<Vec<ModelRc<SlintDocPageStyledText>>>(),
            ))
        } else {
            Rc::new(VecModel::default())
        };

        SlintDocPageSection {
            title: self.title.into(),
            description: ModelRc::new(description),
            widget_id: self.widget_id.unwrap_or_default().into(),
            code: self.code.unwrap_or_default().into(),
        }
    }
}

impl Into<SlintDocPage> for DocPage {
    fn into(self) -> SlintDocPage {
        let sections = Rc::new(VecModel::from(
            self.sections
                .into_iter()
                .map(|s: DocPageSection| s.into())
                .collect::<Vec<SlintDocPageSection>>(),
        ));
        SlintDocPage {
            title: self.title.into(),
            description: self.description.into(),
            sections: ModelRc::new(sections),
        }
    }
}
