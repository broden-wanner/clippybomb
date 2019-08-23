# Clippy Bomb
This repository contains a function that floods a page with Clippy, the mythical create of Microsoft lore.
# Install
First, you need to put in some jQuery.
```html
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
```
Then, the clippy files must be included. Download from the [clippy.js repo](https://github.com/smore-inc/clippy.js). Put the folder in your directory and name the folder with the repo `clippyjs`. Then, put the style sheet in the head.
```html
<link rel="stylesheet" type="text/css" href="clippyjs/build/clippy.css" media="all">
```
And include the javascript at the end of the body.
```html
<script src="clippyjs/build/clippy.min.js"></script>
```
Finally, include the javascript from this repo.
```html
<script src="clippybomb/clippyBomb.js"></script>
```
# Useage
Call the following function whenever you want Clippy to invade.
```javascript
clippyBomb();
```
# Demo
