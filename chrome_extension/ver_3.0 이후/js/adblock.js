var option1;
var option2;
var option3;
var option4;
var option5;
var option6;

function removeAds(){
    let imgs = document.getElementsByTagName("img");
    chrome.storage.sync.get({['op1']: true, ['op2']: true, ['op3']: true, ['op4']: true, ['op5']: true, ['op6']: true}, function(items){
        option1 = items.op1;
        option2 = items.op2;
        option3 = items.op3;
        option4 = items.op4;
        option5 = items.op5;
        option6 = items.op6;
        for(let i = 0; i < imgs.length; i++){
            chrome.runtime.sendMessage({url: imgs[i].src},
                function (response) {
                    //console.log(`current option1 is ${option1}`);
                    let imgclass = response["class"];
                    if(imgclass === "a" && option1){
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                    }
                    else if(imgclass === "b" && option2){
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                    }
                    else if(imgclass === "c" && option3){
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                    }
                    else if(imgclass === "d" && option4){
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                    }
                    else if(imgclass === "e" && option5){
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                    }
                    else if(imgclass === "n" && option6){
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                    }
                    /*
                    if (option1 === false){
                        imgs[i].setAttribute("style", "display: none;");
                        callback(response);
                    }
                    else if (option1 === true){
                        imgs[i].setAttribute("style", "opacity: 0.5;");
                        callback(response);
                    }
                    */
                }
            );
        }
    });
}

window.onload = function(){
    removeAds();
}
