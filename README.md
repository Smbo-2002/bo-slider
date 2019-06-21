# bo-slider
Light and easy to use jQuery plugin, which will make your work much more productive. Also, supports video files.

## Welcome, getting started

For our plugin to work properly, we might be sure, that **All** the steps below are followed

1. Include the css file. There are two options original and mindified version.
`<link rel="stylesheet" href="style.min.css">`

2. Include the jQuery library, here is cdn link
`<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>`

3. Include our plugin's JS file. There are also two options. __You MAY pay attention that the file is included at the end of the <body> tag
`<script	type="text/javascript" src="script.min.js"></script>`

4. Give the structure of the slider. For more details about the tags, please scroll down.
`<ul class='example-slider'>`
`  <li data-url="https://example.com/image1.jpg" data-type='image'></li>`
`  <li data-url="https://example.com/video1.mp4" data-type='video'></li>`
`  <li data-url="https://example.com/image2.png" data-type='image'></li>`
`</ul>`

5. Run the plugin and you are good to go!
`<script type="text/javascript">
		$('.bo-slider').boSlider({
			slideShow: false,
			interval: 3000,
			animation: "fade"
		});
	</script>`
## Details
include the `data-url` attribute defining the url of the item and also `data-type` attribute, which can be both _image_ and _video_
The plugin can get three options
__slideShow__, which by default is "false". Set it _true_ ,if you want the slider to autoplay.
__interval__, which by default is "4000". Notice that we give time in miliseconds.
__animation__, defines the type of the animation that our plugin is going to use. There are three options "fade", "slide" and you can write anything else there if you want it to be without animations.

## Thank you!
