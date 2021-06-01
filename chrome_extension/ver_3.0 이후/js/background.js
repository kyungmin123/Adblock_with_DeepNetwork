chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
	let url = 'http://192.168.55.22:4000/?url='+ request.url;
        fetch(url)
	.then(response => response.json())
        .then(response => sendResponse(response))
        .catch(error => console.log('Error:', error))
        return true;
    }
);
