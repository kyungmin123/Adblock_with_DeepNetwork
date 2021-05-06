function removeAds(){
    let imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++){
        chrome.runtime.sendMessage({url: imgs[i].src},
            function (response) {
                if(response["isAd"] === "no"){
                    imgs[i].setAttribute("style", "opacity: 0.4;");
                    callback(response);
                }
                else if (response["isAd"] === "yes"){
                    imgs[i].setAttribute("style", "opacity: 0.0;");
                    callback(response);
                }
            }
        );
    }
}

removeAds();
