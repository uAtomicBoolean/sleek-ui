# Select
A widget to chose a value from a selection with a dropdown.  
It is possible to disable an option in the select (this can be used as a separator).

![select presentation](images/select.png)

## Theming properties
- t-background `<brush>`
- t-border-width `<length>`
- t-border-radius `<length>`
- t-border-color `<brush>`
- t-border-color-hover `<brush>`
- t-border-color-disabled `<brush>`
- t-font-size `<length>`
- t-text-color `<brush>`
- t-text-color-disabled `<brush>`
- t-icon-size `<length>`
- t-icon-color `<brush>`
- t-popup-max-height `<length>`: the maximum height of the select popup. Defaults to `124px`.
- t-option-height `<length>`: this avoid having options with changing heights depending on the number of options. Defaults to `29px`.
- t-option-bg-fill `<brush>`
- t-option-bg-selected `<brush>`
- t-option-text-selected-color `<brush>`
- t-option-text-disabled-color `<brush>`
- t-padding-vertical `<length>`
- t-padding-horizontal `<length>`
- t-padding-popover `<length>`

> [!WARNING]
> It is highly recommended to define the `t-option-height`.
> Otherwise, the options' height might change depending on the number of options.
> This leads to some wrong height calculations for the ScrollView viewport.

## Properties, callbacks and functions
Inherits from `ButtonInterface`.   

**Properties:**
- current-index `<int>`: the current selected index. Set this to -1 to have no selected option (-1 by default).
- options `<[{text: string, value: string, enabled: bool}]>`: the list of available options in the select.

## Example
```slint
import { USpinner } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 4px;
		HorizontalLayout {
			alignment: center;
			spacing: 4px;
            USelect {
                width: 150px;
                options: [
                    { text: "Apple", value: "apple", enabled: true },
                    { text: "Peach", value: "peach", enabled: true },
                    { text: "Apricot", value: "apricot", enabled: true },
                    { text: "Orange", value: "orange", enabled: true },
                ];
            }
		}
	}
}
```