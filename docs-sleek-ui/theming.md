# Theming

// TODO







## Lengths
All the lengths are multiplied by the scale factor property that is, by default, set to `1`.  
You can find the following type of properties defined in the `UAppTheme` global: 
- font-size
- icon-size
- spacing
- padding
- radius

## Colors
Three custom structs are defined to manage the colors in sleek-ui depending on their use.
**UThemeColor**:  
The simplest color in sleek-ui, it contains two fields: `light` and `dark`.  
It is used for colors which doesn't need variants such as the background colors, the fill colors, etc.  
The `UAppTheme.get-themed-color(c: UThemeColor)` allows you to automatically get the correct color depending on the current color scheme using `UAppTheme.colo-scheme`.  
```slint
// Lets say we are in the UAppTheme global.
// Our color scheme is defined to light.
in-out property <UColorScheme> color-scheme: light;
// We will get the light variant of our color.
in-out property <brush> background-elevated: get-themed-color({light: white, dark: black});
```

**UVariantsColor**:  
Allows to define a color with the following variants: `base`, `hover`, `active`, `disabled`, `selected`.  
It is used to define the main colors used in the widgets such as: primary, success, warning and danger.  
However, the struct doesn't manage the light and dark theme alone.  

**UColorSchemeVariantsColor**:  
Used to create a `UVariantsColor` with a light and dark themeby using two `light` and `dark` fields.  
You can use the `UAppTheme.get-variants-color(c: UColorSchemeVariantsColor)` to get the corrent variant depending on the current color scheme.  
```slint
// Lets say we are in the UAppTheme global.
// Our color scheme is defined to light.
in-out property <UColorScheme> color-scheme: light;
// We will get the light variant of our color.
in-out property <brush> primary: get-variants-color(UPrimaryColors.daybreak-blue);
```

**Default colors**:  
A selection of pre-made colors is available in the `UPrimaryColors` global declared in the `@sleek-ui/colors.slint` file. 
All of these colors are defined in the [documentation of ant-design](https://ant.design/docs/spec/colors). 
The available colors are:
- success: a green color.
- warning: a yellow color.
- danger: a red color.
- dust-red
- volcano
- sunset-orange
- lime
- calendula-gold
- sunrise-yellow
- polar-green
- cyan
- daybreak-blue
- geek-blue
- golden-purple
- french-magenta

## Code example
Here is an example using one of the default primary colors:  
```rust
let ui = AppWindow::new()?;

// You must export the UAppTheme global and the UPrimaryColors global from your main file to use them.
let french_magenta = ui.global::<UPrimaryColors>().get_french_magenta();

// Setting the new color as the primary one.
let app_theme = ui.global::<UAppTheme>();
app_theme.set_primary(app_theme.get_variants_color(french_magenta));

// Change the default radius.
app_theme.set_radius_base(8f32 * app_theme.get_scale_factor());
```