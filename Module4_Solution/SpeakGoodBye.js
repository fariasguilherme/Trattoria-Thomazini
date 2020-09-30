(function (window) {
  
  var speakWord = "Good Bye";

  byeSpeaker = {}; // Created an object
  byeSpeaker.speak = function (name) { // Attached the speak method and linked it with the given function.
    console.log(speakWord + " " + name); // print Good Bye + space + name content of the function`s input.
  }

  window.byeSpeaker = bySpeaker; // Exposed the byeSpeaker object to the global scope.
 
})(window)