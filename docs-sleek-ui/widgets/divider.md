# Divider
A simple divider to split a container horizontally or vertically.  
It is, by default, oriented horizontally.

![divider presentation](images/divider.png)

## Properties, callbacks and functions
Inherits from `Rectangle`.  

**Properties:**
- orientation `<Orientation>`: `horizontal` by default.

## Example
```slint
import { UDivider } from "@sleek-ui/widgets.slint";


export component AppWindow inherits Window {
	VerticalLayout {
		alignment: center;
		HorizontalLayout {
            alignment: center;
            UText {
                width: 500px;
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                wrap: word-wrap;
            }
        }

        HorizontalLayout {
            alignment: center;
            padding-top: 10px;
            padding-bottom: 10px;
            UDivider {
                width: 300px;
            }
        }

        HorizontalLayout {
            alignment: center;
            UText {
                width: 500px;
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                wrap: word-wrap;
            }
        }
	}
}
```