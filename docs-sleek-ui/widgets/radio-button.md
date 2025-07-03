# RadioButton
An alternative to the [URadio](radio.md) widget with a button look and feel.  
Like a radio, only one option can be selected.  

![radio-button presentation](images/radio-button.png)

## Themes
- default
- primary

**Theming struct:**
```slint
struct URadioButtonTheme {
	background: brush,
	background-hover: brush,
	background-selected: brush,
	background-selected-hover: brush,
	background-selected-active: brush,
	border-width: length,
	border-radius: length,
	border-color: brush,
	border-color-hover: brush,
	border-color-selected: brush,
	border-color-selected-hover: brush,
	border-color-selected-active: brush,
	text-color: brush,
	text-color-hover: brush,
	text-color-selected: brush,
	text-color-selected-hover: brush,
	text-color-selected-active: brush,
	font-size: length,
	padding-vertical: length,
	padding-horizontal: length,
}
```

## Properties, callbacks and functions
Inherits from `Rectangle`.

**Properties:**
- selected-value `<string>`: the current selected value.
- options `<[string]>`: the list of available values.

**Callbacks:**
- `selected(value: string)`: called when the selected value changed.

## Example
```slint
import { URadioButton } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 4px;
		HorizontalLayout {
			alignment: center;
			spacing: 4px;
            URadioButton {
                selected-value: "Shenzou";
                options: ["Shangai", "Shenzou", "Hong Kong"];
            }
		}
	}
}
```