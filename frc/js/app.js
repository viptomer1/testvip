$(document).ready(function () {

    $(".main-container .main h1").each(function (index, item) {
        let newIndex = index + 1;
        var nav = $('.nav');
        var currentUrl = window.location.href;
        var h1Deeplink = $(".main-container #main" + newIndex + " h1 a").prop('name');
        var h1Url = currentUrl + "#" + h1Deeplink;

        var h2Deeplink = $(".main-container #main" + newIndex + " h2 a").prop('name');
        var h2Url = currentUrl + "#" + h2Deeplink;

        if ($(".main-container #main" + newIndex + " h1").length > 0) {
            nav.append("<li><a href='" + h1Url + "'>" + $(".main-container #main" + newIndex + " h1").text() + "</a></li>");
        }//it will assume single item

        if($(".main-container #main" + newIndex + " h1").length > 0){
            if ($(".main-container #main" + newIndex + " h2").length > 1) {
                $(".main-container #main" + newIndex + " h2").each(function (index, item) {
                    index = index + 1;
                    var hashURl = currentUrl+'#heading'+newIndex+'-'+'sub-heading'+index;
                    nav.append("<ul><li><a href='" + hashURl + "'>" + $(item).text() + "</a></li></ul>");
                });
            } else {
                nav.append("<ul><li><a href='" + h2Url + "'>" + $(".main-container #main" + newIndex + " h2").text() + "</a></li></ul>");
            }
        }
    });
})