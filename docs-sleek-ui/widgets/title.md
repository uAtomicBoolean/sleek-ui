# Title
A `Text` widget with predefined properties values to display a title.  

![title presentation](images/title.png)

## Theming properties
This widgets doesn't have any theming properties as it directly inherits from `Text`.  

## Properties, callbacks and functions
Inherits from `Text`. 

**Properties:**
- level `<int>`: the title's level. Goes from `1` (highest) to `6` (lowest).

If the level doesn't fit the `1-6` inclusive range, then the title will default to the level `1`.

## Example
```slint
import { UTitle } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 4px;
		HorizontalLayout {
            alignment: center;
            spacing: 4px;
            UTitle {
                level: 1;
                text: "Welcome to Sleek-ui";
            }
        }

        HorizontalLayout {
            alignment: center;
            UTitle {
                level: 2;
                text: "Welcome to Sleek-ui";
            }
        }

        HorizontalLayout {
            alignment: center;
            UTitle {
                level: 3;
                text: "Welcome to Sleek-ui";
            }
        }

        HorizontalLayout {
            alignment: center;
            UTitle {
                level: 4;
                text: "Welcome to Sleek-ui";
            }
        }

        HorizontalLayout {
            alignment: center;
            UTitle {
                level: 5;
                text: "Welcome to Sleek-ui";
            }
        }

        HorizontalLayout {
            alignment: center;
            UTitle {
                level: 6;
                text: "Welcome to Sleek-ui";
            }
        }
	}
}
```