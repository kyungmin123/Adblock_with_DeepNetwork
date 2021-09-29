function removeImageAds(){
    let imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++){
        imgurl = "";
        if (!imgs[i])
            continue;
        if (imgs[i].src == ""){
            if (imgs[i].getAttributeNames('adfit-main-img-url'))
                imgurl = imgs[i].getAttributeNames('adfit-main-img-url');
            else
                continue;
        }
        imgurl = imgs[i].src
        chrome.runtime.sendMessage({url: imgurl},
            function (response) {
                let result = response["class"];
                switch(result){
                    // 광고인 경우
                    case "ad":
                        imgs[i].remove();
                        callback(response);
                        break;
                    // 무조건 삭제하는 경우
                    case "absolute":
                        imgs[i].remove();
                        callback(response);
                        break;
                    // 광고 아님
                    case "non-ad":
                        callback(response);
                        break;
                    // 기타
                    default:
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                        break;
                }
            }
        );
    }
}

function removeDivAds(){
    let divs = document.getElementsByTagName("div");
    for(let i = 0; i < divs.length; i++){
        let style = divs[i].currentStyle || window.getComputedStyle(divs[i], false);
        url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        if (!divs[i])
            continue;
        if(url == "")
            continue;
        chrome.runtime.sendMessage({url: url},
            function (response) {
                let result = response["class"];
                switch(result){
                    // 광고인 경우
                    case "ad":
                        divs[i].remove();
                        callback(response);
                        break;
                    // 무조건 삭제하는 경우
                    case "absolute":
                        divs[i].remove();
                        callback(response);
                        break;
                    // 광고 아님
                    case "non-ad":
                        callback(response);
                        break;
                    // 기타
                    default:
                        divs[i].setAttribute("style", "display: none;");
                        callback(response);
                        break;
                }
            }
        );
    }
}

function removeCanvasAds(){
    let canvases = document.getElementsByTagName("canvas");
    for(let i = 0; i < canvases.length; i++){
        canvases[i].remove();
    }
}

window.onload = function(){
    removeImageAds();
    removeDivAds();
    removeCanvasAds();
}
