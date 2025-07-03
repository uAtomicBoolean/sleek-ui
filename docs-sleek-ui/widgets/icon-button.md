# IconButton
A simple icon button to do an action on click.  
When outside of a layout, the button will take all the space available, otherwise, it will fit to its content.  

![icon-button presentation](images/icon-button.png)

## Themes
All themes are compatible with the `loading` and `danger` states except for `text-raw` : 
- default
- primary
- fill
- text
- text-raw: a simple theme with no effect except changing the text color on hover.

**Theming structs:**
```slint
struct UIconButtonThemeColors {
	background: brush,
	background-hover: brush,
	background-active: brush,
	background-checked: brush,
	background-disabled: brush,
	text-color: brush,
	text-color-hover: brush,
	text-color-active: brush,
	text-color-checked: brush,
	text-color-disabled: brush,
	border: brush,
	border-hover: brush,
	border-active: brush,
	border-checked: brush,
	border-disabled: brush,
}

struct UIconButtonTheme {
	border-width: length,
	border-radius: length,
	padding-vertical: length,
	padding-horizontal: length,
	icon-size: length,
	base-colors: UIconButtonThemeColors,
	danger-colors: UIconButtonThemeColors,
}
```

## Properties, callbacks and functions
Inherits from [ButtonInterface](./button-interface.md).  

**Properties:**
- danger `<bool>`: set the button to a danger state using red colors.
- loading `<bool>`: display a spinner in the button and block all clicking interactions.
- checked `<bool>`: display the button as checked by modifying its appearance when not hovered/cliked/disabled.
- icon `<image>`: an icon to display in the button.
- icon-size `<length>`

## Example
```slint
import { UIconButton } from "@sleek-ui/widgets.slint";
import { UIconButtonThemes } from "sleek-ui/widgets-themes.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		HorizontalLayout {
			alignment: center;
			spacing: 4px;

			UIconButton {
				text: "Click me";
				clicked => {
					debug("Button clicked");
				}
			}

			UIconButton {
				text: "Click me";
				theme: UIconButtonThemes.primary;
			}

			UIconButton {
				text: "Click me";
				theme: UIconButtonThemes.filled;
				danger: true;
			}

			UIconButton {
				text: "Click me";
				theme: UIconButtonThemes.text;
				loading: true;
			}
		}
	}
}
```