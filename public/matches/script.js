$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "/getmatches",
    success: function(data) {
      for (var i = 0; i < JSON.parse(data).animals.length; i++) {
        console.log(JSON.parse(data).animals[i]);
      }
      
      var tempId = "foo";
      $(tempId).text("some text");
    }
  });
});
