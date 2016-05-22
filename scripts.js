$(function(){
    $('#thing').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#thing').data('size') == 'big')
        {
            $('#thing').data('size','small');
            $('#thing').stop().animate({
                height:'40px'
            },600);
        }
    }
    else
    {
        if($('#thing').data('size') == 'small')
        {
            $('#thing').data('size','big');
            $('#thing').stop().animate({
                height:'100px'
            },600);
        }  
    }
});