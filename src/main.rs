// Prevent console window in addition to Slint window in Windows release builds when, e.g., starting the app via file manager. Ignored on other platforms.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use dotenv::dotenv;
use std::error::Error;

slint::include_modules!();

fn main() -> Result<(), Box<dyn Error>> {
    dotenv().ok();

    let ui = AppWindow::new()?;

    let options_bar_logic = ui.global::<OptionsBarLogic>();
    options_bar_logic.on_change_color_scheme({
        let ui_weak = ui.as_weak();
        move |cs| {
            let ui = ui_weak.unwrap();
            let app_theme = ui.global::<UAppTheme>();
            app_theme.set_color_scheme(cs);
        }
    });

    options_bar_logic.on_change_primary_color({
        let ui_weak = ui.as_weak();
        move |style| {
            let ui = ui_weak.unwrap();
            let app_theme = ui.global::<UAppTheme>();
            app_theme.set_primary_color_style(style);
        }
    });

    ui.run()?;

    Ok(())
}
