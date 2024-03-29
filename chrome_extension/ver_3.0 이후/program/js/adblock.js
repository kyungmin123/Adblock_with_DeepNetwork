function removeImageAds(){
    let imgs = document.getElementsByTagName("img");
    chrome.storage.sync.get({['opA']: true, ['opB']: true, ['opC']: true, ['opD']: true, ['opE']: true, ['opP']: true}, function(items){
        optionA = items.opA;
        optionB = items.opB;
        optionC = items.opC;
        optionD = items.opD;
        optionE = items.opE;
        optionP = items.opP;
        for(let i = 0; i < imgs.length; i++){
            imgurl = "";
            if (!imgs[i].src){
                if (imgs[i].getAttributeNames('adfit-main-img-url'))
                    imgurl = imgs[i].getAttributeNames('adfit-main-img-url');
                else
                    comtinue;
            }
            imgurl = imgs[i].src
            chrome.runtime.sendMessage({url: imgurl},
                function (response) {
                    let imgclass = response["class"];
                    switch(imgclass){
                        // 광고: 병원, 뷰티, 건강보조
                        case "a":
                            if (optionA){
                                if(imgs[i])
                                    imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 성인용 컨텐츠
                        case "b":
                            if (optionB){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 교육, 자기계발
                        case "c":
                            if (optionB){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 사행성, 투자, 분양, 대출, 보험
                        case "d":
                            if (optionD){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 기타 광고
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
                        // absolute -> 무조건 삭제
                        case "absolute":
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
                            //console.log(imgs[i]);
                            //imgs[i].remove();
                            //remove 속성이 정의되지 않은 것으로 나온다. => display: none으로 대체 가능.
                            imgs[i].setAttribute("style", "display: none;");
                            //callback(response);
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
                        // 광고: 병원, 뷰티, 건강보조
                        case "a":
                            if (optionA){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 성인용 컨텐츠
                        case "b":
                            if (optionB){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 교육, 자기계발
                        case "c":
                            if (optionB){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 사행성, 투자, 분양, 대출, 보험
                        case "d":
                            if (optionD){
                                imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 기타 광고
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
                        // absolute -> 무조건 삭제
                        case "absolute":
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
                            console.log(imgs[i]);
                            //imgs[i].remove();
                            //remove 속성이 정의되지 않은 것으로 나온다. => display: none으로 대체 가능.
                            imgs[i].setAttribute("style", "display: none;");
                            //callback(response);
                            break;
                    }
                }
            );
        }
    });
}

function removeCanvasAds(){
    let canvases = document.getElementsByTagName("canvas");
    for(let i = 0; i < canvases.length; i++){
        canvases[i].remove();
    }
}

/*
function nodeInsertedCallback(){
    removeImageAds();
    removeDivAds();
}
*/

window.onload = function(){
    removeImageAds();
    removeDivAds();
    //document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
}
