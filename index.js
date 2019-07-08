var intElemScrollTop = document.getElementById('asdf').scrollTop;
var elheight = document.getElementById('homePage').offsetHeight;
var elwidth = document.getElementById('homePage').offsetWidth;

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

window.addEventListener("load", function() {
    TweenMax.to(".topSecContent", 1.5, {transform: 'translateY(30px)', opacity: 1, ease:Cubic.easeOut})
})

 document.getElementById('ViewMyWork').addEventListener("mouseover", function() {
         TweenMax.to("#ViewMyWork", .4, {background: "rgba(255, 56, 95, 1)", border: "3px solid rgba(255, 255, 255, 0)"})    
 })

 document.getElementById('ViewMyWork').addEventListener("mouseleave", function() {
    TweenMax.to("#ViewMyWork", .4, {background: "rgba(255, 56, 95, 0)", border: "3px solid rgba(255, 255, 255, 1)"})
})

document.getElementById('ViewMyWork').addEventListener("click", function() {
    TweenMax.to(".secondSection", 1, {scrollTop: 0})
})

window.addEventListener("scroll", function() {
if (document.getElementById('asdf').scrollTop > elheight) {
        TweenMax.to(".secondSection", .4, {width: "100%", position: 'fixed', top: "0px"})
}
})


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
//




window.addEventListener("scroll", function() {
     TweenMax.to("#firstLine", 3, {transform: 'translateX(0px)', opacity: 1})
 })

window.addEventListener("scroll", function() {
    TweenMax.to("#secondLine", 3, {transform: 'translateX(0px)', opacity: 1})
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