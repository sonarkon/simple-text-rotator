#Super Simple Text Rotator by Pete R. modified and extended by Derek Ortiz
A light weight jQuery plugin that will allow you to add a super simple rotating text to your website with little to no markup
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

[![Super Simple Text Rotator](http://www.thepetedesign.com/images/simple_text_rotator_image.png "Super Simple Text Rotator")](http://www.thepetedesign.com/demos/jquery_super_simple_text_rotator_demo.html)

## Demo
[View demo](http://derekortiz.net/static_pages/simple_text_rotator_demo.html)

## Usage
To use this on your website, simply include the latest jQuery library found here together with `jquery.simple-text-rotator.js` and `simpletextrotator.css` into your document's `<head>`, and all you need is one extra tag for your html document and a function call:
  
````html
Super <span class="rotate">Simple, Customizable, Light Weight, Easy</span> Text Rotator with Style
````

Put the words to want to cycle inside a tag of `<span class="rotate"></span>` and separate it with a comma and the script will automatically cycle through each words in order.

````javascript
$(".rotate").textrotator({
  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 2000, // Duration of the animation in milliseconds
  delay: 1500, // Duration before and between each animation. Total loop time equal to speed + delay
});
````
## Options

### animation
You can pick the way it animates when rotating through words. Options are fade (default), dissolve, flip, flipUp, flipCube, flipCubeUp and spin.

### separator
Allows you to specify another character to separate text to be rotated. Default set to ","

### speed
Adjust duration of the transition animation in milliseconds. Default is 500.

### delay
Adjust the delay at before and between animations/transitions. Default is set to 1500 milliseconds.

### startIndex
Start from another location in your list of words. Index should be a number from 0 to N - 1 if N is the number of words to rotate. Specifying an index greater than the number of items will wrap to the beginning of the list. Default set to 0.

### shuffle
Randomly displays words if set to true. False is the default.

### styleId
String used to id the style tag appended to the document head. Used to override ID in case of naming collisions. String shoul not be a css selector so a valid string here would be "mystring" instead of "#mystring" Default set to "simple-text-rotator-styles"

