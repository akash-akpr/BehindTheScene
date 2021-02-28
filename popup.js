var allData = [];

var id = '';
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      id = (tabs[0].url.substring(30,38));
   }
);


$(function(){
  $('#sentSceneData').click(function(){
    chrome.storage.sync.get(['minutes','seconds','songName'],function(sceneInfo){
      if($('#minutes').val() && $('#seconds').val() && $("#songName").val()){
        var idData = {};
        var timeData = {};
        var sceneData = [];
        var time = parseInt($("#minutes").val() * 60) + parseInt($('#seconds').val());
        sceneData.push($('#songName').val());
        timeData[time] = sceneData;
        idData[id] = timeData;
        allData.push(idData);
        for (var key in idData){
          for (var key1 in timeData){
            for (var data in sceneData){
              chrome.extension.getBackgroundPage().console.log("ID:" + key + "\nTime: "+ key1 + "\nScene data: " + timeData[key1]);
            }
          }
        };
        $('#minutes').val('');
        $('#seconds').val('');
        $('#songName').val('');
      }
      else{
        alert("You have not inputted valid values");
      }
    })
  })
});
