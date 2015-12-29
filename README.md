# sense-images-links-extension

**A simple table modified with conditional logic to detect hyperlinks/images, user controlled by switches.**

This extension is based off of the Simple Table extension, and allows for automatic detection of hyperlinks/images. The conditional logic currently looks for cell values with 'http'/'https' or 'www' for hyperlinks, and searches for 'img.', '.jpg', '.gif', and '.png' for image detection. Detection is controlled by switches, which allows the user to decide if they would like to show links, images, or neither. If both link and image detection is turned on, if an image is detected, it will also turn it into a clickable URL. The option also exists for the user to change the size of the images as well.


<img style="-webkit-user-select: none" src="http://i.imgur.com/ACd8qG6.jpg" align="middle" width="350">
<img style="-webkit-user-select: none" src="http://i.imgur.com/Xax6A3T.jpg" align="middle" width="150">


Example Usage:
If you want to have a externally hosted image displayed in a table, you can simply reference that location directly:

```
Images:
Load * INLINE [
	Image, Image Location
    Qlik Outside Image, https://dyflex.com.au/wp-content/uploads/2014/11/sense1.png
];
```

If you want to have a locally stored image displayed in a table and you are using *Qlik Sense Enterprise*, then you must first upload your image(s) to a Content Library via the QMC. You can then reference the images from that location.
(In this example, I have created a Content Library called 'MyImages' and uploaded the image 'sense.png')

```
Images:
Load * INLINE [
	Image, Image Location
    Qlik Server Image, https://qliksense/content/MyImages/sense.png
    Qlik Outside Image, https://dyflex.com.au/wp-content/uploads/2014/11/sense1.png
];
```

If you want to have a locally stored image displayed in a table and you are using *Qlik Sense Desktop*, then you must first put your image(s) into 'C:\Users\YourUserName\Documents\Qlik\Sense\Content\Default' or any sub folder of that location. 
(In this example, I have placed an image 'sense.png' into my default content folder)

```
Images:
Load * INLINE [
	Image, Image Location
    Qlik Local Image, http://localhost:4848/content/default/sense.png
];
```
<img style="-webkit-user-select: none" src="http://i.imgur.com/NG0Ne5i.jpg" width="350">




**The intended purpose of this extension is to show how quickly and easy it is to modify an extension for your needs. This is by no means bulletproof, and it is not intended for production.**
