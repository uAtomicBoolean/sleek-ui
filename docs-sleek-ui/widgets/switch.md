
# Switch
A basic switch.  

![switch presentation](images/switch.png)

## Themes
- default

**Theming struct:**
```slint
struct USwitchTheme {
	foreground-checked: brush,
	foreground-checked-disabled: brush,
	background-checked: brush,
	background-checked-hover: brush,
	background-checked-disabled: brush,
	foreground-unchecked: brush,
	foreground-unchecked-disabled: brush,
	background-unchecked: brush,
	background-unchecked-hover: brush,
	background-unchecked-disabled: brush,
	radius: length,
	size: length,
}
```
  
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