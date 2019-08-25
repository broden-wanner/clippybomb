# Clippy Bomb
This repository contains a function that floods a page with Clippy, the mythical create of Microsoft lore.
# Setup
[jQuery](https://code.jquery.com/) and [clippy.js](https://www.smore.com/clippy-js) are required for this to work. See their pages for instructions on how to use.

Include the javascript from this repo.
```html
<script src="clippybomb/clippyBomb.js"></script>
```
# Useage
Call the following function whenever you want Clippy to invade.
```javascript
clippyBomb();
```
To customize the messages, actions, and explosion rate of clippy, pass in an object that looks like the following.
```javascript
var options = {
    messages: ['I do not like you', 'You smell'],
    actions: ['Searching', 'Show'],
    explosionRate: 30
}
clippyBomb(options);
```
Note that `messgaes` and `actions` must be a non-empty array of strings and `explosionRate` must be a number.
