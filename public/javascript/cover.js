$(document).ready(function () {
    $('body').fadeIn(600);

    setInterval(function() {
        var $body = $('body');
        if($body.hasClass('bg1'))
        {
            $body.removeClass('bg1');
            $body.addClass('bg2');
        }
       else {        
            $body.removeClass('bg2');
            $body.addClass('bg1');
         }
     }, 5000);


});

function changePage(page){
    $('body').fadeOut(600, function(){
        window.location.href = 'pages.html?=' + page;
    });
}