
# Collapse
A container that hide or show its children when clicked.  

![collapse presentation](images/collapse.png)

## Themes
- default

**Theming struct:**
```slint
struct UCollapseTheme {
	background: brush,
	border-width: length,
	border-color: brush,
	border-radius: length,
	text-color: brush,
	font-size: length,
	font-weight: int,
	icon-size: length,
	icon-color: brush,
}
```
  
## Properties, callbacks and functions
Inherits from [ButtonInterface](./button-interface.md).  

**Properties:**
- title `<string>`
- collapse-open `<bool>`
- content-width `<length>`: define the content's width inside the collapse.
- content-height `<length>`: same as above but for the height.

## Example
```slint
import { UCollapse, UText } from "@sleek-ui/widgets.slint";


export component AppWindow inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 8px;
		HorizontalLayout {
            alignment: center;
			spacing: 4px;
            UCollapse {
                title: "A basic collapse";
				content-width: 300px;
                UText {
                    text: "This text is visible only when collapse-open is true.";
                }
            }
        }
	}
}
```