$(document).ready(function(){

   $('.fa-bars').click(function(){
     $(this).toggleClass('fa-times');
     $('.navbar').toggleClass('nav-toggle');
   }); 

   $(window).on('scroll load',function(){
     $(this).removeClass('fa-times');
     $('.navbar').removeClass('nav-toggle');

     if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
     }else{
        $('header').removeClass('header-active');
     }

     $('section').each(function(){
         var top = $(window).scrollTop();
         var id = $(this).attr('id');
         var height = $(this).height();
         var top = $(this).offset().top - 200
         if (top >= offset + top && top < height + offset){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[href ="#'+ id + '" ]').addClass('active');
         }

     });
   });
});


document.getElementById('login').addEventListener('click', function() {
   window.location.href = 'login.html';
});

document.getElementById('binus-info').addEventListener('click', function() {
   window.location.href = 'info/info.html';
});

document.getElementById('community').addEventListener('click', function() {
   window.location.href = 'community 2/community.html';
});

document.getElementById('scholar').addEventListener('click', function() {
   window.location.href = 'scholar/scholar.html';
});

document.getElementById('Aptitude').addEventListener('click', function() {
   window.location.href = 'Aptitude/aptitude.html';
});