
# Switch
A basic switch.  

![switch presentation](images/switch.png)

## Theming properties
The foreground represents the switch's circle color.

- t-foreground-checked `<brush>`
- t-foreground-checked-disabled `<brush>`
- t-background-checked `<brush>`
- t-background-checked-hover `<brush>`
- t-background-checked-disabled `<brush>`
- t-foreground-unchecked `<brush>`
- t-foreground-unchecked-disabled `<brush>`
- t-background-unchecked `<brush>`
- t-background-unchecked-hover `<brush>`
- t-background-unchecked-disabled `<brush>`
- t-radius `<length>`: the radius of the outer borders.
- t-circle-radius `<length>`: the radius of the inner circle.
- t-size `<length>`: this is used for both the width and height of the switch.

The width is equal to `t-size` and the height to `t-size / 2`.  
  
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