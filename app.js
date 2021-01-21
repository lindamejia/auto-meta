$(document).ready(function(){
  $('button').click(function(){
      var data = $('#txt').val();
      if(data == '')
          return;
      
      JSONToCSVConvertor(data, "Vehicle Report", true);
  });
});

function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {  
  var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
  var link = document.createElement("a");    
  link.href = uri;
  link.style = "visibility:hidden";
  link.download = fileName + ".csv";
  
  //this part will append the anchor tag and remove it after automatic click
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}