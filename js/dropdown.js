document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header-support-item__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".container--dropdown");
    
    document.querySelectorAll(".header-support-item__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });
    
    document.querySelectorAll(".container--dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header-support-list")) {
    document.querySelectorAll(".container--dropdown").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".header-support-item__btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
})