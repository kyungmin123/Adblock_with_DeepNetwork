document.getElementById('save').addEventListener('click', () => {
    let optionA = document.getElementById('opA').checked;
    let optionB = document.getElementById('opB').checked;
    let optionC = document.getElementById('opC').checked;
    let optionD = document.getElementById('opD').checked;
    let optionE = document.getElementById('opE').checked;
    let optionP = document.getElementById('opP').checked;

    chrome.storage.sync.set({['opA']: optionA, ['opB']: optionB, ['opD']: optionD, ['opE']: optionE, ['opP']: optionP}, function(){
        const btnElement = document.getElementById('save');
  
        const html = '<div id="success" style="color:red"> 저장 완료 </div>';
    
        btnElement.innerHTML = html;

        setTimeout(function(){
            document.getElementById('success').remove();
            document.getElementById('save').innerText = 'SAVE';
        }, 500)
    })
});