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

