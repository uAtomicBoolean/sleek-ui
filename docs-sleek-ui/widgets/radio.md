# RadioButton
A group of radio choices.  

![radio presentation](images/radio.png)

## Themes
- default

**Theming struct:**
```slint
struct URadioTheme {
	text-color: brush,
	text-color-selected: brush,
	font-size: length,
	font-weight: int,
	font-weight-selected: int,
	border: brush,
	border-hover: brush,
	border-selected: brush,
	border-selected-hover: brush,
	background: brush,
	background-selected: brush,
	background-selected-hover: brush,
	main-circle-size: length,
	main-circle-border-width: length,
	dot-circle-size: length,
	dot-color: brush,
	radio-spacing: length,
	radio-text-spacing: length,
	radio-text-spacing: length,
}
```

## Properties, callbacks and functions
Inherits from `Rectangle`.

**Properties:**
- vertical `<bool>`: indicates weither the radio group should be vertical or horizontal. Default to `true`.
- options `<[string]>`: the list of available values.
- selected-value `<string>`: the currently selected value.

**Callbacks:**
- `selected(value: string)`: called when the selected value changed.

## Example
```slint
import { UHorizontalRadio, UVerticalRadio } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 4px;
		HorizontalLayout {
            alignment: center;
            spacing: 4px;
            UHorizontalRadio {
                selected-value: "Shenzou";
                options: ["Shangai", "Shenzou", "Hong Kong"];
            }
        }

        HorizontalLayout {
            alignment: center;
            spacing: 4px;
            UVerticalRadio {
                selected-value: "Shenzou";
                options: ["Shangai", "Shenzou", "Hong Kong"];
            }
        }
	}
}
```