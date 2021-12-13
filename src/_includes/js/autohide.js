document.addEventListener("DOMContentLoaded", function(){
  let navbar = document.querySelector('.autohide');
  if(navbar){
    let last_scroll_top = 0;
    window.addEventListener('scroll', function() {
      let scroll_top = window.scrollY;
      if(scroll_top < last_scroll_top) {
        navbar.classList.remove('scrolled-down');
        navbar.classList.add('scrolled-up');
      }
      else {
        navbar.classList.remove('scrolled-up');
        navbar.classList.add('scrolled-down');
      }
      last_scroll_top = scroll_top;
    }); 
  }
}); 
