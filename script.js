let pokemon = [
  {
    "name": "Green Journal",
    "img": "./asset/greenjournal.png",
    "Desc": "Mengembangkan sistem akuntansi berbasis website untuk perusahaan KSS dengan menggunakan bahasa pemrograman PHP, mysql, dan bootstrap.",
    "link": "https://kss.greenjournal.id/"
  },
  {
    "name": "Media Nusa Mandiri",
    "img": "./asset/mnm.jpeg"
    , "Desc": "In Training"
  },
  {
    "name": "Sky High",
    "img": "./asset/skyhigh.png",
    "Desc": "In Training",
    "link": "https://uts-pem-web.vercel.app/"
  },
  {
    "name": "Food Corner", 
    "img": "./asset/e-canteen.jpg", 
    "Desc": "In Training",
    "link": "https://blue-bewildered-swallow.cyclic.app/"
  },

]


let slideHolder = document.querySelector("#slideHolder")

if (slideHolder) {
  for (let i of pokemon) {
    slideHolder.innerHTML += `
      <div class="swiper-slide">
        <div class="ImgHolder">
          <img src="${i.img}" alt="${i.name}" />
        </div>
        <div class="ContentHolder">
          <h3>${i.name}</h3>
          <p>${i.Desc}</p>
          <a href="${i.link}" target="_blank">Lihat</a>
        </div>
      </div>
    `;
  }
}


const swiper = new Swiper('#craouselContainer', {
  // grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    depth: 20,
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

