# sense-images-links-extension

//A simple table modified with conditional logic to detect hyperlinks/images, user controlled by switches.//

This extension is based off of the Simple Table extension, and allows for automatic detection of hyperlinks/images. The conditional logic currently looks for cell values with 'http'/'https' or 'www' for hyperlinks, and searches for 'img.', '.jpg', '.gif', and '.png' for image detection. Detection is controlled by switches, which allows the user to decide if they would like to show links, images, or neither. If both link and image detection is turned on, if an image is detected, it will also turn it into a clickable URL. The option also exists for the user to change the size of the images as well.



Example Usage:

If you have an image hosted somewhere that you would like to have in a table, simply use the Image's address as the value of the field:

  Images:
  Load * INLINE [
	Image, Image Location
  Qlik Outside Image, https://dyflex.com.au/wp-content/uploads/2014/11/sense1.png
];


If you have local images that you would like to have in a table, if on the Desktop, you can place them into:

  'C:\Users{User Name}\Documents\Qlik\Sense\Content\Default' (or any sub folder from here, e.g. 'Default\MyAppImages')
  
  Images:
  Load * INLINE [
    Image, Image Location        
    Qlik Local Image, http://localhost:4848/content/default/sense.png
    Qlik Outside Image, https://dyflex.com.au/wp-content/uploads/2014/11/sense1.png
  ];
  

If on the server, you can import the images to a Content Library, and then reference them from there:

(In this example, I created a new Content Library called 'MyImages' and uploaded 'sense.png')

  Images:
  Load * INLINE [
	  Image, Image Location
      Qlik Server Image, https://qliksense/content/MyImages/sense.png
      Qlik Outside Image, https://dyflex.com.au/wp-content/uploads/2014/11/sense1.png
  ];



////The intended purpose of this extension is to show how quickly and easy it is to modify an extension for your needs. This is by no means bulletproof, and it is not intended for production.////
