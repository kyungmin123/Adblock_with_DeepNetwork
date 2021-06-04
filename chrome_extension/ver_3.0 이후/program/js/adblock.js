var option1;
var option2;
var option3;
var option4;

function removeAds(){
    let imgs = document.getElementsByTagName("img");
    chrome.storage.sync.get({['op1']: true, ['op2']: true, ['op3']: true, ['op4']: true}, function(items){
        option1 = items.op1;
        option2 = items.op2;
        option3 = items.op3;
        option4 = items.op4;
        option5 = items.op5;
        for(let i = 0; i < imgs.length; i++){
            chrome.runtime.sendMessage({url: imgs[i].src},
                function (response) {
                    //console.log(`current option1 is ${option1}`);
                    let imgclass = response["class"];
                    if(imgclass === "a" && option1){
                        imgs[i].setAttribute("style", "display: none;");
                        //imgs[i].setAttribute("style", "border: 10 solid red");
                        callback(response);
                    }
                    else if(imgclass === "b" && option2){
                        imgs[i].setAttribute("style", "display: none;");
                        //imgs[i].setAttribute("style", "border: 10 solid orange");
                        callback(response);
                    }
                    else if(imgclass === "d" && option3){
                        imgs[i].setAttribute("style", "display: none;");
                        //imgs[i].setAttribute("style", "border: 10 solid yellow");
                        callback(response);
                    }
                    else if(imgclass === "e" && option4){
                        imgs[i].setAttribute("style", "display: none;");
                        //imgs[i].setAttribute("style", "border: 10 solid green");
                        callback(response);
                    }
                    else if(imgclass === "n"){
                        //imgs[i].setAttribute("style", "border: 10 solid blue");
                        callback(response);
                    }
                    else if (imgclass === "absolute"){
                        imgs[i].setAttribute("style", "display: none;");
                        //imgs[i].setAttribute("style", "border: 10 solid purple");
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
