
  var script_url = "https://script.google.com/macros/s/AKfycbzigqbeJ2FQgi4iKgGUxuBO3Wbj6BSeCpbiDPyebQ/exec";
  
  // Make an AJAX call to Google Script
function reada_value() {
    console.log("huwaaat");
    var id1=	$("#id").val();
    $("#re").css("visibility","hidden");
    var url = script_url+"?id="+id1+"&action=readtbl";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    }).done(function(json){
     // Set the variables from the results array
     // CREATE DYNAMIC TABLE.
     $("#transactions").empty();
     if (json.records.length != 0){
        $("#re").html("No Transactions found :( ");
     }
      for (var i = 0; i < json.records.length; i++) {
          date = new Date(json.records[i].Time_stamp);
          timestr= date.getMonth() + "/"+ date.getDate()+"/"+date.getFullYear();
          str="<tr>";
          str+="<td>["+json.records[i].NAME+"]<br>"+timestr+"</td>";
          str+="<td><b>"+json.records[i].CONSIGNEE+"</b><br>"+json.records[i].CONTACT+"</td>";
          str+="<td>"+json.records[i].EXPECTED_AMOUNT+"<br>"+json.records[i].SERVICE_TYPE+"</td></tr>";
          
          $("#transactions").append(str);
      }
     document.getElementById("loader").style.visibility = "hidden";

     $("#query").animate({opacity:0.0});
     $("#query").remove();
     $(".data_container").animate({opacity:1.0});
     $(".data_container").css('display','block');
    });
    document.getElementById("loader").style.visibility = "visible";
  }
      
    