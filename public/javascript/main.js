$(document).ready(function () {
    findShow();
    $('#teamCarousel').on('slide.bs.carousel', function () {
        $('.page-item').removeClass('active');
        s = $('#teamCarousel .active').find('.row').attr('id') + 'Page';
        console.log('#' + s);
        $('#' + s).addClass('active');
    })
});

// use url parameter to find what to show
function findShow(){
    curl = window.location.href;
    page = curl.split('=')[1];
    switch (page){
        case 'team':
            showTeam();
            break;
        case 'project':
            showProject();
            break;
        case 'design':
            showDesign();
            break;
        default:
            showProject();
            break;
    }
}

function goCover(){
    $('body').fadeOut(400, function(){
        location.href = '/';
    });
}

function fadeShow(newPage){
    if ($('.current').length == 0){
        $('.navbar').fadeIn(600);
        $(newPage).fadeIn(600, function(){
            $(newPage).addClass('current');
        });
        return;
    }
    $('.current').fadeOut(400, function(){
        $('.current').removeClass('current');
        $(newPage).fadeIn(600, function(){
            $(newPage).addClass('current');
        });
    });
}

function showDesign(){
    $('.nav-item').removeClass('active');
    $('#DesignLink').addClass('active');
    fadeShow('#design')
    history.pushState(null, null, "pages.html?=design");
}

function showTeam(){
    $('.nav-item').removeClass('active');
    $('#TeamLink').addClass('active');
    fadeShow('#team')
    history.pushState(null, null, "pages.html?=team");
}

function showProject(){
    $('.nav-item').removeClass('active');
    $('#ProjectLink').addClass('active');
    fadeShow('#project')
    history.pushState(null, null, "pages.html?=project");
}
