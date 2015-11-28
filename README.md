# eventBoiler
A minimalist, nano-library for using event listeners. :volcano:

`evBo` includes built in throttling thanks to [odis](https://github.com/ryanpcmcquen/odis).

Fork this fiddle to try it out:

https://jsfiddle.net/ryanpcmcquen/fy84758z/


To include in your project just add the script in the coolest spot :sunglasses:

    <script src="https://cdn.rawgit.com/ryanpcmcquen/eventBoiler/b5ee892df715221acf3eab09d0192978c8760842/eventBoiler.min.js"></script>

https://cdn.rawgit.com/ryanpcmcquen/eventBoiler/b5ee892df715221acf3eab09d0192978c8760842/eventBoiler.min.js

:thought_balloon: P.S. It is under a kilobyte! :moyai:

### How do I make it go?

    evBo(".foo", "click", function () {
      console.log(this);
    });

Here you are adding a click listener to the `.foo` selector, and apparently your project is pretty lame, because you are just logging it to the console ... :confused:
