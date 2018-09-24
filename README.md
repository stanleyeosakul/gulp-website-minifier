# Website Minifier
This application minifies HTML, CSS, and Javascript files for your static website project.  It will also prefix all CSS classes, if applicable.  The output folder (`/dist`) will contain all prepared files for direct upload to web hosting services.

<p align="center">
    <img width="500" height="141" src="gulpjs.png"><br>
</p>

## Version
* Gulp v3.9.1

## Static Website File Tree
In order for the program to parse files correctly, the static website MUST be structured in the following way:

* pages
  * All other `.html` files
* public
  * css
    * all `.css` files
  * files
    * all other files (eg. `.docx`, `.pdf`, etc)
  * images
    * all image files (eg. `.jpg`, `.png`, `.ico`, etc)
  * js
    * all `.js` files
* `index.html`

## How to Use
1. Ensure Gulp is installed locally: `yarn global add gulp`
1. Clone this repo git clone https://github.com/stanleyeosakul/gulp-website-minifier.git
1. Copy the cloned folder into your working directory (same level as `index.html`)
1. `cd` into the `gulp-website-minifier` folder
1. Run `yarn install` to install dependencies
1. Run `gulp`
