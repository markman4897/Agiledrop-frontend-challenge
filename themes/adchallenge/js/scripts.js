const nav_bar = document.getElementById("block-adchallenge-main-menu");
const link_list = nav_bar.getElementsByClassName("menu-item");

/* HACK: Fix incorrect link */

link_list[1].getElementsByTagName("a")[0].href = "#block-adchallenge-content";

/* Active header nav bar link tagger */

const toggle_active_link = () => {
  for (let l = 0; l < link_list.length; l++) {
    if (
      link_list[l].getElementsByTagName("a")[0].href == window.location.href
    ) {
      link_list[l].getElementsByTagName("a")[0].classList.add("active-link");
    } else {
      link_list[l].getElementsByTagName("a")[0].classList.remove("active-link");
    }
  }
};

window.addEventListener("hashchange", function () {
  toggle_active_link();
});

toggle_active_link();
