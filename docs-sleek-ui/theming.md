# Theming
## Application theming
The application's theme is defined in the `app-themes.slint` file and contains all the colors and lengths used in the application.  
Two color variants are used by default for the light and dark color scheme. These colors variants are defined in the `theme-colors.slint` file and are selected automatically by the application's theme.  

Default values:
- [default lengths](../ui/sleek-ui/app-theme.slint)
- [default colors variants](../ui/sleek-ui/theme-colors.slint)

### Modify a theme
You can modify the current theme by updating its values in both `sleek-ui/app-theme.slint` and `sleek-ui/theme-colors.slint` file if you cloned sleek-ui in your project.  
Please note that you should update both `light-theme` and `dark-theme`.
You can generated a color palette using the [ant design theme editor](https://ant.design/theme-editor).  

### Add a theme
Start by creating your theme in a global following the `UAppTheme` global.  
Set programmatically the `light-theme` and `dark-theme` properties of the `UAppTheme` global if you want to have an automatic theme selection depending on the current color scheme.  
Otherwise you can set the `theme` property to your theme.  

## Widget theming
> [!NOTE]
> You can check the widget's theme structs in their documentation.

All widgets have either their own theme struct or use another widget's theme struct (ex: `UFloatingButton` uses the `UButton` theme struct).  
You can import this struct from the `sleek-ui/widget-themes.slint` file (like the widget's themes global) and then define your own widget's theme in a global:  
```slint
import { UIcon } from "@sleek-ui/widget-theme.slint";

export global CustomButtonThemes {
	in-out property <UIcon> special: {
		...
	}
}
```