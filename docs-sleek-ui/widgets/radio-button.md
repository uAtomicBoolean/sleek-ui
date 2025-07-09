# RadioButton
An alternative to the [URadio](radio.md) widget with a button look and feel.  
Like a radio, only one option can be selected.  

![radio-button presentation](images/radio-button.png)

## Variants
- default
- primary
- custom: used to implement custom themes.

## Theming properties
- t-background `<brush>`
- t-background-hover `<brush>`
- t-background-selected `<brush>`
- t-background-selected-hover `<brush>`
- t-background-selected-active `<brush>`
- t-border-width `<length>`
- t-border-radius `<length>`
- t-border-color `<brush>`
- t-border-color-hover `<brush>`
- t-border-color-selected `<brush>`
- t-border-color-selected-hover `<brush>`
- t-border-color-selected-active `<brush>`
- t-text-color `<brush>`
- t-text-color-hover `<brush>`
- t-text-color-selected `<brush>`
- t-text-color-selected-hover `<brush>`
- t-text-color-selected-active `<brush>`
- t-font-size `<length>`
- t-padding-vertical `<length>`
- t-padding-horizontal `<length>`

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

		HorizontalLayout {
			alignment: center;
			spacing: 4px;
            URadioButton {
				variant: primary;
                selected-value: "Shenzou";
                options: ["Shangai", "Shenzou", "Hong Kong"];
            }
		}
	}
}
```