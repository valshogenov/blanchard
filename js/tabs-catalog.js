$( function() {
    document.querySelectorAll(".catalog-header__btn").forEach(item => {
      item.addEventListener("click", function(e) {
        let path = e.currentTarget.dataset.path;
        document.querySelectorAll(".catalog-bottom").forEach(el => {
          el.classList.remove("tab-active");
        });
        document.querySelectorAll(".catalog-header__btn").forEach(el => {
          el.classList.remove("btn-active");
        });
        document.querySelector(`[data-target='${path}']`).classList.add("tab-active")
        this.classList.add("btn-active");
      })
    })
   
  $(".catalog-bottom").each((index, item) => {
    // let btns = item.find(".ac--list__iten-tab");
    let btns = item.querySelectorAll(".ac--list__iten-tab");
    let articles = item.querySelectorAll(".catalog-bottom__left");
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
} );
