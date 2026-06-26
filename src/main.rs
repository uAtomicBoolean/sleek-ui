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

    let app_logic = ui.global::<AppLogic>();

    // Update AppLogic's scale factor as it doesn't know it by itself.
    app_logic.set_scale_factor(ui.window().scale_factor() * 100.0);

    let ui_weak = ui.as_weak();
    app_logic.on_update_scale_factor(move |sf| {
        let ui = ui_weak.upgrade().unwrap();
        ui.window()
            .dispatch_event(slint::platform::WindowEvent::ScaleFactorChanged {
                scale_factor: sf / 100.0,
            });
    });

    app_logic.on_is_wasm(|| {
        return false;
    });

    ui.run().unwrap();
}
