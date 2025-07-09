# ButtonInterface
An interface that is inherited by most interactive widgets.  
It implements a TouchArea and a FocusScope and export their properties and callbacks.  
This also implements a few basics such as calling the `clicked` callback when pressing the spacebar on a focused widget or an easing animation with a duration of `200ms` on the background and border of its rectangle.

Here are the properties and callbacks exported from the interface :
```
in-out property <bool> enabled <=> touch.enabled;
out property <bool> has-focus <=> focus-scope.has-focus;
out property <bool> has-hover <=> touch.has-hover;
out property <bool> pressed <=> touch.pressed;

// Custom callback that is called from the TouchArea.
// This allows to set the focus and then remove it to the widget when clicking on it before sending the callback.
callback clicked();

// TouchArea callbacks
callback double-clicked <=> touch.double-clicked;
callback moved <=> touch.moved;
callback pointer-event <=> touch.pointer-event;
callback scroll-event <=> touch.scroll-event;

// FocusScope callbacks
callback key-pressed <=> focus-scope.key-pressed;
callback key-released <=> focus-scope.key-released;
callback focus-changed-event <=> focus-scope.focus-changed-event;
```

Check the documentation of [TouchArea](https://docs.slint.dev/latest/docs/slint/reference/gestures/toucharea/) and [FocusScope](https://docs.slint.dev/latest/docs/slint/reference/keyboard-input/focusscope/) for more informations.  

## Example
```slint
import { ButtonInterface } from "sleek-ui/utils/button-interface.slint";

export component CustomButton inherits ButtonInterface {
	Text {
		text: "this is a custom buttom";
	}
}
```