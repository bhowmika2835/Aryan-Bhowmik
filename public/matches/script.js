$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "/getmatches",
    success: function(data) {
      for (var i = 0; i < JSON.parse(data).animals.length; i++) {
        console.log(JSON.parse(data).animals[i]);
      }
      const a = 1;
      const b = 18;
      const c = "shazin_mycompany-com";
      var tempId = "#A_" + a + "_" + b + "_" + c;
      $(tempId).text("some text");
    }
  });
});
