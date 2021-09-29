function removeImageAds(){
    let imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++){
        imgurl = "";
        if (!imgs[i].src){
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
                        imgs[i].style.borderStyle = "Solid";
                        imgs[i].style.borderWidth = "5px";
                        imgs[i].style.borderColor = "#FF2442"; // 빨간색
                        callback(response);
                        break;
                    // 무조건 삭제하는 경우
                    case "absolute":
                        imgs[i].style.borderStyle = "Solid";
                        imgs[i].style.borderWidth = "5px";
                        imgs[i].style.borderColor = "#FF2442"; // 빨간색
                        callback(response);
                        break;
                    // 광고 아님
                    case "non-ad":
                        imgs[i].style.borderStyle = "Solid";
                        imgs[i].style.borderWidth = "5px";
                        imgs[i].style.borderColor = "#3DB2FF"; // 파란색
                        callback(response);
                        break;
                    // 기타
                    default:
                        imgs[i].style.borderStyle = "Solid";
                        imgs[i].style.borderWidth = "5px";
                        imgs[i].style.borderColor = "#FF2442"; // 빨간색
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
        if(!url)
            continue;
        chrome.runtime.sendMessage({url: url},
            function (response) {
                let result = response["class"];
                switch(result){
                    // 광고인 경우
                    case "ad":
                        divs[i].style.borderStyle = "Solid";
                        divs[i].style.borderWidth = "5px";
                        divs[i].style.borderColor = "#FF2442"; // 빨간색
                        callback(response);
                        break;
                    // 무조건 삭제하는 경우
                    case "absolute":
                        divs[i].style.borderStyle = "Solid";
                        divs[i].style.borderWidth = "5px";
                        divs[i].style.borderColor = "#FF2442"; // 빨간색
                        callback(response);
                        break;
                    // 광고 아님
                    case "non-ad":
                        divs[i].style.borderStyle = "Solid";
                        divs[i].style.borderWidth = "5px";
                        divs[i].style.borderColor = "#3DB2FF"; // 파란색
                        callback(response);
                        break;
                    // 기타
                    default:
                        divs[i].style.borderStyle = "Solid";
                        divs[i].style.borderWidth = "5px";
                        divs[i].style.borderColor = "#FF2442"; // 빨간색
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
        canvases[i].style.borderStyle = "Solid";
        canvases[i].style.borderWidth = "5px";
        canvases[i].style.borderColor = "#FF2442"; // 빨간색
    }
}

window.onload = function(){
    removeImageAds();
    removeDivAds();
    removeCanvasAds();
}
