document.getElementById('save').addEventListener('click', () => {
    let option1 = document.getElementById('op1').checked;
    let option2 = document.getElementById('op2').checked;
    let option3 = document.getElementById('op3').checked;
    let option4 = document.getElementById('op4').checked;
    let option5 = document.getElementById('op5').checked;
    let option6 = document.getElementById('op6').checked;

    chrome.storage.sync.set({['op1']: option1, ['op2']: option2, ['op3']: option3, ['op4']: option4, ['op5']: option5, ['op6']: option6}, function(){
        alert("save!");
    })
});
