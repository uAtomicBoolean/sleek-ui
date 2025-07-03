# Popover
A custom `PopupWindow` to display some content above the window.  
A Popover content is displayed inside a `UCard`.  
You can check `USelect` that uses it to display the choices.  

![popover presentation](images/popover.png)

## Themes
Uses `UCard` themes.  

## Properties, callbacks and functions
Inherits from `PopupWindow`.   

## Example
```slint
import { UPopover, UText } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 4px;
		HorizontalLayout {
            alignment: center;
            spacing: 4px;
            popover := UPopover {
				UText {
					text: "Some random text display in the popover.";
				}
            }
        }
	}

	touch := TouchArea {
		clicked => {
			popover.show();
		}
	}
}
```