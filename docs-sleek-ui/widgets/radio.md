# RadioButton
A group of radio choices.  

![radio presentation](images/radio.png)

## Theming properties
- t-text-color `<brush>`
- t-text-color-selected `<brush>`
- t-font-size `<length>`
- t-font-weight `<int>`
- t-font-weight-selected `<int>`
- t-border `<brush>`
- t-border-hover `<brush>`
- t-border-selected `<brush>`
- t-border-selected-hover `<brush>`
- t-background `<brush>`
- t-background-selected `<brush>`
- t-background-selected-hover `<brush>`
- t-main-circle-size `<length>`
- t-main-circle-border-width `<length>`
- t-dot-circle-size `<length>`: the dot's size in the selected option.
- t-dot-color `<brush>`
- t-radio-spacing `<length>`: spacing between the options.
- t-radio-text-spacing `<length>`: spacing between the options' circles and texts.

## Properties, callbacks and functions
Inherits from `Rectangle`.

**Properties:**
- vertical `<bool>`: indicates weither the radio group should be vertical or horizontal. Defaults to `true`.
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