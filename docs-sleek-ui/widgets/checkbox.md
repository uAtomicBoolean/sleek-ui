
# Checkbox
A basic checkbox.  

![checkbox presentation](images/checkbox.png)

## Themeing properties
- t-size `<length>`: the width and height of the checkbox's rectangle.
- t-alignment `<LayoutAlignment>`: the alignment used in the `HorizontalLayout` that contains the checkbox and its text. Defaults to `space-between`.
- t-text-spacing `<length>`: the spacing between the checkbox and its text.
- t-text-color `<brush>`
- t-text-color-disabled `<brush>`
- t-background-checked `<brush>`
- t-background-checked-hover `<brush>`
- t-background-unchecked `<brush>`
- t-background-disabled-checked `<brush>`
- t-background-disabled-unchecked `<brush>`
- t-border-width `<length>`
- t-border-radius `<length>`
- t-border-color `<brush>`
- t-border-color-hover `<brush>`
- t-border-color-disabled `<brush>`
- t-check-icon-size `<length>`
- t-check-icon-color `<brush>`
  
## Properties, callbacks and functions
Inherits from [ButtonInterface](./button-interface.md).  

**Properties:**
- checked `<bool>`
- text `<string>`
- text-placement `<IconTextPlacement>`: one of `start`, `end`, `hidden`. Defaults to `start`.

## Example
```slint
import { UCheckbox } from "@sleek-ui/widgets.slint";


export component AppWindow inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 8px;
		HorizontalLayout {
            alignment: center;
			spacing: 4px;
            UCheckbox {
				checked: true;
				text: "Checkbox";
			}

			UCheckbox {
				checked: false;
				text: "Checkbox";
				text-placement: end;
			}
        }
	}
}
```