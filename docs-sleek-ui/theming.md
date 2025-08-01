# Theming
## Application theming
The application's theme is defined in the `app-themes.slint` file and contains all the colors and lengths used in the application.  
Two color variants, used by default for the light and dark color scheme, are selected automatically following the `Palette.color-scheme` property.  
You can find a set of premade theme in [../ui/sleek-ui/app-themes/](../ui/sleek-ui/app-themes/), with `DaybreakBlue` being the currently used theme.

### Modify the theme
You can modify the current theme by updating the [UAppTheme](../ui/sleek-ui/app-theme.slint) global properties:
- from Slint if you downloaded sleek-ui directly in your project.
- from the backend if you downloaded sleek-ui in another folder.

The theme struct is defined in the [app-theme-struct.slint](../ui/sleek-ui/app-themes/app-theme-struct.slint) file.

> [!NOTE]
> Both `light-theme` and `dark-theme` should be updated in order to have an automatic light/dark theme switch.  
> Otherwise, you can just replace the `UAppTheme.theme` property with your own color theme.  

**Use a predefined theme:**
The following example is in Rust but it can be done with the other languages.
```rust
let ui = AppWindow::new()?;

// Get the desired theme in your backend.
// NOTE: you must export the desired theme's global from your mail UI file for it to be available in the backend.
let cyan = ui.global::<CyanTheme>();
let app_theme = ui.global::<UAppTheme>();
app_theme.set_light_theme(cyan.get_light_theme());
app_theme.set_dark_theme(cyan.get_dark_theme());

// Or set the `theme` property if you don't want to manage dark/light mode.
app_theme.set_theme(cyan.get_light_theme());
```

**Create your own theme:**  
- Import the [AppTheme](../ui/sleek-ui/app-themes/app-theme-struct.slint) struct.
- Define your theme in a global.
- Update the `UAppTheme` global in your backend (or directly in Slint if you downloaded sleek-ui directly in your project).

You can generated a color palette using the [ant design theme editor](https://ant.design/theme-editor).  
Here is the equivalent between the theme editor and our color properties:
- primary: `level 6` / `colorPrimary`
- primary-hover: `level 5` / `colorPrimaryHover`
- primary-active: `level 7` / `colorPrimaryActive`
- primary-disabled: `level 4` / `colorPrimaryBorderHover`
- primary-selected: `level 1` / `colorPrimaryBg`


> [!NOTE]
> As an example, you change the the `AppTheme.radius-base` to `20px` to round all widgets.  

## Widget theming
> [!NOTE]
> You can check the widget's theming properties in their documentation or source files.
> All widgets' theming properties are prefixed with `t-`.

All widgets have a set of theming properties to allow you to easily customize them, or use another widget's properties like the `UFloatingButton`.  
You can customize a widget by creating a new component and inheriting the desired widget: 
```slint
import { UIcon } from "@sleek-ui/widget-theme.slint";

component CustomAlert inherits UAlert {
	// Necessary to be able to customize the widget else the changes will be overwritten.
    variant: base;
    t-background: UAppTheme.primary-selected;
    t-icon-image: @image-url("../assets/icons/info.svg");
    t-icon-color: UAppTheme.primary;
    t-text-color: UAppTheme.primary;
	// Your code
}
```

> [!WARNING]
> If the widget comes with variants, use the `base` variants else your customization will be overwritten.