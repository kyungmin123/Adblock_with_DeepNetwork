function removeAds(){
    let imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++){
        chrome.runtime.sendMessage({url: imgs[i].src},
            function (response) {
                if(response["isAd"] === "yes"){
                    imgs[i].setAttribute("style", "display: none !important;");
                    callback(response);
                }
            }
        );
    }
}

removeAds();