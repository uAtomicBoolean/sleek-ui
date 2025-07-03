
# Modal
Display a modal dialog box, providing a title, content area, and action buttons.    

![modal presentation](images/modal.png)

## Themes
- default

**Theming struct:**
```slint
struct UModalTheme {
	blurred-background-color: brush,
	title-horizontal-padding: length,
	title-vertical-padding: length,
	content-horizontal-padding: length,
	content-vertical-padding: length,
	buttons-horizontal-padding: length,
	buttons-vertical-padding: length,
	buttons-spacing: length,
	card-theme: UCardTheme,
	title-theme: UTitleTheme,
	close-button-theme: UIconButtonTheme,
	cancel-button-theme: UButtonTheme,
	accept-button-theme: UButtonTheme,
}
```
  
## Properties, callbacks and functions

**Properties:**
- title `<string>`: the modal's title, display in its header.
- accept-btn-text `<string>`: the text displayed in the accept button. Default to "Done".
- cancel-btn-text `<string>`: the text displayed in the cancel button. Default to "Cancel".
- accept-btn-toggle `<bool>`: allow to display or not the accept button. Default to true.
- cancel-btn-toggle `<bool>`: allow to display or not the cancel button. Default to true.
- close-on-click-outside `<bool>`: if true, the modal will be closed when clicking on its greyed background. Default to false.
- close-on-accept `<bool>`: weither to close or not the modal when clicking on the accept button. Default to true.
- close-on-cancel `<bool>`: weither to close or not the modal when clicking on the cancel button. Default to true.
- accept-btn-enabled `<bool>`: enable or disable the accept button. Default to true.
- cancel-btn-enabled `<bool>`: enable or disable the cancel button. Default to true.
- modal-min-width `<length>`: the minimum width for the modal. Default to 300px scaled fith UAppTheme.scale-factor.
- modal-min-height `<length>`: the minimum height for the modal. No default value;
- modal-max-width `<length>`: the maximum width for the modal. Default to 600px scaled fith UAppTheme.scale-factor.
- modal-max-height `<length>`: the maximum height for the modal. Default to 600px scaled fith UAppTheme.scale-factor.

**Callbacks:**
- `showed`: called when the modal is opened/showed.
- `closed`: called when the modal is closed.
- `accepted`: called when the accept button is clicked.
- `rejected`: called when the cancel button is clicked.

**Functions:**
- `show`: show the modal.
- `close`: close the modal.

## Example
```slint
import { UButton, UInput, UModal, UText } from "@sleek-ui/widgets.slint";


export component AppWindow inherits Window {
	
    VerticalLayout {
        alignment: center;
        HorizontalLayout {
            alignment: center;
            UButton {
                text: "Open modal";
                clicked => {
                    modal.show();
                }
            }
        }
    }

    modal := UModal {
        title: "Register";

        VerticalLayout {
            spacing: 4px;
            HorizontalLayout {
                spacing: 4px;
                UText {
                    text: "Username:";
                }

                UInput {
                    horizontal-stretch: 1;
                }
            }

            HorizontalLayout {
                spacing: 4px;
                UText {
                    text: "Password:";
                }

                UInput {
                    horizontal-stretch: 1;
                }
            }
        }
    }
}
```