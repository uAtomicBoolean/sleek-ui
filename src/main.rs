// Prevent console window in addition to Slint window in Windows release builds when, e.g., starting the app via file manager. Ignored on other platforms.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

slint::include_modules!();

#[allow(dead_code)]
fn main() {
    let selector = slint::BackendSelector::new()
        .backend_name("winit".to_owned())
        .renderer_name("skia".to_owned());
    if let Err(err) = selector.select() {
        eprintln!("Error while selecting the backend and renderer.");
        eprintln!("{}", err.to_string());
    }

    let ui = AppWindow::new().unwrap();

    // let ui_weak = ui.as_weak();
    // ui.on_update_scale_factor(move |sf| {
    //     let ui = ui_weak.upgrade().unwrap();
    //     ui.window()
    //         .dispatch_event(slint::platform::WindowEvent::ScaleFactorChanged { scale_factor: sf });
    // });

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
