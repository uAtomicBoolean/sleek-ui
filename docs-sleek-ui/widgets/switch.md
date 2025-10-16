
# Switch
A basic switch.  

![switch presentation](images/switch.png)

## Properties, callbacks and functions
Inherits from [ButtonInterface](./button-interface.md).  

**Properties:**
- checked `<bool>`

## Example
```slint
import { USwitch } from "@sleek-ui/widgets.slint";


export component AppWindow inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 8px;
		HorizontalLayout {
            alignment: center;
			spacing: 4px;
            USwitch {
				checked: true;
			}

			USwitch {
				checked: false;
			}
        }
	}
}
```