// cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;  
    cursor.style.top = `${mouseY}px`;  
});

document.addEventListener('click', () => {
    cursor.classList.add('clicked'); 

    
    setTimeout(() => {
        cursor.classList.remove('clicked');
    }, 200); 
});

// time 
gsap.from('.time', {
    yPercent: 110,
    stagger: 0.03,
    duration: .3,
    ease: 'power1'
})


const koTime = document.querySelector('.time')


function updateTime() {

    const koreaTime =new Date().toLocaleTimeString("en-US",{
        timeZone:'Asia/Seoul',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    })
    koTime.textContent=koreaTime

}
updateTime()
setInterval(updateTime, 1000)
gsap.registerPlugin(ScrollTrigger)
// time 

// intro
const s0 = gsap.timeline()

gsap.fromTo(".intro1-1", 
    {
        left: "40%", 
    }, 
    {
        opacity: 1, 
        left: "-3%",  
        duration: 1,  
        ease: "power2.inOut", 
    }
);

gsap.fromTo(".intro1-2", 
    {
        right: "40%",
    }, 
    {
        opacity: 1,   
        right: "0%", 
        duration: 1, 
        ease: "power2.inOut", 
    }
);

s0.fromTo(".intro2>span", 
    {
        y: 120
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: .5,
        stagger: 0.1,
        ease: "power2.out",
    }
);

s0.fromTo(".intro3>span", 
    {
        y: -120
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
        stagger: 0.1,
        ease: "power2.out",
    }
);

s0.fromTo(".redbar",
    {
        width:0,
    },
    {
        opacity: 1,
        width: "85%",
        duration: 0.5,
        delay:0.1,
        ease: "power2.out",
    }
);

s0.fromTo(".intro4",
    {
        top: "35%",
    },
    {
        opacity: 1,
        top: "18%",
        duration: 0.5,
        ease: "power2.out",
    }
)
// intro


// profile
gsap.registerPlugin(ScrollTrigger)



const scene1 = gsap.timeline({
    duration: 5
})

ScrollTrigger.create({
    animation: scene1,
    trigger: "#s1",
    start: "top 30%",
    end: "top 80%",
    scrub: 0.5,
})

scene1.to('#s1 .profile-hashtag', {
    duration: 5,
    stagger: 0.2,
    opacity: 1,
    y: 20,
    stagger: {
        each: 0.1,
        ease: "power1.out"
    },
})

scene1.to('#s1 .profile-info dl',{
    duration: 1,
    stagger: 2,
    opacity: 1,
    y: -10,
}) 
//interview

$(document).ready(function () {
    
    $('.con-tit').on('click', function () {
        const $parentLi = $(this).parent('li');
        const $siblingSub = $(this).siblings('.content');

        
        if ($parentLi.hasClass('act')) {
            $parentLi.removeClass('act');
            $siblingSub.stop(true, true).slideUp();
        } else {
            
            $parentLi
                .addClass('act')
                .siblings()
                .removeClass('act') 
                .children('.content')
                .stop(true, true)
                .slideUp(); 

            $siblingSub.stop(true, true).slideDown(); 
        }
    });
});






const workList = document.querySelectorAll('.work-list > li');

workList.forEach((work) => {
    const workContent = work.querySelector('.work-content');  


    work.addEventListener('mouseenter', () => {
        work.classList.add('On');
    });


    work.addEventListener('mouseleave', () => {
        work.classList.remove('On');
        workContent.classList.remove('On');
    });


    work.addEventListener('click', () => {
        if (workContent.classList.contains('On')) {
            workContent.classList.remove('On');
        } else {
            workContent.classList.add('On'); 
        }
    });
});













