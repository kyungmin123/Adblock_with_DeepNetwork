var checkRed;
var checkGreen;
var checkBlue;

function removeAds(){
    let imgs = document.getElementsByTagName("img");
    chrome.storage.sync.get({['keyRed']: true, ['keyGreen']: true, ['keyBlue']: true}, function(items){
        checkRed = items.keyRed;
        checkGreen = items.keyGreen;
        checkBlue = items.keyBlue;
        for(let i = 0; i < imgs.length; i++){
            chrome.runtime.sendMessage({url: imgs[i].src},
                function (response) {
                    console.log(`current checkRed is ${checkRed}`);
                    if (checkRed === false){
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                    }
                    else if (checkRed === true){
                        imgs[i].setAttribute("style", "opacity: 0.5;");
                        callback(response);
                    }
                }
            );
        }
    });
}

window.onload = function(){
    removeAds();
}
