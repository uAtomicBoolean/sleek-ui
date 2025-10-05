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