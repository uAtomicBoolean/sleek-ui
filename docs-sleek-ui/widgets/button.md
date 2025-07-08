# Button
A simple button to do an action on click.  
When outside of a layout, the button will take all the space available, otherwise, it will fit to its content.  

![buttons presentation](images/button.png)

## Variants
- default
- primary
- fill
- text
- base: used to implement custom themes.

## Theming properties
The theming for `UButton` is particular as it uses a struct to define the colors.  
This allows easier management of the `danger` and regular states.

Here are the fields in the `UButtonThemeColors` struct:
- background `<brush>`
- background-hover `<brush>`
- background-active `<brush>`
- background-checked `<brush>`
- background-disabled `<brush>`
- text-color `<brush>`
- text-color-hover `<brush>`
- text-color-active `<brush>`
- text-color-checked `<brush>`
- text-color-disabled `<brush>`
- border `<brush>`
- border-hover `<brush>`
- border-active `<brush>`
- border-checked `<brush>`
- border-disabled `<brush>`

Here are the theming properties at the top level of `UButton`:
- t-border-width `<length>`
- t-border-radius `<length>`
- t-content-spacing `<length>`
- t-padding-vertical `<length>`
- t-padding-horizontal `<length>`
- t-font-size `<length>`
- t-icon-size `<length>`
- t-base-colors `<UButtonThemeColors>`: colors used when the button is in its regular state.
- t-danger-colors `<UButtonThemeColors>`: colors used for the `danger` state.

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
				variant: primary;
				text: "Click me";
			}

			UButton {
				variant: filled;
				text: "Click me";
				danger: true;
			}

			UButton {
				variant: text;
				text: "Click me";
				loading: true;
			}
		}
	}
}
```