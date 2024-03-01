window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  const headerbuttonContainer = document.getElementsByClassName(
    "headerbutton-container"
  )[0];
  var x = window.matchMedia("(min-width: 1350px)");

  function myFunction(x) {
    if (x.matches) {
      menu_btn.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active");
      headerbuttonContainer.style.minHeight = "0vh";
    }
  }
  x.addEventListener("change", function () {
    myFunction(x);
  });

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    if (headerbuttonContainer.style.minHeight == "100vh") {
      headerbuttonContainer.style.minHeight = "0vh";
    } else {
      headerbuttonContainer.style.minHeight = "100vh";
    }
  });
};
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");



function leadership(){
   window.location.href = 'leadership.html';
}


function storiesPage(){
   window.location.href = 'stories.html';
}

function donate(){
  window.location.href = 'Checkout-button.html'
}




// Donate codee

    window.onload = selectButton('once')

    function closePopup() {
        document.getElementById("popup-overlay").style.display = "none";
    }

    function openPopup(){
        document.getElementById("popup-overlay").style.display = "block";
    }

    function selectButton(buttonId) {
            // Remove 'selected' class from all buttons
            var buttons = document.getElementsByClassName('button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('selected');
            }

            // Add 'selected' class to the clicked button
            var selectedButton = document.getElementById(buttonId + 'Button');
            selectedButton.classList.add('selected');
        }
    
    // Function to show the form when the "Credit Card" button is clicked
    function showForm(formId) {
            var form = document.getElementById(formId);
            form.classList.add('visible');
        }
    
    // Function to format the expiry input value as credit card expiry date
    function formatExpiryDate() {
            var expiryInput = document.getElementById("expiry");
            var inputValue = expiryInput.value;

            // Remove any non-digit characters from input
            var digitsOnly = inputValue.replace(/\D/g, "");

            // Format the input as "MM/YY"
            var formattedValue = digitsOnly.replace(/(\d{2})(\d{2})/, "$1/$2");

            // Update the input field value
            expiryInput.value = formattedValue;
        }
    
    function limitInputLength(input, maxLength) {
            if (input.value.length > maxLength) {
                input.value = input.value.slice(0, maxLength);
            }

        }
    