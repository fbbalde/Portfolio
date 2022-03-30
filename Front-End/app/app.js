window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").classList.remove("nav-container-sticky")
    
    
  } else {
    document.getElementById("nav").classList.add("nav-container-sticky")
    
  }
}
