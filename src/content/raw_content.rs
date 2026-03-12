const HOW_TO_USE: &str = include_str!("../../docs-content/en/how-to-use.yaml");
const THEMING: &str = include_str!("../../docs-content/en/theming.yaml");
const DEFAULT_COLORS: &str = include_str!("../../docs-content/en/default-colors.yaml");

pub fn get(page_id: &str) -> &str {
    match page_id {
        "how-to-use" => HOW_TO_USE,
        "theming" => THEMING,
        "default-colors" => DEFAULT_COLORS,
        _ => "",
    }
}
