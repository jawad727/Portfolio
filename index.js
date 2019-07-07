

window.addEventListener("load", function() {
    TweenMax.to(".topSecContent", 1, {transform: 'translateY(30px)', opacity: 1, ease:Cubic.easeOut})
})


 document.getElementById('ViewMyWork').addEventListener("mouseover", function() {
         TweenMax.to("#ViewMyWork", .4, {background: "rgba(255, 56, 95, 1)"})
         
 })

 document.getElementById('ViewMyWork').addEventListener("mouseleave", function() {
    TweenMax.to("#ViewMyWork", .4, {background: "rgba(255, 56, 95, 0)"})

})


// window.addEventListener("load", function() {
//     TweenMax.to(".topSecContent", 1, {transform: 'rotate(20deg)'})
// })

