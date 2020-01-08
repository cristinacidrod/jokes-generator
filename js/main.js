// JOKES GENERATOR API REQUEST WITH JQUERY

$('#jokesInput').on('click', function () {
    /* call and get the joke */
    $.getJSON('https://api.icndb.com/jokes/random', function (data) {
        $('#jokesText').html(data.value.joke);
        /* reverse Chuck Norris photo when the input is clicked */
        if ($('#chuck').hasClass("normal")) {
            $('#chuck').removeClass("normal").addClass("reverse");
        }
        if ($('#chuck').hasClass("reverse")) {
            $('#chuck').removeClass("reverse").addClass("normal");
        }
    });
    $('#chuck').addClass("reverse");
});