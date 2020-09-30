(function (window) {
  
  var speakWord = "Hello";

  var helloSpeaker = {}; // Created an object
  helloSpeaker.speak = function (name) { // Attached the speak method and linked it with the given function.
    console.log(speakWord + " " + name); // print Hello + space + name content of the function`s input.
  }
  
  window.helloSpeaker = helloSpeaker; // Exposed the helloSpeaker object to the global scope.

})(window)