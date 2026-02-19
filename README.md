# SleekUI <!-- omit in toc -->
A UI components library built with/for [Slint](https://github.com/slint-ui/slint) based on [ant design](https://ant.design).  
<br />
<br />
<br />

<p align="center">
	<img src="images/widgets_gallery.png" width="500px" />
</p>
<br />
<br />
<br />

## Table of content <!-- omit in toc -->
- [Installation](#installation)
- [How to use](#how-to-use)
	- [Use the widgets](#use-the-widgets)
- [Resources](#resources)

## Installation
1. Download the library's archive from the latest release.
2. Unzip the archive and place the resulting `sleek-ui` wherever you want.
3. [Add a library path](https://docs.slint.dev/latest/docs/slint/guide/language/coding/file/#component-libraries) to use it with `@sleek-ui` in your slint code.

## How to use
### Use the widgets
Import the widgets from the `@sleek-ui/widgets.slint` file.  
Import the widgets' themes from the `@sleek-ui/widget-themes.slint` file.  

```slint
import { UText, UButton } from "@sleek-ui/widgets.slint";

export component AppWindow inherits Window {
	width: 400px;
	height: 500px;
	in-out property <int> counter: 0;
	VerticalLayout {
		alignment: center;

		HorizontalLayout {
			alignment: center;
			// Using the default theme.
			UText {
				text: "Counter: \{counter}";
			}
		}

		HorizontalLayout {
			alignment: center;
			spacing: 4px;
			// Using one of the premade theme.
			UButton {
				variant: primary;
				text: "Decrement";
				clicked => {
					root.counter -= 1;
				}
			}

			UButton {
				text: "Reset";
				clicked => {
					root.counter = 0;
				}
			}

			// Each button's theme has a danger variant.
			UButton {
				variant: primary;
				danger: true;
				text: "increment";
				clicked => {
					root.counter += 1;
				}
			}
		}
	}
}
```

## Resources
- Ant Design Theme editor : https://ant.design/theme-editor
