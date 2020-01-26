$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "/getmatches",
    success: function(data) {
      let useableData = JSON.parse(data);
      for (var i = 0; i < useableData.animals.length; i++) {
        
        console.log(useableData.animals[i].name);
        console.log(useableData.animals[i].age)
        $('#matches').append("<p>"+usableData.animals[i]+"</p>")
      } 
      
      
    }
  });
});
