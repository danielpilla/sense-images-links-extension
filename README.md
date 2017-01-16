# sense-images-links-extension

**A simple table modified with conditional logic to detect hyperlinks/images, user controlled by switches.**

This extension is based off of the Simple Table extension, and allows for automatic detection of hyperlinks/images as well as raw HTML input. The conditional logic currently looks for cell values beginning with 'http'/'https' or 'www' for hyperlinks, and searches for 'img.', '.jpg', '.gif', and '.png' for image detection. Detection is controlled by switches, which allows the user to decide if they would like to show links, images, or neither. If both link and image detection is turned on, if an image is detected, it will also turn it into a clickable URL. The option also exists for the user to change the size of the images as well.

*Note-- inputting raw HTML will allow you to change the font-size, insert videos/links, and pretty much anything you can do in standard HTML. This extension simply makes it easier for a business user to work with links/images. You can bypass the extensions auto functinality all together and just use HTML if you'd like.

**With the newest update (1/16/2017) the extension now allows for custom labeling options including delimters, static labels, selectable/not selectable links, and HTML input.**
___
You can now derive custom labels by building a composite field of both the URL and the desired label on the backend. The extension now has the ability to toggle on/off delimiters, parsing out the desired label. The below example utilizes a pipe.
```
Data:
Load * INLINE [
	URL
    www.google.com|Google
];
```

<img style="-webkit-user-select: none" src="http://i.imgur.com/u9tZiyO.png">


Before:


<img style="-webkit-user-select: none" src="http://i.imgur.com/cVvzxCm.png">


After:


<img style="-webkit-user-select: none" src="http://i.imgur.com/iPYyPrb.png">



___
Static Labels:


<img style="-webkit-user-select: none" src="http://i.imgur.com/2da3f73.png">


<img style="-webkit-user-select: none" src="http://i.imgur.com/mzRpwsI.png">


___

Raw HTML Input:

*Note, the 'Enable Raw HTML' switch will simply turn off all of the other auto-detection functionality. The table by default accepts HTML -- e.g. if you have 'Enable Links' switched on, it will bypass it.


```
Data:
Load * INLINE [
	URL
    '<a href="https://www.google.com" target="_blank">Google</a>'
];
```

<img style="-webkit-user-select: none" src="http://i.imgur.com/eiTNVW9.png">


<img style="-webkit-user-select: none" src="http://i.imgur.com/ZTGSsww.png">


___
Embed Videos using Raw HTML Input:


*Please be aware of mixed media (i.e. trying to watch an http video in a secure environment.


```
Data:
Load * INLINE [
	URL
    '<iframe width="854" height="480" src="http://www.youtube.com/embed/bOpZHocfLOY" frameborder="0" allowfullscreen></iframe>'
];
```


<img style="-webkit-user-select: none" src="http://i.imgur.com/Cc21J6T.png">


___
Images:


<img style="-webkit-user-select: none" src="http://i.imgur.com/ACd8qG6.jpg" width="400">

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
