chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		filterProduct();
	}
});

function filterProduct() {
	location.href = location.href + "&emi=AN1VRQENFRJN5";
}