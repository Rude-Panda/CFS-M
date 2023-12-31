
// DIRECT MAIL
document.getElementById('content-frame-button-mail-cl-id').addEventListener('click', function() {
  const prefilledMessage = encodeURIComponent("Hello, I am interested in your product. Please send me more information.");
  const mailToLink = "mailto:manish@chestafin.com?subject=Regarding%20Your%20Product&body=" + prefilledMessage;
  window.location.href = mailToLink;
});


// SERVICES CAROUSEL
const cards = document.querySelectorAll('.page-4-element');
let currentIndex = 0;

function showNextCard() {
  cards[currentIndex].style.opacity = 0;

  currentIndex = (currentIndex + 1) % cards.length;

  cards[currentIndex].style.opacity = 1; 

  setTimeout(showNextCard, 1400); 
}

showNextCard();


// DIRECT DIAL
const callButton1 = document.getElementById("contact-us-button");
const callButton2 = document.getElementById("contact-us-button-1");
const callButton3 = document.getElementById("content-frame-button-call-id");
const phoneNumber = "+918851137043"; 

callButton1.addEventListener("click", function() {
    window.location.href = `tel:${phoneNumber}`;
});

callButton2.addEventListener("click", function() {
    window.location.href = `tel:${phoneNumber}`;
});

callButton3.addEventListener("click", function() {
    window.location.href = `tel:${phoneNumber}`;
});

// POPUP
const popupTriggers = document.querySelectorAll('.element');
const popupOverlay = document.getElementById('popup-overlay-id');
const popupContent = document.getElementById('contact-popup-container-id');

popupTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    popupOverlay.classList.add('show');
    popupContent.classList.add('show');
  });
});

popupOverlay.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.classList.remove('show');
    popupContent.classList.remove('show');
  }
});
