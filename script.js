const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});



function loader(){
    var tl = gsap.timeline()
  
  tl.from(".loader span",{
    x:100,
    duration:1.2,
    stagger:.03,
    delay:.1
  })
  tl.to(".loader span",{
    x:-100,
    duration:.6,
    opacity:0,
    stagger:.03
  })
  tl.to('.loader',{
    duration:.5,
    opacity:0,
    display:"none"
  })

  tl.from("#hero #content h1 span",{
    y:120,
    opacity:0,
    stagger:0.2,
    duration:0.5
  })
  
  }
  

function cursor() {
  var content = document.querySelector("#content");
  var cursor = document.querySelector("#cursor");

  content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });

  content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });
}

function textAnimation(){

}















loader();
cursor();

