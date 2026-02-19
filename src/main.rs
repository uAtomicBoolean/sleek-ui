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

    let app_logic = ui.global::<AppLogic>();

    app_logic.on_is_wasm(|| {
        return false;
    });

    app_logic.on_open_url(|url| {
        if let Err(err) = webbrowser::open(url.as_str()) {
            println!("Couldn't open the URL in the default browser.");
            println!("URL: {url}");
            println!("{}", err.to_string());
        }
    });

    let ui_weak = ui.as_weak();
    app_logic.on_change_primary_color(move |color| {
        let ui = ui_weak.upgrade().unwrap();
        let app_theme = ui.global::<UAppTheme>();
        let mut light = app_theme.get_light();
        let mut dark = app_theme.get_dark();
        light.primary = color.clone();
        dark.primary = color;
        app_theme.set_light(light);
        app_theme.set_dark(dark);
    });

    ui.run().unwrap();
}
