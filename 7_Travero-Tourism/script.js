window.addEventListener('DOMContentLoaded',()=>{
    console.log("dom tree loaded");
})

const lineLoader = document.querySelector(".line-loader");
const right = document.querySelector(".right");

let width = 0;

function widthUpdate(){

    if(width >= 199)
    {
        clearInterval(timeFunc);
    }

    console.log("called sucess");
    width++;
    lineLoader.style.width = `${width}%`;

}


const timeFunc = setInterval(widthUpdate, 3000);


window.addEventListener('load',()=>{
    console.log("fully loaded");

    width = 198 ;
    
    right.style.opacity = 1;

    let tl = gsap.timeline();

    tl.from(".lowest",{
        
        onStart : function(){
            $('.lowest').textillate({ 
                                        in: { 
                                            effect: 'fadeInUp',
    
                                            // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                            callback : function(){
                                                $('.lowest').textillate('out')
                                            } 
                                            } , 
    
                                        out:{
                                            effect: 'fadeOutUp'
                                            } 
                                    });
        }
        })
    
        .from(".second-lowest",{
    
            opacity : 0,
            delay : 1,
    
            onStart : function(){
                $('.second-lowest').textillate({ 
                                            in: { 
                                                effect: 'fadeInUp',
        
                                                // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                                callback : function(){
                                                    $('.second-lowest').textillate('out')
                                                } 
                                                } , 
        
                                            out:{
                                                effect: 'fadeOutUp'
                                                } 
                                        });
            }
            })
    
        .from(".second-top",{
    
                opacity : 0,
                delay : 1,
        
                onStart : function(){
                    $('.second-top').textillate({ 
                                                in: { 
                                                    effect: 'fadeInUp',
            
                                                    // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                                    callback : function(){
                                                        $('.second-top').textillate('out')
                                                    } 
                                                    } , 
            
                                                out:{
                                                    effect: 'fadeOutUp'
                                                    } 
                                            });
                }
                })
    
        .from(".top",{
    
                    opacity : 0,
                    delay : 1,
            
                    onStart : function(){
                        $('.top').textillate({ 
                                                    in: { 
                                                        effect: 'fadeInUp',
                
                                                        // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                                        callback : function(){
                                                            $('.top').textillate('out')
                                                        } 
                                                        } , 
                
                                                    out:{
                                                        effect: 'fadeOutUp'
                                                        } 
                                                });
                    }
                    })    
        
        .to(".loader",{
                    top : "-100%" ,
                    deplay : 1,
                    duration : 3 ,
                    // ease : Power4.easeOut
    
                        })

    tl.from('.navbar',{
        delay:0.5,
        opacity:0,
        y:-50
    })

    tl.from('.text h1',{
        y:150,
        opacity:0,
        duration : 1.5
    })

    tl.from('.text h2',{
        y:-200,
        opacity:0,
        duration : 1
    })
    
})


const parallax_el = document.querySelectorAll(".parallax");


let xValue = 0;
let yValue = 0;

const main = document.querySelector(".main");

main.addEventListener("mousemove", (e)=>{
    xValue = e.clientX - window.innerWidth / 2 ;
    yValue = e.clientY - window.innerHeight / 2 ;

    console.log(xValue ,"--",yValue);

    const callBackFunc = (element) =>{

        let speedx = element.dataset.speedx ;
        let speedy = element.dataset.speedy ;

        // element.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue}px)))` ;

        element.style.transform = `translateX(${xValue * speedx}px) translateY(${yValue* speedy}px)`;
    }

    parallax_el.forEach(callBackFunc);

})



// element.style.transform = `translateX(calc(-50% + ${xValue}px)) translateY(calc(-50% + ${yValue}px)))` ;
// element.style.transform = `translateX(${xValue})px translateY(${yValue})px`;



const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


// GSAP



