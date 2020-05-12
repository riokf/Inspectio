"use strict";

$(document).ready(function () {
    $("#upload-button").click(function () {
        $("#upload").click();
    });

    $("#upload").change(function () {
        $("#submit").click();
    });

    $("input[type='text']").bind('focus', function () {
        $(this).css('background-color', '#424242');
    });
});