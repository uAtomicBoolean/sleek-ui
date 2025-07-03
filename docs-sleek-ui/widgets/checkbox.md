
# Checkbox
A basic checkbox.  

![checkbox presentation](images/checkbox.png)

## Themes
- primary

**Theming struct:**
```slint
struct UCheckboxTheme {
	size: length,
	alignment: LayoutAlignment,
	text-spacing: length,
	text-color: brush,
	text-color-disabled: brush,
	background-checked: brush,
	background-checked-hover: brush,
	background-unchecked: brush,
	background-disabled-checked: brush,
	background-disabled-unchecked: brush,
	border-width: length,
	border-radius: length,
	border-color: brush,
	border-color-hover: brush,
	border-color-disabled: brush,
	check-icon-size: length,
	check-icon-color: brush,
}
```
  
## Properties, callbacks and functions
Inherits from [ButtonInterface](./button-interface.md).  

**Properties:**
- checked `<bool>`
- text `<string>`
- text-placement `<IconTextPlacement>`: one of `start`, `end`, `hidden`. Default to `start`.

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