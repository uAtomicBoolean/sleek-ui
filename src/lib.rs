use dotenv::dotenv;

#[cfg(target_family = "wasm")]
use wasm_bindgen::prelude::*;

slint::include_modules!();

#[allow(dead_code)]
#[cfg_attr(target_family = "wasm", wasm_bindgen(start))]
fn main() {
    dotenv().ok();

    let ui = AppWindow::new().unwrap();

    ui.invoke_switch_theme_to_light();

    let doc_logic = ui.global::<DocumentationLogic>();

    doc_logic.on_open_url(|url| {
        if let Err(err) = webbrowser::open(url.as_str()) {
            println!("Couldn't open the URL in the default browser.");
            println!("URL: {url}");
            println!("{}", err.to_string());
        }
    });

    // let options_bar_logic = ui.global::<OptionsBarLogic>();

    // options_bar_logic.on_change_primary_color({
    //     let ui_weak = ui.as_weak();
    //     move |style| {
    //         let ui = ui_weak.unwrap();
    //         let app_theme = ui.global::<UAppTheme>();
    //         app_theme.set_primary_color_style(style);
    //     }
    // });

    ui.run().unwrap();
}
