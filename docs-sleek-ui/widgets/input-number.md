# InputNumber
An input, also known as spinbox, made only for numerical values.  
You should always set the width of the input when using it.  

![input-number presentation](images/input-number.png)

## Theming properties
- t-background `<brush>`
- t-background-active `<brush>`
- t-background-error `<brush>`
- t-background-disabled `<brush>`
- t-border-width `<length>`
- t-border-radius `<length>`
- t-border-color `<brush>`
- t-border-color-active `<brush>`
- t-border-color-error `<brush>`
- t-border-color-disabled `<brush>`
- t-text-color `<brush>`
- t-text-color-disabled `<brush>`
- t-font-size `<length>`
- t-placeholder-color `<brush>`
- t-icon-size `<length>`
- t-icon-color `<brush>`
- t-padding-vertical `<length>`
- t-padding-horizontal `<length>`

## Properties, callbacks and functions
Inherits from `Rectangle`.  
All the properties, callbacks and functions from `TextInput` are available on this widget.  

**Properties:**
- value `<float>`: the current value of the input
- enabled `<bool>`: is the input enabled
- step `<float>`: how much to increment/decrement when using the buttons. Defaults to `1`.
- number `<bool>`: if true then the input is of type `number`, else `decimal`. Defaults to `false`.
- error `<bool>`: Set the input in error status.
- enable-min-max `<bool>`: if set to true, then the min/max boundaries are working.
- min-value `<float>`: the min boundary. Defaults to `-100`.
- max-value `<float>`: the max boundary. Defaults to `100`.

## Example
```slint
import { UInputNumber } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		HorizontalLayout {
			alignment: center;
			spacing: 4px;

			UInputNumber {
				width: 150px;
			}
		}
	}
}
```