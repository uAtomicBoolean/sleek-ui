#[cfg(target_family = "wasm")]
use wasm_bindgen::prelude::*;

slint::include_modules!();

#[allow(dead_code)]
#[cfg_attr(target_family = "wasm", wasm_bindgen(start))]
fn main() {
    let ui = AppWindow::new().unwrap();

    ui.invoke_switch_theme_to_light();

    let app_logic = ui.global::<AppLogic>();

    app_logic.on_is_wasm(|| {
        return true;
    });

    ui.run().unwrap();
}
