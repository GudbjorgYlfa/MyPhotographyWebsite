// Hamburger menu at the top - NavBar
function myBurgerMenuButton() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  /* ========================= */
  /* Dropdown Button inside Burger menu*/
  /* ========================= */

function dropdownMenuPersonalWork() {
    var x = document.getElementById("dropdownMenuPersonalWork");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/* ========================= */
/* Dropdown Button */
/* ========================= */

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropDownButton() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }