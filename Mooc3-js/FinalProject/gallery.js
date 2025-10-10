/* gallery.js */
function upDate(previewPic){
  const display = document.getElementById("image");
  display.style.backgroundImage = `url("${previewPic.src}")`;
  display.textContent = previewPic.alt;
}

function unDo(){
  const display = document.getElementById("image");
  display.style.backgroundImage = ""; // trở về giá trị gốc (không có ảnh)
  display.textContent = "Hover over an image below to display here.";
}

window.onload = function() {
  const previews = document.querySelectorAll(".preview");

  previews.forEach((img, index) => {
    img.tabIndex = index + 1;

    // Khi focus bằng phím Tab → hiển thị ảnh
    img.addEventListener("focus", function() {
      upDate(this);
    });

    // Khi mất focus → trở lại như cũ
    img.addEventListener("blur", function() {
      unDo();
    });
  });
};