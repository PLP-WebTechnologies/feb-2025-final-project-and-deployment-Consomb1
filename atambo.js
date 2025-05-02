/* Sidebar Toggle Functionality: Handles the opening and closing of the sidebar menu. 
 Selects the sidebar, menu button, and cancel button elements, then adds event listeners to toggle the 
 'active' class on the sidebar when the menu or cancel button is clicked.*/

 const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  sidebar.classList.add("active");
};

cancelBtn.onclick = () => {
  sidebar.classList.remove("active");
};

/* Scroll-to-Top Button Visibility: Manages the visibility of the scroll-to-top button based on the user's scroll position.
 Selects the scroll button element and adds an event listener to the window's scroll event,
 showing the button when the user scrolls down more than 500 pixels and hiding it otherwise.*/
const scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};