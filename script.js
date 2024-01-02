/* gsap is used to make our header into black after scrolling down */
var crsr=document.querySelector('#cursor')
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){  /* dets is used to define the movement of mouse move or called mouse event  */
     
      crsr.style.left = dets.x+30+"px" /* for x-axis and we can also give(+30)*/
      crsr.style.top = dets.y +"px"  /* for y-axis */
      blur.style.left = dets.x - 250 + "px"; /* for x-axis blur and (-)property is used for center the blur wuth cursor*/ 
      blur.style.top = dets.y -250 + "px"; /*for y-axis blur*/    
})


var h4All = document.querySelectorAll("#nav h4")
h4All.forEach(function(elem){
    // console.log("hello elements",elem)
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E" 

    })
})

/* first we describe our container on which we have to style */
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 1, /* it is used to make our header in black colour after 1 second delay */
  scrollTrigger: {
    trigger: "#nav", /* here we define which part is trigger */
    scroller: "body", /* here we define which part is going to scroll */
    // markers: true, /* it is used to see on how much part scroolTriger is start and end */
    start: "top -10%", /* we define that after scrolling 10% from the top then after scrollTriger start work */
    end: "top -11%",
    scrub:1,/* it is used to control start and end scrolling header black like up header white down header black */

  },
});


gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:" body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#aboutus,#aboutus-in", {
  y: 50 /*how much we want to our element should move to upward from (y axis) */,
  opacity: 0 /*initally opacity is declair as (0) */,
  duration: 1 /*it is used to set the delay of rendering the elements*/,
  stagger: 0.4 /* it is used for render items from one after one */,


  scrollTrigger: {/*scrollTriger is basically used for render the item or content according to the scrolling like when we scrool down then after component is start to rendering*/
    trigger: "#aboutus",/* which screen or content should have to rendering*/
    scroller:"body",/*in which the trigger screen is located or the main rendering content or tag*/
    // markers:true,
    start:"top 60%",/*when after scrolling  the rendering item should start to rendering**/
    end:"top 58%",/*when after the rendering is end to render*/
    scrub:2/*it made it dynamic means it can adjust as compare to action by the user*/
  },
});


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1, 
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller:"body",
    // markers: true,
    start:"top 55%",
    end:"top 45%",
    scrub:3
  },
});


gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 3,
  },
});


