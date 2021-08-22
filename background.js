/*
chrome.runtime.onInstalled.addListener(function(details){
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: 'www.netflix.com',
            pathPrefix: '/watch/',
            schemes: ['http', 'https']
          }
        })
      ],
      actions:[new chrome.declarativeContent.ShowPageAction()]
    }]);
  });


});*/
if  ('service_worker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/background.js');
  });
}
