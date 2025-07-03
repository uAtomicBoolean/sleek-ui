# LinearProgress
A vertical or horizontal Progress display.  

![linear progress presentation](images/linear-progress.png)

## Themes
- primary
- success
- warning
- danger

**Theming struct:**
```slint
struct UProgressTheme {
	progress-color: brush,
	background: brush,
	default-size: length,
	radius: length,
}
```

## Properties, callbacks and functions
Inherits from `Rectangle`.  

**Properties:**  
- orientation `<Orientation>`: define if the progress is horizontal or vertical.
- alignment `<ProgressAlignment>`: define if the progress starts from the start or the end.
- progress `<percent>`: the current progress of the widget.
- indeterminate `<bool>`: if true, then the progress will be locked at 30% and will display a loading state.
- progress-color `<brush>`: the main color of the progress.

## Example
```slint
import { UProgress } from "@sleek-ui/widgets.slint";

export component App inherits Window {
	VerticalLayout {
		alignment: center;
		spacing: 4px;
		HorizontalLayout {
            alignment: center;
            spacing: 4px;
            UProgress {
                width: 300px;
                progress: 50%;
            }
        }

        HorizontalLayout {
            alignment: center;
            spacing: 4px;
            UProgress {
                width: 300px;
                indeterminate: true;
            }
        }

        HorizontalLayout {
            alignment: center;
            spacing: 4px;
            UProgress {
                width: 300px;
                alignment: end;
                progress: 50%;
            }
        }

        HorizontalLayout {
            alignment: center;
            spacing: 4px;
            UProgress {
                height: 300px;
                orientation: vertical;
                progress: 50%;
            }
        }
	}
}
```