function removeAds(){
    //Get all 'img' elements from the page
    let imgs = document.getElementsByTagName("img");
    
    for (let i = 0; i < imgs.length; i++){
        // 파이썬 함수에 이미지 src 전달
        // 파이썬 함수 내에서 로컬에 src로부터 이미지 다운로드 받고, 광고이미지인지 판단해서 true, false 반환한다.
        //const result = spawn('python', ['model.py', imgs.src]);
        //result.stdout.on('data', (result)=>{
            //result 안에는 true or false가 들어있음.
        //    if(result !== false){
         //       continue;
        //    }
        //    else{
                // make the ad disappear
        imgs[i].setAttribute("style", "display: none !important;");
        //    }
        };
}

removeAds();