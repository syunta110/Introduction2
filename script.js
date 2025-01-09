// d3.csv("https://docs.google.com/spreadsheets/d/1SESAYBASYaFC7n1ew9SqWVXmsb83Px-QGdWCEDzXA3A/export?format=csv&range=A3:D", function(error, data) {
//     var text = "";
//     for (var i = 0; i < data.length; i++) {
//         text += `
//             <div class="comment">
//                 <div class="comment-header">
//                     ${i + 1} 名前: <a href="mailto:${data[i].Mail}">${data[i].Name}</a>
//                     <span class="timestamp">${data[i].Timestamp}</span>
//                 </div>
//                 <pre class="comment-body">${data[i].Comments}</pre>
//             </div>`;
//     }
//     d3.select("#comments").html(text);
// });
// script.js
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const parallaxBackground = document.querySelector('.slideshow');

    if (parallaxBackground) {
        parallaxBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});
// window.addEventListener('scroll', function(){
//     const scroll = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const boxes = document.querySelectorAll('.box');
  
//     boxes.forEach(function(box) {
//       const distanceToBox = box.offsetTop;
//       if(scroll + windowHeight > distanceToBox) {
//         box.classList.add('is-active');
//       }
//     });
//   });


  
// 初回ロード時の画面幅をチェック
const isMobile = window.innerWidth <= 768;

// スクロールイベントリスナー
window.addEventListener('scroll', function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll('.box');

  if (isMobile) {
    // スマホ用の処理
    boxes.forEach(function (box) {
      const distanceToBox = box.offsetTop;
      if (scroll + windowHeight - 50 > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  } else {
    // デスクトップ用の処理
    boxes.forEach(function (box) {
      const distanceToBox = box.offsetTop;
      if (scroll + windowHeight - 200 > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    loop: true, // スライドをループ
    autoplay: {
      delay: 3000, // 自動再生の間隔
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

