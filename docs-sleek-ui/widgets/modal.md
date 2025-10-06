
# Modal
Display a modal dialog box, providing a title, content area, and action buttons.    

![modal presentation](images/modal.png)

## Properties, callbacks and functions
**Properties to manage modal appearance and behavior:**
- title `<string>`: the modal's title, display in its header.
- close-on-click-outside `<bool>`: if true, the modal will be closed when clicking on its greyed background. Defaults to false.
- close-on-accept `<bool>`: weither to close or not the modal when clicking on the accept button. Defaults to true.
- close-on-cancel `<bool>`: weither to close or not the modal when clicking on the cancel button. Defaults to true.
- modal-min-width `<length>`: Defaults to 300px * scale-factor.
- modal-min-height `<length>`: Defaults to 300px * scale-factor.
- modal-max-width `<length>`: Defaults to 300px * scale-factor.
- modal-max-height `<length>`: Defaults to 300px * scale-factor.

**Properties to manage the accept and cancel buttons:**
- accept-btn-text `<string>`: the text displayed in the accept button. Defaults to "Done".
- cancel-btn-text `<string>`: the text displayed in the cancel button. Defaults to "Cancel".
- accept-btn-toggle `<bool>`: allow to display or not the accept button. Defaults to true.
- cancel-btn-toggle `<bool>`: allow to display or not the cancel button. Defaults to true.
- accept-btn-danger `<bool>`: allow to set the button to its `danger` state. Defaults to false.
- cancel-btn-danger `<bool>`: allow to set the button to its `danger` state. Defaults to false.
- accept-btn-enabled `<bool>`: enable or disable the accept button. Defaults to true.
- cancel-btn-enabled `<bool>`: enable or disable the cancel button. Defaults to true.

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