# Theming

The theming configuration is available in the `UAppTheme` struct from the `@sleek-ui/app-theme.slint` file.  
It comes with a custom scale-factor which allows you to implement a zoom like feature, and with a custom light and dark theme management system.  
There is three categories of properties in the theme:
- the `in-out` properties: both the `scale-factor` and `color-scheme` properties are the only ones in the categories. You can modify and get their values.
- the `in` properties: these properties are used to define the theme style. You can't use them in your code as they automatically compute the usable properties.
- the `out` properties: these properties are computed from the `in` ones and are the ones that you can use in your code. They will be automatically updated with the scale factor and the current color scheme.

## Scale factor and color scheme
Both properties are unique as they are used by all other properties to update the theme, and are the only ones to not be computed from an `in` property.  

**Scale factor:**  
- type: `float`
- default value: `1`

**Color scheme:**
- type: `UColorScheme`
- default value: `system`
- possible values: `light`, `dark`, `system`

Updating the color scheme to one of its value will update the whole app theme automatically.  

**Rust example:**  
```rust
let ui = AppWindow::new()?;
// You must export the UAppTheme global from your main file to be able to use it in your logic.
let app_theme = ui.global::<UAppTheme>();
// Same as UAppTheme.
app_theme.set_color_scheme(UColorScheme::dark);
app_theme.set_scale_factor(1.5);
```

## Computed properties
All the computed properties follow the same template: a struct stored in an `in` property is used to define the values of the corresponding `out` properties.  
The values from the struct are then either: passed through a function to get the right color depending on the color scheme, or multiplied by the scale factor.  

### Main colors
These properties defines the main colors used in the application.

**Input property:**
- name: `main-colors-style`
- type: [UMainColorStyle](#umaincolorsstyle)

**Output properties:**
- types: `UVariantsColor`
- names: `primary`, `success`, `warning`, `danger`

### Background colors
These properties defines the different background colors used in the application.

**Input property:**
- name: `background-colors-style`
- type: [UBackgroundColorStyle](#ubackgroundcolorsstyle)

**Output properties:**
- types: `brush`
- names: `bg-layout`, `bg-container`, `bg-elevated`, `bg-inverse`

### Fill colors
These properties defines the different fill colors used in the application.  
The plus variant is opposite to the secondary, tertiary and quarternary variants.  

**Input property:**
- name: `fill-colors-style`
- type: [UFillColorStyle](#ufillcolorsstyle)

**Output properties:**
- types: `brush`
- names: `color-fill`, `color-fill-plus`, `color-fill-secondary`, `color-fill-tertiary`, `color-fill-quaternary`

### Border
These properties defines the style of the default border used in the different widgets.  

**Input property:**
- name: `border-style`
- type: [UBorderStyle](#uborderstyle)

**Output properties:**
- name: `border-width-base`
	- type: `length`
- name: `border`
	- type: `length`
- name: `border-secondary`
	- type: `length`
- name: `separator`
	- type: `length`

### Shadow
These properties defines the style of the default shadow used in the different widgets.  

**Input property:**
- name: `shadow-style`
- type: [UShadowStyle](#ushadowstyle)

**Output properties:**
- name: `shadow-color`
	- type: `brush`
- name: `shadow-blur`
	- type: `length`
- name: `shadow-x-offset`
	- type: `length`
- name: `shadow-y-offset`
	- type: `length`

### Focus
These properties defines the style of the focus state in the widgets.  

**Input property:**
- name: `focus-style`
- type: [UFocusStyle](#ufocusstyle)

**Output properties:**
- name: `focus-color`
	- type: `brush`
- name: `focus-border-width`
	- type: `length`


### Text colors
These properties defines the different text colors used in the application.  

**Input property:**
- name: `text-style`
- type: [UTextStyle](#utextstyle)

**Output properties:**
- types: `brush`
- names: `inverse-text`, `text`, `text-secondary`, `text-heading`, `text-disabled`

### Font sizes
These properties defines the different font sizes used in the application.  

**Input property:**
- name: `font-size-style`
- type: [UFontSizeStyle](#ufontsizestyle)

**Output properties:**
- types: `length`
- names: `font-size-smaller`, `font-size-small`, `font-size-base`, `font-size-medium`, `font-size-big`, `font-size-bigger`, `icon-size-base`

### Padding
These properties defines the different padding sizes used in the application.  

**Input property:**
- name: `padding-style`
- type: [UPaddingStyle](#upaddingstyle)

**Output properties:**
- types: `length`
- names: `padding-horizontal`, `padding-vertical`, `padding-small`, `padding-base`, `padding-medium`, `padding-big`, `padding-bigger`

### Spacing
These properties defines the different spacing sizes used in the application.  

**Input property:**
- name: `spacing-style`
- type: [USpacingStyle](#uspacingstyle)

**Output properties:**
- types: `length`
- names: `spacing-small`, `spacing-base`, `spacing-medium`, `spacing-big`, `spacing-bigger`

### Spacing
These properties defines the different radius sizes used in the application.  

**Input property:**
- name: `radius-style`
- type: [URadiusStyle](#uradiusstyle)

**Output properties:**
- types: `length`
- names: `radius-small`, `radius-base`, `radius-medium`, `radius-large`, `radius-round`, `radius-circle`


## Theming structs
### USingleColor
- light: `brush`
- dark: `brush`

### UVariantsColor
- base: `brush`
- hover: `brush`
- active: `brush`
- disabled: `brush`
- selected: `brush`

### UColorSchemeVariantsColor
- light: `UVariantsColor`
- dark: `UVariantsColor`

### UMainColorsStyle
- primary: `UColorSchemeVariantsColor`
- success: `UColorSchemeVariantsColor`
- warning: `UColorSchemeVariantsColor`
- danger: `UColorSchemeVariantsColor`

### UBackgroundColorsStyle
- layout: `USingleColor`
- container: `USingleColor`
- elevated: `USingleColor`
- inverse: `USingleColor`

### UFillColorsStyle
- fill-plus: `USingleColor`
- fill: `USingleColor`
- fill-secondary: `USingleColor`
- fill-tertiary: `USingleColor`
- fill-quaternary: `USingleColor`

### UShadowStyle
- color: `USingleColor`
- blur: `length`
- x-offset: `length`
- y-offset: `length`

### UFocusStyle
- color: `USingleColor`
- border-width: `length`

### UTextStyle
- color-inverse: `USingleColor`
- color: `USingleColor`
- color-secondary: `USingleColor`
- color-heading: `USingleColor`
- color-disabled: `USingleColor`

### UFontSizeStyle
- smaller: `length`
- small: `length`
- base: `length`
- medium: `length`
- big: `length`
- bigger: `length`
- icon-base-size: `length`

### UBorderStyle
- width: `length`
- color: `USingleColor`
- color-secondary: `USingleColor`
- separator: `USingleColor`

### UPaddingStyle
- vertical: `length`
- horizontal: `length`
- small: `length`
- base: `length`
- medium: `length`
- big: `length`
- bigger: `length`

### USpacingStyle
- small: `length`
- base: `length`
- medium: `length`
- big: `length`
- bigger: `length`

### URadiusStyle
- small: `length`
- base: `length`
- medium: `length`
- large: `length`
- round: `length`
- circle: `length`
