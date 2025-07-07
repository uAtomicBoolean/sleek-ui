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
> You can check the widget's theming properties.

All widgets have a set of theming properties, prefixed by `t-`, to allow you to easily customize them, or use another widget's properties like the `UFloatingButton`.  
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