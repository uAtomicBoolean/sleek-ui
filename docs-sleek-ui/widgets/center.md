# Center
A simple layout to center elements in a parent.  
This combine an HorizontalLayout in a VerticalLayout.  
You can manage the vertical and horizontal alignments with the `v-alignment` and `h-alignment` properties.  
The spacing and padding can be managed by the `u-spacing` and `u-padding` or `u-padding-*` properties.  

## Example
```slint
import { UCenter } from "@sleek-ui/widgets.slint";
import { Button } from "std-widgets.slint";


export component AppWindow inherits Window {
	VerticalLayout {
		spacing: 8px;		
		UCenter {
			Text {
				text: "This text is centered.";
			}
		}
		UCenter {
			h-alignement: start;
			Text {
				text: "This one is positionned at the start.";
			}
		}

		UCenter {
			u-spacing: 4px;
			u-padding: 4px;
			Button {
				text: "First";
			}

			Button {
				text: "Second";
			}
		}
	}
}
```