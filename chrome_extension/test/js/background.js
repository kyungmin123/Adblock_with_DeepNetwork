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

// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
// 	let url = 'https://img-option.herokuapp.com/?url=' + request.url;
//         fetch(url)
// 	.then(response => response.json())
//         .then(response => sendResponse(response))
//         .catch(error => console.log('Error:', error))
//         return true;
//     }
// );

// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse){
//         let srcUrl = request.url;
//         let url = "http://127.0.0.1:8000/api/ad/";
//         fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 "url": srcUrl,
//             }),
//         }).then(response => response.json())
//             .then(response => sendResponse(response))
//             .catch(error => console.log('Error:', error))
//             return true;
//     }
// )