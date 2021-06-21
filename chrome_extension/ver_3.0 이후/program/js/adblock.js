function removeImageAds(){
    let imgs = document.getElementsByTagName("img");
    chrome.storage.sync.get({['opA']: true, ['opB']: true, ['opD']: true, ['opE']: true, ['opP']: true}, function(items){
        optionA = items.opA;
        optionB = items.opB;
        optionD = items.opD;
        optionE = items.opE;
        optionP = items.opP
        for(let i = 0; i < imgs.length; i++){
            if (!imgs[i].src)
                continue;
            chrome.runtime.sendMessage({url: imgs[i].src},
                function (response) {
                    let imgclass = response["class"];
                    switch(imgclass){
                        // 광고:
                        case "a":
                            if (optionA){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 
                        case "b":
                            if (optionB){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 
                        case "d":
                            if (optionD){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고
                        case "e":
                            if (optionE){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 포토샵
                        case "p":
                            if (optionP){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // gif -> 무조건 삭제
                        case "gif":
                            imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                        // 광고 아님
                        case "n":
                            //imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                        default:
                            imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                    }
                }
            );
        }
    });
}

function removeDivAds(){
    let imgs = document.getElementsByTagName("div");
    chrome.storage.sync.get({['op1']: true, ['op2']: true, ['op3']: true, ['op4']: true}, function(items){
        for(let i = 0; i < imgs.length; i++){
            let style = imgs[i].currentStyle || window.getComputedStyle(imgs[i], false);
            url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
            if(!url)
                continue;
            chrome.runtime.sendMessage({url: url},
                function (response) {
                    let imgclass = response["class"];
                    switch(imgclass){
                        // 광고:
                        case "a":
                            if (optionA){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 
                        case "b":
                            if (optionB){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 
                        case "d":
                            if (optionD){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고
                        case "e":
                            if (optionE){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 포토샵
                        case "p":
                            if (optionP){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;    
                        // gif -> 무조건 삭제
                        case "gif":
                            imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                        // 광고 아님
                        case "n":
                            //imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                        default:
                            imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                    }
                }
            );
        }
    });
}

window.onload = function(){
    removeImageAds();
    removeDivAds();
}
