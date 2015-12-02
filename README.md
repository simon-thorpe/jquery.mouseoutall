# jquery.mouseoutall
jQuery event for when the mouse cursor leaves all elements. Mimics the functionality of the "mouseout" event but works on groups of elements.

```javascript
$('.multiple-elements').mouseoutall(function() {
  // Event fires!
});
```

Or with a 1 second delay:

```javascript
$('.multiple-elements').mouseoutall(1000, function() {
  // Event fires after 1 second incase it entered again!
});
```

[Online Demo](https://rawgit.com/simon-thorpe/jquery.mouseoutall/master/demo.html)
