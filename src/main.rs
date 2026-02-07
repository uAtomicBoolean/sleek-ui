// Prevent console window in addition to Slint window in Windows release builds when, e.g., starting the app via file manager. Ignored on other platforms.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

slint::include_modules!();

#[allow(dead_code)]
fn main() {
    let ui = AppWindow::new().unwrap();

    let doc_logic = ui.global::<DocumentationLogic>();

    doc_logic.on_open_url(|url| {
        // let _ = open::that(url);
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
