
# Breadcrumb
A breadcrumd to display your current navigation level.  
All steps before last are clickable to manage navigation from the breadcrumb.  

![breadcrumb presentation](images/breadcrumb.png)

## Themes
- default

**Theming struct:**
```slint
struct UBreadcrumbTheme {
	spacing: length,
	icon-separator: image,
	separator-size: length,
	separator-color: brush,
	text-color: brush,
	font-size: length,
	font-weight: int,
	hover-text-color: brush,
	hover-font-size: length,
	hover-font-weight: int,
	active-text-color: brush,
	active-font-size: length,
	active-font-weight: int,
}
```
  
## Properties, callbacks and functions
Inherits from `Rectangle`.  

**Properties:**  
- steps `<[string>]>`: a list of all the steps available.

**Callbacks:**  
- `step-clicked(step: string)`: called when a step is clicked with the clicked step as the argument.

## Example
```slint
import { UBreadcrumb } from "@sleek-ui/widgets.slint";


export component AppWindow inherits Window {
	VerticalLayout {
        alignment: center;
        spacing: 40px;
        HorizontalLayout {
            alignment: center;
            UBreadcrumb {
                steps: ["Home", "Application center", "Application list", "Scriptboard"];
                step-clicked(step) => {
                    debug(step)
                }
            }
        }
    }
}
```