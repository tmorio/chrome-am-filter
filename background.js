chrome.contextMenus.create({
    title: '熱帯雨林フィルタを実行',
    type: 'normal',
    contexts: ['all'],
    onclick: (info, tab) => {
      let browserApi;
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
      
      nowURL = info.pageUrl;
        
      let newURL = nowURL + "&emi=AN1VRQENFRJN5"
  
      chrome.tabs.getSelected(null,function(tab)
      {
        chrome.tabs.remove(tab.id);
      });
  
      browserApi.tabs.create({
          url: newURL,
          active: true
        });
    }
  })