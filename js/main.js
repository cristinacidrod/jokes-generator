// JOKES GENERATOR API REQUEST WITH JQUERY

$('#jokesInput').on('click', function () {
    /* call and get joke */
    $.getJSON('https://api.icndb.com/jokes/random', function (data) {
        $('#jokesText').html(data.value.joke);
        /* animation when input is clicked */
        $('#chuck').slideDown("slow");
    });
    $('#chuck').slideUp("fast");
});