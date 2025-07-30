# IconButton
A simple icon button to do an action on click.  
When outside of a layout, the button will take all the space available, otherwise, it will fit to its content.  

![icon-button presentation](images/icon-button.png)

## Variants
- default
- primary
- fill
- text
- text-raw: a simple theme with no effect except changing the text color on hover.
- custom: used to implement custom themes.

## Theming properties
Like `UButton`, the theming for `UIconButton` is particular as it uses a struct, `UIconButtonThemeColor`, to define each color which makes it easier to manage the `danger` state (and future states).  
It contains two fields:
- **base:** the default color.
- **danger**: it speaks for itself.

Here are the theming properties at the top level of `UIconButton`:
- t-icon-size `<length>`: please check the [comments in the code](../../ui/sleek-ui/widgets/icon-button.slint) to know about the `UButton` text size problem that impacts this icon size.
- t-border-width `<length>`
- t-border-radius `<length>`
- t-padding-vertical `<length>`
- t-padding-horizontal `<length>`
- t-background `<UIconButtonThemeColor>`
- t-background-hover `<UIconButtonThemeColor>`
- t-background-active `<UIconButtonThemeColor>`
- t-background-checked `<UIconButtonThemeColor>`
- t-background-disabled `<UIconButtonThemeColor>`
- t-text-color `<UIconButtonThemeColor>`
- t-text-color-hover `<UIconButtonThemeColor>`
- t-text-color-active `<UIconButtonThemeColor>`
- t-text-color-checked `<UIconButtonThemeColor>`
- t-text-color-disabled `<UIconButtonThemeColor>`
- t-border `<UIconButtonThemeColor>`
- t-border-hover `<UIconButtonThemeColor>`
- t-border-active `<UIconButtonThemeColor>`
- t-border-checked `<UIconButtonThemeColor>`
- t-border-disabled `<UIconButtonThemeColor>`

## Properties, callbacks and functions
Inherits from [ButtonInterface](./button-interface.md).  

**Properties:**
- danger `<bool>`: set the button to a danger state using red colors.
- loading `<bool>`: display a spinner in the button and block all clicking interactions.
- checked `<bool>`: display the button as checked by modifying its appearance when not hovered/cliked/disabled.
- icon `<image>`: an icon to display in the button.
- icon-size `<length>`
- colorize-icon `<bool>`: If set to true, the icon will be colorized to the same color as the button’s text color. Defaults to true.

## Example
```slint
import { UIconButton } from "@sleek-ui/widgets.slint";

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
				variant: primary;
				text: "Click me";
			}

			UIconButton {
				variant: filled;
				text: "Click me";
				danger: true;
			}

			UIconButton {
				variant: text;
				text: "Click me";
				loading: true;
			}
		}
	}
}
```