# ButtonInterface
An interface that is inherited by most interactive widgets.  
It implements a TouchArea and a FocusScope and export their properties and callbacks.  
This also implements a few basics such as calling the `clicked` callback when pressing the spacebar on a focused widget or an easing animation with a duration of `200ms` (`UAppTheme.base-animation-duration`) on the background and border of its rectangle.

Here are the properties and callbacks exported from the interface :
```
in-out property <bool> enabled: true;
in-out property <MouseCursor> touch-mouse-cursor: pointer;
out property <bool> has-focus <=> focus-scope.has-focus;
out property <bool> has-hover <=> touch.has-hover;
out property <bool> pressed <=> touch.pressed;
out property <MouseCursor> mouse-cursor <=> touch.mouse-cursor;
out property <length> mouse-x <=> touch.mouse-x;
out property <length> mouse-y <=> touch.mouse-y;
out property <length> pressed-x <=> touch.pressed-x;
out property <length> pressed-y <=> touch.pressed-y;

// TouchArea callbacks
callback clicked();
callback double-clicked();
callback moved();
callback pointer-event();
callback scroll-event() -> EventResult;

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