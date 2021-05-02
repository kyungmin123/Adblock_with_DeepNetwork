chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        //alert("get message")    
	let url = 'http://localhost:4000/?url='+ request.url;
        fetch(url)
	.then(response => response.json())
        //.then(response => console.log(response))
        .then(response => sendResponse(response))
        .catch(error => console.log('Error:', error))
        return true;
    }
);
