# eventBoiler
A minimalist (<0.5KB) nano-library for using event listeners. :volcano:

Fork this fiddle to try it out:

https://jsfiddle.net/ryanpcmcquen/fy84758z/


To include in your project just add the script in the coolest spot :sunglasses:

    //cdn.rawgit.com/ryanpcmcquen/eventBoiler/b5ee892df715221acf3eab09d0192978c8760842/eventBoiler.min.js

:thought_balloon: P.S. It is less than half a kilobyte! :moyai:


Or for the development version:

    //cdn.rawgit.com/ryanpcmcquen/eventBoiler/f55569e93b3211daf317893043e7e26e85b8cfc2/eventBoiler.js


### How do I make it go?

    eventBoiler(".foo", "click", function () {
      console.log(this);
    });

Here you are adding a click listener to the `.foo` selector, and apparently your project is pretty lame, because you are just logging it to the console ... :-1:
