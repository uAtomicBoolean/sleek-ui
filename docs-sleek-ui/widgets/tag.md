# Tag
A simple tag.  
You can either use one of the theme or set your own colors using `text-color` and `background-color`.

![tag presentation](images/tag.png)

## Variants
- info
- danger
- warning
- success
- custom: used to implement custom themes.

## Theming properties
- t-background `<brush>`
- t-text-size: `<length>`
- t-text-color `<brush>`
- t-icon-size `<length>`
- t-border-width `<length>`
- t-border-color `<brush>`
- t-border-radius `<length>`
- t-padding-vertical `<length>`
- t-padding-horizontal `<length>`
- t-content-spacing `<length>`

## Properties, callbacks and functions
Inherits from `Rectangle`.   

**Properties:**
- text `<string>`
- text-color `<color>`
- background-color `<color>`
- icon `<image>`
- colorize-icon `<bool>`: If set to true, the icon will be colorized to the same color as the tag’s text color. Defaults to true.
- icon-placement `<IconTextPlacement>`: can be `start`, `end` or `hidden`. Defaults to `hidden`.

## Example
```slint
import { UTag } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 4px;
		HorizontalLayout {
			alignment: center;
			spacing: 4px;
			UTag {
				variant: primary;
				text: "online";
			}

			UTag {
				variant: success;
				text: "online";
			}

			UTag {
				variant: warning;
				text: "online";
			}

			UTag {
				variant: danger;
				text: "online";
			}
		}

		HorizontalLayout {
			alignment: center;
			spacing: 4px;
			// With custom colors.
			UTag {
				text: "online";
				text-color: white;
				background-color: purple;
			}
		}
	}
}
```