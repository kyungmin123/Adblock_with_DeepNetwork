document.getElementById('save').addEventListener('click', () => {
    let likeColorRed = document.getElementById('Red').checked;
    let likeColorGreen = document.getElementById('Green').checked;
    let likeColorBlue = document.getElementById('Blue').checked;

    chrome.storage.sync.set({['keyRed']: likeColorRed, ['keyGreen']: likeColorGreen, ['keyBlue']: likeColorBlue}, function(){
        alert("save!");
    })
});
