const loading = document.querySelector('.loading');
window.addEventListener('load',function(){
    setTimeout(function(){
        loading.classList.add('opacity-0','invisible')
        document.body.style.overflow='auto';
    },2000)
})




$('.cardy').css('display','none');

$('#bot0').click(function(){
    $('#first').css('display','block');
    $('#seconed').css('display','none');
    $('#third').css('display','none');
    $('#fourth').css('display','none');
    $('#fifth').css('display','none');
    $('#sixth').css('display','none');
    $('#seventh').css('display','none');
    $('#eight').css('display','none');
    $('#nine').css('display','none');
 console.log('hello')
    
})

$('#bot1').click(function(){
    $('#first').css('display','none');
    $('#seconed').css('display','block');
    $('#third').css('display','none');
    $('#fourth').css('display','none');
    $('#fifth').css('display','none');
    $('#sixth').css('display','none');
    $('#seventh').css('display','none');
    $('#eight').css('display','none');
    $('#nine').css('display','none');
 console.log('hello')
    
})

$('#bot2').click(function(){
    $('#first').css('display','none');
    $('#seconed').css('display','none');
    $('#third').css('display','block');
    $('#fourth').css('display','none');
    $('#fifth').css('display','none');
    $('#sixth').css('display','none');
    $('#seventh').css('display','none');
    $('#eight').css('display','none');
    $('#nine').css('display','none');
 console.log('hello')
    
})

$('#bot3').click(function(){
    $('#first').css('display','none');
    $('#seconed').css('display','none');
    $('#third').css('display','none');
    $('#fourth').css('display','block');
    $('#fifth').css('display','none');
    $('#sixth').css('display','none');
    $('#seventh').css('display','none');
    $('#eight').css('display','none');
    $('#nine').css('display','none');
 console.log('hello')
    
})
$('#bot4').click(function(){
    $('#first').css('display','none');
    $('#seconed').css('display','none');
    $('#third').css('display','none');
    $('#fourth').css('display','none');
    $('#fifth').css('display','block');
    $('#sixth').css('display','none');
    $('#seventh').css('display','none');
    $('#eight').css('display','none');
    $('#nine').css('display','none');
 console.log('hello')
    
})
$('#bot5').click(function(){
    $('#first').css('display','none');
    $('#seconed').css('display','none');
    $('#third').css('display','none');
    $('#fourth').css('display','none');
    $('#fifth').css('display','none');
    $('#sixth').css('display','block');
    $('#seventh').css('display','none');
    $('#eight').css('display','none');
    $('#nine').css('display','none');

 console.log('hello')
    
})
$('#bot6').click(function(){
    $('#first').css('display','none');
    $('#seconed').css('display','none');
    $('#third').css('display','none');
    $('#fourth').css('display','none');
    $('#fifth').css('display','none');
    $('#sixth').css('display','none');
    $('#seventh').css('display','block');
    $('#eight').css('display','none');
    $('#nine').css('display','none');

 console.log('hello')
    
})

$('#bot7').click(function(){
    $('#first').css('display','none');
    $('#seconed').css('display','none');
    $('#third').css('display','none');
    $('#fourth').css('display','none');
    $('#fifth').css('display','none');
    $('#sixth').css('display','none');
    $('#seventh').css('display','none');
    $('#eight').css('display','block');
    $('#nine').css('display','none');

 console.log('hello')
    
})

$('#bot8').click(function(){
    $('#first').css('display','none');
    $('#seconed').css('display','none');
    $('#third').css('display','none');
    $('#fourth').css('display','none');
    $('#fifth').css('display','none');
    $('#sixth').css('display','none');
    $('#seventh').css('display','none');
    $('#eight').css('display','none');
    $('#nine').css('display','block');

 console.log('hello')
    
})


$('.apps').css('display','none');
let i=0 ;
$('#nextapp').click(function(){
if( i==0){
    $('.nextone').css('display','block');
    $('.nexttwo').css('display','none');
    $('.prevone').css('display','none');
    i+=1;

}else if( i==1){
    $('.nexttwo').css('display','block');
    $('.prevone').css('display','none');
    $('.nextone').css('display','none');

    i+=1;

}else if( i==2){
    $('.prevone').css('display','block');
    $('.nextone').css('display','none');
    $('.nexttwo').css('display','none');


    i = 0;

}
})

$('#prevapp').click(function(){
    if( i==0){
        $('.prevone').css('display','none');
        $('.nextone').css('display','none');
        $('.nexttwo').css('display','block');
    
    
        i = 2;
    
    }

    else if( i==2){
        $('.prevone').css('display','none');
        $('.nextone').css('display','block');
        $('.nexttwo').css('display','none');
    
    
        i = 1;
    
    }

    else if( i==1){
        $('.prevone').css('display','block');
        $('.nextone').css('display','none');
        $('.nexttwo').css('display','none');
    
    
        i = 0;
    
    }
    

})


$('.scroll-to-top').fadeOut()
$(window).scroll(function(){
    if($(window).scrollTop() > $('.discover').offset().top){
       $('.scroll-to-top').fadeIn(1000)
    }else{
        $('.scroll-to-top').fadeOut(1000)
    }
})


$('.scroll-to-top').click(function(){
   window.scroll({
        top:0,
        behavior:'smooth'
    })
})



