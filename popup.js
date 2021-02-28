var sceneData = {};
var test = 0;

$(function(){
  $('#sentSceneData').click(function(){
    chrome.storage.sync.get(['time','songName'],function(sceneInfo){
       sceneData[$('#time').val()] = $('#songName').val();
      for (var key in sceneData){
        chrome.extension.getBackgroundPage().console.log(key + ":" + sceneData[key]);
      };
      $('#time').val('');
      $('#songName').val('');



    })
  })
});
