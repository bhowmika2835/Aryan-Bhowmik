$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "/getmatches",
    success: function(data) {
      let useableData = JSON.parse(data);
      for (var i = 0; i < useableData.animals.length; i++) {
        
        $('#matches').append("<p>"+ useableData.animals[i].name)
        $('#matches').append("<p>"+ useableData.animals[i].species)
        $('#matches').append("<p>"+ useableData.animals[i].age)
        $('#matches').append("<p>"+ useableData.animals[i].gender)
        $('#matches').append("<p>"+ useableData.animals[i].location)
        $('#matches').append("<p>"+ useableData.animals[i].owner_nam)
        $('#matches').append("<p>"+ useableData.animals[i].owner_num)
        $('#matches').append("<p>"+ "________________________________")
      } 
      
      
    }
  });
});
