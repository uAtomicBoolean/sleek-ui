# Spinner
A widget displaying a loading state.  

![spinner presentation](images/spinner.png)

## Theming properties
- t-color `brush`
- t-rotation-speed `<angle>`: the rotation angle used in the rotation speed calculation. Defaults to `240deg`.

## Properties, callbacks and functions
Inherits from `Image`. 

**Properties:**
- size `<length>`: the spinner's width and height.

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
            USpinner {
                size: 32px;
            }
		}
	}
}
```