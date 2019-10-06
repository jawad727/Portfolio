var intElemScrollTop = document.getElementById('asdf').scrollTop;
var elheight = document.getElementById('homePage').offsetHeight;
var elwidth = document.getElementById('homePage').offsetWidth;


var cw = $('.profpic').width();
$('.profpic').css({
    'height': cw + 'px'
});


window.addEventListener("load", function() {
    TweenMax.to(".topSecContent", 1.5, {transform: 'translateY(30px)', opacity: 1, ease:Cubic.easeOut})
})

document.getElementById('ViewMyWork').addEventListener("mouseover", function() {
         TweenMax.to("#ViewMyWork", .4, {background: "rgba(255, 56, 95, 1)", border: "3px solid rgba(255, 255, 255, 0)"})    
 })

// fix this vv

document.getElementById('griipeScale').addEventListener("mouseover", function() {
         TweenMax.to("#griipeScalerZ", .05, {transform: "scale(1.05)"})    
 })

document.getElementById('griipeScale').addEventListener("mouseleave", function() {
         TweenMax.to("#griipeScalerZ", .05, {transform: "scale(1)"})    
 })

 
document.getElementById('griipeScalerX').addEventListener("mouseover", function() {
         TweenMax.to("#griipeScalerX", .05, {transform: "scale(1.05)"})    
 })

document.getElementById('griipeScalerX').addEventListener("mouseleave", function() {
         TweenMax.to("#griipeScalerX", .05, {transform: "scale(1)"})    
 })


 document.getElementById('griipeScalerY').addEventListener("mouseover", function() {
    TweenMax.to("#griipeScalerY", .05, {transform: "scale(1.05)"})    
})

document.getElementById('griipeScalerY').addEventListener("mouseleave", function() {
    TweenMax.to("#griipeScalerY", .05, {transform: "scale(1)"})    
})




document.getElementById('profPicID').addEventListener("mouseover", function() {
    TweenMax.to("#profPicID", .05, {transform: "scale(1.05)"})    
})

document.getElementById('profPicID').addEventListener("mouseleave", function() {
    TweenMax.to("#profPicID", .05, {transform: "scale(1)"})    
})





document.getElementById('ViewMyWork').addEventListener("mouseleave", function() {
    TweenMax.to("#ViewMyWork", .4, {background: "rgba(255, 56, 95, 0)", border: "3px solid rgba(255, 255, 255, 1)"})
})

document.getElementById('ViewMyWork').addEventListener("click", function() {
    TweenMax.to(".secondSection", 1, {scrollTop: 0})
})

document.getElementById('MenuLogo').addEventListener("click", function() {
    TweenMax.to(".openMenu", 1, {display: "flex", opacity: 1, transform: "translateX(0px)"});
    TweenMax.to("#exitButton", 1, {display: "block"});
})

document.getElementById('exitButton').addEventListener("click", function() {
    TweenMax.to(".openMenu", .5, {display: "none", opacity: 0, transform: "translateX(160px)"});
    TweenMax.to("#exitButton", .1, {display: "none"});
})

document.getElementById('exitButton').addEventListener("mouseover", function() {
    TweenMax.to("#exitButton", .7, {transform: "rotate(90deg)"})
})

document.getElementById('exitButton').addEventListener("mouseleave", function() {
    TweenMax.to("#exitButton", .7, {transform: "rotate(0deg)"})
})


window.addEventListener("scroll", function() {
if (document.getElementById('asdf').scrollTop > elheight) {
    TweenMax.to(".secondSection", .4, {width: "100%", position: 'fixed', top: "0px"})
} else {TweenMax.to(".secondSection", .4, {position: 'static', width: "auto"})}  })


window.addEventListener("scroll", function() {
    TweenMax.to("#aaaa", 3, {transform: "translateX(0px)", opacity: 1})    
 })


document.getElementById('menuResume').addEventListener("mouseover", function() {
         TweenMax.to("#menuResume", .4, {color: "rgba(255, 56, 95, 1)"})   })
document.getElementById('menuResume').addEventListener("mouseleave", function() {
    TweenMax.to("#menuResume", .4, {color: "rgba(255, 255, 255, 1)"})   })


document.getElementById('menuGithub').addEventListener("mouseover", function() {
         TweenMax.to("#menuGithub", .4, {color: "rgba(0, 204, 0, 1)"})   })
document.getElementById('menuGithub').addEventListener("mouseleave", function() {
    TweenMax.to("#menuGithub", .4, {color: "rgba(255, 255, 255, 1)"})   })


document.getElementById('menuLinkedin').addEventListener("mouseover", function() {
         TweenMax.to("#menuLinkedin", .4, {color: "rgba(0, 102, 255, 1)"})   })
document.getElementById('menuLinkedin').addEventListener("mouseleave", function() {
    TweenMax.to("#menuLinkedin", .4, {color: "rgba(255, 255, 255, 1)"})   })


document.getElementById('menuTwitter').addEventListener("mouseover", function() {
         TweenMax.to("#menuTwitter", .4, {color: "rgba(51, 204, 255, 1)"})   })
document.getElementById('menuTwitter').addEventListener("mouseleave", function() {
    TweenMax.to("#menuTwitter", .4, {color: "rgba(255, 255, 255, 1)"})   })



// Scroll animations
$('#ViewMyWork').click(function(e){
    var $target = $('html,body');
    $target.animate({scrollTop: elheight}, 1000);
  })

$('#introScroll').click(function(e){
    var $target = $('html,body');
    $target.animate({scrollTop: elheight}, 1000);
  });

$('#homeScroll').click(function(e){
    var $target = $('html,body');
    $target.animate({scrollTop: 0}, 1000);
  });

$('#portfolioScroll').click(function(e){
    var $target = $('html,body');
    if (elwidth > 1110) {$target.animate({scrollTop: elheight + 400}, 1000)} else {
        $target.animate({scrollTop: elheight + 600}, 1000)
    }
  });

$('#contactScroll').click(function(e){
    var $target = $('html,body');
    $target.animate({scrollTop: elheight + 3200}, 2000);
  });




window.addEventListener("scroll", function() {
     TweenMax.to("#firstLine", 2, {transform: 'translateX(0px)', opacity: 1})
 })

window.addEventListener("scroll", function() {
    TweenMax.to("#secondLine", 2, {transform: 'translateX(0px)', opacity: 1})
})


// window.addEventListener("scroll", function() {
//     TweenMax.to("#secondLine", 2, {transform: 'translateX(0px)', opacity: 1, ease:Cubic.easeOut})
// })
// introTitle

// window.addEventListener("load", function() {
//     TweenMax.to(".topSecContent", 1, {transform: 'rotate(20deg)'})
// })



// TESTER
document.getElementById('aaaa').addEventListener("click", function() {
    console.log(intElemScrollTop)
})