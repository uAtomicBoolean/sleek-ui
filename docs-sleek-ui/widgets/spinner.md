# Spinner
A widget displaying a loading state.  

![spinner presentation](images/spinner.png)

## Themes
- default

**Theming struct:**
```slint
struct USpinnerTheme {
	size: length,
	color: brush,
}
```

## Properties, callbacks and functions
Inherits from `Image`.   

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