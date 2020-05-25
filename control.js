let browserApi;
let filterAMProduct = document.getElementById('filterAMProduct');
var nowURL = "";
try {
  browserApi = browser;
} catch (e) {
  if (e instanceof ReferenceError) {
      console.log('Chrome APIモードに切り替えます。');
      browserApi = chrome;
  } else {
    throw(e);
  }
}

window.onload = function() {
    chrome.tabs.getSelected(null, function(tab) {
        nowURL = tab.url;
        console.log(tab.url);
    });
};

filterAMProduct.onclick = function() {
    chrome.tabs.getSelected(null, function(tab) {
        nowURL = tab.url;
    });

    let newURL = nowURL + "&emi=AN1VRQENFRJN5"
    console.log(newURL);

    chrome.tabs.getSelected(null,function(tab)
    {
      chrome.tabs.remove(tab.id);
    });

    browserApi.tabs.create({
        url: newURL,
        active: true
      });
};
