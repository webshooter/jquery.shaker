jquery.shaker
=============

This is my first attempt at a jquery plugin. I know it needs to be overhauled to be compressed and more efficient, but for now it works.

This plugin will "shake" the provided element. I wanted this effect primarily for my custom dialog boxes in modal mode to provide a hint to users that click elsewhere that they need to handle the dialog first. The plugin will shake any block element that is passed in (i.e., any element that you can effectively apply the "left" and "top" css properties).

### Usage:

```javascript
  $("#myDiv").shaker(); // calls the shaker with the defaults
  
  $("#myDiv").shaker({  // calls the shaker with options (default values shown)
    vertical:false, // shakes element using the `top` property if set to true
    spread:16,      // total distance in pixels for the shake effect
    speed:20,       // animation speed for the shake effect
    shakes:3        // total number of shakes
  });
```
I know that jquery-ui comes with a `.shake()` function, but I didn't want to have to include the whole ui library - plus I needed an excuse to make a jquery plugin :-)
