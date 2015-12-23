# sense-images-links-extension
A simple table modified with conditional logic to detect hyperlinks/images, user controlled by switches.

*This extension is intended to work with hosted images, so the field value must be an image URL.

This extension is based off of the Simple Table extension, and allows for automatic detection of hyperlinks/images. The conditional logic currently looks for cell values with 'http'/'https' or 'www' for hyperlinks, and searches for 'img.', '.jpg', '.gif', and '.png' for image detection. Detection is controlled by switches, which allows the user to decide if they would like to show links, images, or neither. If both link and image detection is turned on, if an image is detected, it will also turn it into a clickable URL. The option also exists for the user to change the size of the images as well.


////The intended purpose of this extension is to show how quickly and easy it is to modify an extension for your needs. This is by no means bulletproof, and it is not intended for production.////
