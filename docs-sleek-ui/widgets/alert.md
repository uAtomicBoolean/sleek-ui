
# Alert
A simple alert to display a message grabbing the user's attention.  

![alert presentation](images/alert.png)

## Themes
- info
- success
- warning
- danger

**Theming struct:**
```slint
struct UAlertTheme {
	background: brush,
	border-radius: length,
	border-width: length,
	border-color: brush,
	icon-image: image,
	icon-color: brush,
	icon-size: length,
	text-color: brush,
	text-font-size: length,
	horizontal-padding: length,
	vertical-padding: length,
	close-button-theme: UIconButtonTheme,
}
```
  
## Properties, callbacks and functions
Inherits from `Rectangle`.  

**Properties:**
- message `<string>`

## Example
```slint
import { UAlert } from "@sleek-ui/widgets.slint";


export component AppWindow inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 8px;
		HorizontalLayout {
            alignment: center;
            UAlert {
                message: "This is a simple alert.";
            }
        }

        HorizontalLayout {
            alignment: center;
            UAlert {
                theme: UAlertThemes.success;
                message: "This is a simple alert.";
            }
        }

        HorizontalLayout {
            alignment: center;
            UAlert {
                theme: UAlertThemes.warning;
                message: "This is a simple alert.";
            }
        }

        HorizontalLayout {
            alignment: center;
            UAlert {
                theme: UAlertThemes.danger;
                message: "This is a simple alert.";
            }
        }
	}
}
```