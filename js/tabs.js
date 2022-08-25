document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})

$( function() {
  $(".tab-content").each((index, item) => {
    // let btns = item.find(".ac--list__iten-tab");
    let btns = item.querySelectorAll(".ac--list__iten-tab");
    let articles = item.querySelectorAll(".article-content");
    btns.forEach(el => {
      el.addEventListener("click",function(e) {
        let path = e.currentTarget.dataset.path;
        let tabCont = item.querySelector(`[data-target='${path}']`);
        console.log(tabCont)
        articles.forEach(el => {
          el.classList.remove("article-tabActive")
        })
        tabCont.classList.add("article-tabActive")
      })
    })
   
  })
});

