function sendAJAX() {
    jQuery.get("AJAX.ashx", { modevar: "John" }, function (data) { AJAXResult(data) });
}

function AJAXResult(html) {
    document.getElementById("mydiv").innerHTML = html;
}