chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }
	    let url = 'https://img-option.herokuapp.com/?url=' + request.url;
        fetch(url, config)
	.then(response => response.json())
        .then(response => sendResponse(response))
        .catch(error => console.log('Error:', error))
        return true;
    }
);