use crate::SlintDocPage;

mod raw_content;
mod structs;

pub fn get_page_content(page_id: &str) -> SlintDocPage {
    let raw_content = raw_content::get(page_id);

    let content = match serde_yaml::from_str::<structs::DocPage>(raw_content) {
        Ok(c) => c,
        Err(err) => {
            eprintln!("{}", err.to_string());
            structs::DocPage::default()
        }
    };

    content.into()
}
