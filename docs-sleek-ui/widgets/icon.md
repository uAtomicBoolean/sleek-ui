# Icon
A simple icon to display as an image with a small size.  
It uses, by default, the `UAppTheme.icon-size-base` property to set its size.  

![icon presentation](images/icon.png)

## Theming properties
- t-color `<brush>`

## Properties, callbacks and functions
It inherits from the `Image` widget hence all its properties, callbacks and functions are available on `UIcon`.  

**Properties:**
- size `<length>`: the width and height of the icon.
- colorize-icon `<bool>`: If set to true, the icon will be colorized to the same color as the default text color in the app theme. Defaults to true.

## Example
```slint
import { UIcon } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		HorizontalLayout {
			alignment: center;
			spacing: 4px;

			UIcon {
				source: @image-url("assets/images/plus.svg");
			}
		}
	}
}
```