const links = document.querySelectorAll('aside .link')
const sections = document.querySelectorAll('section')
const nav = document.querySelectorAll('nav-list li')

let pageNum = 0
let totalNum = sections.length

init(pageNum)


window.addEventListener('scroll', function () {
    let scroll = window.scrollY || this.window.pageYOffset

    for (let i = 0; i < totalNum; i++) {
        if (scroll > sections[i].offsetTop - window.outerHeight / 1.5 &&
            scroll < sections[i].offsetTop - window.outerHeight / 1.5 + sections[i].offsetHeight) {

            pageNum = i
            init(pageNum)
            // console.log(scroll,pageNum)
            funcObj[`f_${pageNum}`]()

        }
    }
})




let funcObj = {
    f_0: function () {
        console.log('0번 함수')
    },
    f_1: function () {
        console.log(1)
    },
    f_2: function () {
        console.log(2)
    },
    f_3: function () {
        console.log(3)
    },
    f_4: function () {
        console.log(4)
        const tl = gsap.timeline()

        tl.to('.card-front',{
            opacity:1,
            stagger:0.3,
            rotationY:360,
            duration: 1.5,
            
        })

    },
    f_5: function () {
        console.log(5)
    },

}

funcObj['f_0']()


function init(i) {
    links.forEach((link) => link.classList.remove('active'))
    sections.forEach((section) => section.classList.remove('current'))

    links[i].classList.add('active')
    sections[i].classList.add('current')
}

links.forEach(function (link, index) {

    link.addEventListener('click', function () {

        init(index)

        gsap.to(window, {
            duration: .1,
            scrollTo: {
                y: `#s${index}`
            }
        })

    })

})


