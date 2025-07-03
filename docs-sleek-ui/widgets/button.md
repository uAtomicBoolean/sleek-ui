# Button
A simple button to do an action on click.  
When outside of a layout, the button will take all the space available, otherwise, it will fit to its content.  

![buttons presentation](images/button.png)

## Themes
All themes are compatible with the `loading` and `danger` states : 
- default
- primary
- fill
- text

**Theming structs:**
```slint
struct UButtonThemeColors {
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

struct UButtonTheme {
	border-width: length,
	border-radius: length,
	content-spacing: length,
	padding-vertical: length,
	padding-horizontal: length,
	font-size: length,
	icon-size: length,
	base-colors: UButtonThemeColors,
	danger-colors: UButtonThemeColors,
}
```

## Properties, callbacks and functions
Inherits from [ButtonInterface](./button-interface.md).  

**Properties:**
- text `<string>`: the text of the button.
- danger `<bool>`: set the button to a danger state using red colors.
- loading `<bool>`: display a spinner in the button and block all clicking interactions.
- checked `<bool>`: display the button as checked by modifying its appearance when not hovered/cliked/disabled.
- icon `<image>`: an icon to display in the button.
- icon-placement `<IconTextPlacement>`: the icon's placement in the button. Can be `hidden`, `start` or `end` (`hidden` by default).

## Example
```slint
import { UButton } from "@sleek-ui/widgets.slint";
import { UButtonThemes } from "sleek-ui/widgets-themes.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		HorizontalLayout {
			alignment: center;
			spacing: 4px;

			UButton {
				text: "Click me";
				clicked => {
					debug("Button clicked");
				}
			}

			UButton {
				text: "Click me";
				theme: UButtonThemes.primary;
			}

			UButton {
				text: "Click me";
				theme: UButtonThemes.filled;
				danger: true;
			}

			UButton {
				text: "Click me";
				theme: UButtonThemes.text;
				loading: true;
			}
		}
	}
}
```