/*==========BACK TOT TOP (retour haut de page) ==========*/
//POUR AFFICHER LE BOUTON RETOUR QUAND ON SCROLL

//la variable backToTopBtn va récupérer la class back-to-top
let backToTopBtn = document.querySelector('.back-to-top')
    //au scroll on déclenche la fonction flêché
window.onscroll = () => {
    //body.scrollTop qui correspond au nombre de pixels dont le contenu body.scrollTop a défilé vers le haut.
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

/*========== TOP NAVIGATION MENU ==========*/
//POUR SUPPRIMER OU AFFICHER LA CLASS ACTIVE AU MENU

let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) => {
        item.onclick = (e) => {
            let currMenu = document.querySelector('.menu-item.active')
            currMenu.classList.remove('active')
            item.classList.add('active')
        }
    })
    /*========== TOP NAVIGATION MENU ==========*/
    //POUR METTRE UN BACKGROUND  A LA NAV AU SCROLL
    //on écoute le scroll sur la fenêtre (window)
    //addEventListener pour écouter l'"evenement et on écoute le 'scroll'
    //Au 'scroll' on va déclencher une fonction
window.addEventListener('scroll', function() {
    //la const header va récupérer la class header
    const header = document.querySelector('.nav');
    header.classList.toggle('sticky', window.scrollY > 0);
    //on on ajoute ou supprime si existante une class à header qui s'apelle 'sticky' qui vient si scroll est > à 0
});
/*========== FOOD CATEGORY ==========*/
//POUR AFFICHER SEULEMENT PAR RAPPORT AU CATEGORY

let foodMenuList = document.querySelector('.food-item-wrap')

let foodCategory = document.querySelector('.food-category')

let categories = foodCategory.querySelectorAll('button')

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        let currCat = foodCategory.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList = 'food-item-wrap ' + e.target.getAttribute('data-food-type')
    }
})

/*========== ON SCROLL ANIMATION ==========*/

let scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()

/*========== MOBILE NAV ==========*/
/*CHANGE LA COULEUR DU MENU SECTIONNE*/
let bottomNavItems = document.querySelectorAll('.mb-nav-item')

let bottomMove = document.querySelector('.mb-move-item')

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        console.log('object')
        let actItem = document.querySelector('.mb-nav-item.active')
        actItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})