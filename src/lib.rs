#[cfg(target_family = "wasm")]
use wasm_bindgen::prelude::*;

slint::include_modules!();

#[allow(dead_code)]
#[cfg_attr(target_family = "wasm", wasm_bindgen(start))]
fn main() {
    let ui = AppWindow::new().unwrap();

    ui.invoke_switch_theme_to_light();

    let app_logic = ui.global::<AppLogic>();

	app_logic.set_scale_factor(ui.window().scale_factor() * 100.0);

    app_logic.on_is_wasm(|| {
        return true;
    });

    app_logic.on_open_url(|url| {
        if let Err(err) = webbrowser::open(url.as_str()) {
            println!("Couldn't open the URL in the default browser.");
            println!("URL: {url}");
            println!("{}", err.to_string());
        }
    });

    ui.run().unwrap();
}
