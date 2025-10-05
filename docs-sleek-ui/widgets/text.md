# Text
A `Text` widget with predefined properties values.  

![text presentation](images/text.png)

## Properties, callbacks and functions
Inherits from `Text`.   

## Example
```slint
import { UText } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 4px;
		HorizontalLayout {
			alignment: center;
			spacing: 4px;
            UText {
                text: "A simple text that uses predefined style.";
            }
		}
	}
}
```