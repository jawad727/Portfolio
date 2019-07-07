

window.addEventListener("load", function() {
    TweenMax.to(".topSecContent", 1, {transform: 'translateY(30px)', opacity: 1, ease:Cubic.easeOut})
})

 document.getElementById('ViewMyWork').addEventListener("mouseover", function() {
         TweenMax.to("#ViewMyWork", .4, {background: "rgba(255, 56, 95, 1)", border: "3px solid rgba(255, 255, 255, 0)"})    
 })

 document.getElementById('ViewMyWork').addEventListener("mouseleave", function() {
    TweenMax.to("#ViewMyWork", .4, {background: "rgba(255, 56, 95, 0)", border: "3px solid rgba(255, 255, 255, 1)"})
})

document.getElementById('firstLine').addEventListener("wheel", function() {
     TweenMax.to("#firstLine", 2, {transform: 'translateX(0px)', opacity: 1, ease:Cubic.easeOut})
 })

document.getElementById('secondLine').addEventListener("wheel", function() {
    TweenMax.to("#secondLine", 2, {transform: 'translateX(0px)', opacity: 1, ease:Cubic.easeOut})
})





// window.addEventListener("scroll", function() {
//     TweenMax.to("#secondLine", 2, {transform: 'translateX(0px)', opacity: 1, ease:Cubic.easeOut})
// })
// introTitle

// window.addEventListener("load", function() {
//     TweenMax.to(".topSecContent", 1, {transform: 'rotate(20deg)'})
// })

