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
    , "Desc": "Diberikan tugas untuk memperbaiki website perusahaan dengan menggunakan bootstrap, seperti menambah swiper dan animasi hover.",
    "link" : "https://medianusamandiri.com/"
  },
  {
    "name": "Sky High",
    "img": "./asset/skyhigh.png",
    "Desc": "Membuat sebuah website e-commerce yang menjual sabun khusus untuk kulit sensitif.",
    "link": "https://uts-pem-web.vercel.app/"
  },
  {
    "name": "Food Corner", 
    "img": "./asset/e-canteen.jpg", 
    "Desc": "Website untuk mengorder makanan pada sebuah kantin, secara online, sehingga dapat mengurangi antrian, menggunakan bootstrap.",
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


