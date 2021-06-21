document.getElementById('save').addEventListener('click', () => {
    let optionA = document.getElementById('opA').checked;
    let optionB = document.getElementById('opB').checked;
    let optionD = document.getElementById('opD').checked;
    let optionE = document.getElementById('opE').checked;
    let optionP = document.getElementById('opP').checked;

    chrome.storage.sync.set({['opA']: optionA, ['opB']: optionB, ['opD']: optionD, ['opE']: optionE, ['opP']: optionP}, function(){
        alert("save!");
    })
});