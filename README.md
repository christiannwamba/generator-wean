generator-wean
================================
>A NW.JS (Node-Webkit) yeoman generator for Node-Webkit, Express, Angular and Mean

Yeoman generator for NW.js (Node-Webkit). WEAN is coined name for Webkit Express Angular Node just like MEAN by  [Arvind Ravulavaru](https://github.com/arvindr21) .

## Requirements
* [Node](https://nodejs.org)
* [Grunt](http://gruntjs.com/)
* [Yeaoman](http://yeoman.io/)
* [Bower](http://bower.io/)

## Installation
To install the generator:

`npm install -g generator-wean`

You need to have node, grunt, yo and bower installed globally before running the command. Therefore download node from the link and run:

`npm install -g yo grunt bower`

### Scaffold an application
Scaffolding a WEAN application works like every other Yeoman generator. If you have the generator installed, cd to an empty project directory and run:

`yo wean`

Interact with Yeoman to create the application.

## Running
The application will scaffold completely while generating but there are chances that npm and bower installation might not be successful, probably because of unstable internet connection as npm needs to download NW.js which is > 30mb therefore the application will not run.

If such case occurs, run `npm install` and `bower install` to complete the installation.

To run the NW application:

`grunt` or `grunt run`

## Building
Another amazing feature of this generator is that you can build to all mac, windows, and linux using a simple command. If you think you app is ready for consumption, run:

`grunt build:{platform}`

The platform placeholder can be win, mac, linux and all. Choose all to build for all the platforms. If the parameters are not specified, it builds for the current OS.

eg: 

`grunt build`

`grunt build:mac`

`grunt build:win`

`grunt build:linux`

`grunt build:all`


## How about Icons
Yeah. Icons. Icons are very easy to setup for mac and windows. Replace `app-icon.icns` and `app-icon.ico` in the root of the project with your own version before building and that is all. Deleting them will break the build process.

## Contributing
I will really appreciate any contributions to this project (no matter how little). Please use the [guidelines](https://github.com/christiannwamba/generator-wean/blob/master/CONTRIBUTING.md)

## Thanks
* [Arvind Ravulavaru](https://github.com/arvindr21/slush-wean) (Inspiration)
* [elmuchaco](http://stackoverflow.com/a/22476910)


## License 

The MIT License

Copyright (c) 2014, Christian Nwamba

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
