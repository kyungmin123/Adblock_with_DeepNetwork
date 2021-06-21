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
                    //console.log(imgclass);
                    switch(imgclass){
                        // 광고:
                        case "a":
                            if (optionA){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#0000FF";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 
                        case "b":
                            if (optionB){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#006400";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 
                        case "d":
                            if (optionD){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#FF1493";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고
                        case "e":
                            if (optionE){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#9400D3";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 포토샵
                        case "p":
                            if (optionP){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "10px";
                                imgs[i].style.borderColor = "#FFA500";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // gif -> 무조건 삭제
                        case "gif":
                            imgs[i].style.borderStyle = "Solid";
                            imgs[i].style.borderWidth = "10px";
                            imgs[i].style.borderColor = "#66F8F0";
                            //imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                        // 광고 아님
                        case "n":
                            imgs[i].style.borderStyle = "Solid";
                            imgs[i].style.borderWidth = "10px";
                            imgs[i].style.borderColor = "#A0A0FF";
                            //imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                        default:
                            imgs[i].style.borderStyle = "Solid";
                            imgs[i].style.borderWidth = "10px";
                            imgs[i].style.borderColor = "#323232";
                            //imgs[i].remove();
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
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#0000FF";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 
                        case "b":
                            if (optionB){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#006400";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 
                        case "d":
                            if (optionD){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#FF1493";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고
                        case "e":
                            if (optionE){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#9400D3";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // 광고: 포토샵
                        case "p":
                            if (optionP){
                                imgs[i].style.borderStyle = "Solid";
                                imgs[i].style.borderWidth = "5px";
                                imgs[i].style.borderColor = "#FFA500";
                                //imgs[i].remove();
                                //imgs[i].setAttribute("style", "display: none;");
                                callback(response);
                            }
                            break;
                        // gif -> 무조건 삭제
                        case "gif":
                            imgs[i].style.borderStyle = "Solid";
                            imgs[i].style.borderWidth = "5px";
                            imgs[i].style.borderColor = "#66F8F0";
                            //imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                        // 광고 아님
                        case "n":
                            imgs[i].style.borderStyle = "Solid";
                            imgs[i].style.borderWidth = "5px";
                            imgs[i].style.borderColor = "#A0A0FF";
                            //imgs[i].remove();
                            //imgs[i].setAttribute("style", "display: none;");
                            callback(response);
                            break;
                        default:
                            imgs[i].style.borderStyle = "Solid";
                            imgs[i].style.borderWidth = "5px";
                            imgs[i].style.borderColor = "#323232";
                            //imgs[i].remove();
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
