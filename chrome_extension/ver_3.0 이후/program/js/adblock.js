function removeImageAds(){
    let imgs = document.getElementsByTagName("img");
    chrome.storage.sync.get({['op1']: true, ['op2']: true, ['op3']: true, ['op4']: true}, function(items){
        option1 = items.op1;
        option2 = items.op2;
        option3 = items.op3;
        option4 = items.op4;
        for(let i = 0; i < imgs.length; i++){
            if (!imgs[i].src)
                continue;
            chrome.runtime.sendMessage({url: imgs[i].src},
                function (response) {
                    let imgclass = response["class"];
                    switch(imgclass){
                        case "a":
                            if (option1){
                                imgs[i].setAttribute("style", "display: none;");
                                //imgs[i].setAttribute("style", "border: 10 solid red");
                                callback(response);
                            }
                            break;
                        case "b":
                            if (option2){
                                imgs[i].setAttribute("style", "display: none;");
                                //imgs[i].setAttribute("style", "border: 10 solid orange");
                                callback(response);
                            }
                            break;
                        case "d":
                            if (option3){
                                imgs[i].setAttribute("style", "display: none;");
                                //imgs[i].setAttribute("style", "border: 10 solid yellow");
                                callback(response);
                            }
                            break;
                        case "e":
                            if (option4){
                                imgs[i].setAttribute("style", "display: none;");
                                //imgs[i].setAttribute("style", "border: 10 solid green");
                                callback(response);
                            }
                            break;
                        case "absolute":
                            imgs[i].setAttribute("style", "display: none;");
                            //imgs[i].setAttribute("style", "border: 10 solid purple");
                            callback(response);
                            break;
                        case "n":
                            //imgs[i].setAttribute("style", "display: none;");
                            //imgs[i].setAttribute("style", "border: 10 solid blue");
                            callback(response);
                            break;
                        default:
                            mgs[i].setAttribute("style", "display: none;");
                            //imgs[i].setAttribute("style", "border: 10 solid purple");
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
            bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
            if(!bi)
                continue;
            chrome.runtime.sendMessage({url: bi},
                function (response) {
                    let imgclass = response["class"];
                    switch(imgclass){
                        case "a":
                            if (option1){
                                imgs[i].setAttribute("style", "display: none;");
                                //imgs[i].setAttribute("style", "border: 10 solid red");
                                callback(response);
                            }
                            break;
                        case "b":
                            if (option2){
                                imgs[i].setAttribute("style", "display: none;");
                                //imgs[i].setAttribute("style", "border: 10 solid orange");
                                callback(response);
                            }
                            break;
                        case "d":
                            if (option3){
                                imgs[i].setAttribute("style", "display: none;");
                                //imgs[i].setAttribute("style", "border: 10 solid yellow");
                                callback(response);
                            }
                            break;
                        case "e":
                            if (option4){
                                imgs[i].setAttribute("style", "display: none;");
                                //imgs[i].setAttribute("style", "border: 10 solid green");
                                callback(response);
                            }
                            break;
                        case "absolute":
                            imgs[i].setAttribute("style", "display: none;");
                            //imgs[i].setAttribute("style", "border: 10 solid purple");
                            callback(response);
                            break;
                        case "n":
                            //imgs[i].setAttribute("style", "display: none;");
                            //imgs[i].setAttribute("style", "border: 10 solid blue");
                            callback(response);
                            break;
                        default:
                            mgs[i].setAttribute("style", "display: none;");
                            //imgs[i].setAttribute("style", "border: 10 solid purple");
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
