
// menu show and hide   

const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav_close");


/*    menu show logic  */

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}  

/* menu hidden logic  */

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}



/* =====================remove menu on mobile======================= */

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*================================ Skills on-off=======================*/

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

      function toggleSkills(){
        let itemClass = this.parentNode.className;

        for(let i = 0; i<skillsContent.length; i++){
            skillsContent[i].className = 'skills_content skills_close';
        }

        if(itemClass === 'skills_content skills_close'){
            this.parentNode.className = 'skills_content skills_open'
        }
      }

      skillsHeader.forEach((el)=>{
        el.addEventListener('click', toggleSkills)
      })

    /*===========================Qualification Tab===========================*/

    const tabs = document.querySelectorAll('[data-target]');
    const tabContents=document.querySelectorAll('[data-content]');

    tabs.forEach((tab)=>{
        tab.addEventListener('click', ()=>{
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification_active');
            })
            target.classList.add('qualification_active');

            tabs.forEach(tab =>{
                tab.classList.remove('qualification_active');
            })
            tab.classList.add('qualification_active');
        })
    })


    /*=========================service model =======================*/

    const modelViews = document.querySelectorAll('.services_model'),
          modelBtns  = document.querySelectorAll('.services_button'),
          modelCloses = document.querySelectorAll('.services_model-close')


    let model = function(modelClick){
        modelViews[modelClick].classList.add('active-model')
    }

    modelBtns.forEach((modelBtn,i)=>{
        modelBtn.addEventListener('click', ()=>{
            model(i)
        })

    })

    modelCloses.forEach((modelClose)=>{
        modelClose.addEventListener('click', ()=>{
            modelViews.forEach((modelView)=>{
                modelView.classList.remove('active-model')
            })
        })

    })


    /*================== ===========portfolio swiper=========================*/

    let swiper = new Swiper('.portfolio_container', {
        cssMode:true,
        loop:true,

        navigation: {

            nextEl:'.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        },
    });

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

    const sections = document.querySelectorAll('section[id]')


    function scrollActive(){
    const scrollY = window.pageYOffset

    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

    window.addEventListener('scroll', scrollActive)



    /*==================Change Background Header=================================*/

    function scrollHeader(){
        const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*==================Show-ScrollUp=====================*/
    function scrollup(){
        const scrollup = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollup)

    /*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
