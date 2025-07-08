
# Alert
A simple alert to display a message grabbing the user's attention.  

![alert presentation](images/alert.png)

## Variants
- info
- success
- warning
- danger
- base: used to implement custom themes.

## Theming properties
- t-background `<brush>`
- t-border-radius `<length>` 
- t-border-width `<length>` 
- t-border-color `<brush>` 
- t-icon-image `<image>` 
- t-icon-color `<brush>` 
- t-icon-size `<length>` 
- t-text-color `<brush>` 
- t-text-font-size `<length>` 
- t-horizontal-padding `<length>` 
- t-vertical-padding `<length>` 
- t-close-button-variant `<UIconButtonVariant>`: defaults to `text-stripped` which is a ligthened version of the `text` variant. 
  
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
                variant: success;
                message: "This is a simple alert.";
            }
        }

        HorizontalLayout {
            alignment: center;
            UAlert {
                variant: warning;
                message: "This is a simple alert.";
            }
        }

        HorizontalLayout {
            alignment: center;
            UAlert {
                variant: danger;
                message: "This is a simple alert.";
            }
        }
	}
}
```