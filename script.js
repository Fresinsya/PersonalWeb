let pokemon = [
    {
        "name": "Koromon",
        "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
        "level": "In Training"
    },
    {
        "name": "Tsunomon",
        "img": "https://digimon.shadowsmith.com/img/tsunomon.jpg"
        , "level": "In Training"
    },
    { "name": "Yokomon", "img": "https://digimon.shadowsmith.com/img/yokomon.jpg", "level": "In Training" },
    { "name": "Motimon", "img": "https://digimon.shadowsmith.com/img/motimon.jpg", "level": "In Training" },
    { "name": "Tanemon", "img": "https://digimon.shadowsmith.com/img/tanemon.jpg", "level": "In Training" },
    { "name": "Bukamon", "img": "https://digimon.shadowsmith.com/img/bukamon.jpg", "level": "In Training" },
    { "name": "Tokomon", "img": "https://digimon.shadowsmith.com/img/tokomon.jpg", "level": "In Training" },
]

// let Listpokemon = document.getElementById('swiper-wrapper');

// for (let i = 0; i < pokemon.length; i++) {
//     const element = pokemon[i];
//     const card = `
//     <div class="swiper-slide">
//         <img src="${element.img}" alt="${element.name}">
//         <h1>${element.name}</h1>
//         <p>${element.level}</p>
//     </div>
//     `
//     Listpokemon.innerHTML += card;
// }


let slideHolder = document.querySelector("#slideHolder")
for (let i of pokemon) slideHolder.innerHTML += `
    <div class="swiper-slide"> 
        <div class="ImgHolder">
            <img src="${i.img}">
        </div>
        <div class="ContentHolder">
            <h3>${i.name}</h3>
            <p>${i.level}</p>
        </div>
    </div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 5000 }
});
// window.onresize = queryResizer
// queryResizer()
// function queryResizer() {
//     if (window.innerWidth < 724) swiper.params.slidesPerView = 2
//     if (window.innerWidth > 501) swiper.params.slidesPerView = 2
//     if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
//     if (window.innerWidth < 501) swiper.params.slidesPerView = 1
//     swiper.update()
// }