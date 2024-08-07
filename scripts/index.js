const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__job");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formProfile = document.querySelector("#form-profile");
const closeForm = document.querySelector("#close-profile-form");
const closeFormProfile = document.querySelector("#close-place-form");
const placeButton = document.querySelector(".profile__add");
const popupPlace = document.querySelector("#popup-place");
const inputPlaceName = document.querySelector("#input-nameLugar");
const inputPlaceEnlace = document.querySelector("#input-enlace");
const formCards = document.querySelector("#add-card");
const template = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");
const popupImage = document.querySelector("#popup-image");
const viewImage = document.querySelector("#view-image");
const closeImage = document.querySelector("#close-image-form");
const titleImage = document.querySelector(".popup__title");
const imageLink = document.querySelector(".popup__image");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
function generatorCard(name, link) {
  const card = template.cloneNode(true).content.querySelector(".element");
  const cardImage = card.querySelector(".element__img");
  const cardTitle = card.querySelector(".element__title");
  const btnDelete = card.querySelector(".element__photo-trash");
  const btnFavorite = card.querySelector(".element__favorite");
  btnDelete.addEventListener("click", function () {
    card.remove();
  });
  btnFavorite.addEventListener("click", function () {
    btnFavorite.classList.toggle("element__favorite-active");
  });
  cardImage.addEventListener("click", function () {
    titleImage.textContent = cardTitle.textContent;
    imageLink.src = cardImage.src;
    imageLink.alt = cardTitle.textContent;
    popupImage.classList.add("popup_show");
  });
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  return card;
}
initialCards.forEach(function (element) {
  const newCard = generatorCard(element.name, element.link);
  cardArea.append(newCard);
});
profileButton.addEventListener("click", function (evt) {
  popupProfile.classList.add("popup_show");
  document.addEventListener("keydown", closePopupOnEsc);
});
function handleCloseProfile() {
  popupProfile.classList.remove("popup_show");
  document.removeEventListener("keydown", closePopupOnEsc);
}
function handleClosePlace() {
  popupPlace.classList.remove("popup_show");
  document.removeEventListener("keydown", closePopupOnEsc);
}
function handleCloseImage() {
  popupImage.classList.remove("popup_show");
  document.removeEventListener("keydown", closePopupOnEsc);
}
function closePopupOnOverlayClick(evt) {
  if (evt.target.classList.contains("popup")) {
    evt.target.classList.remove("popup_show");
  }
}
closeForm.addEventListener("click", function () {
  handleCloseProfile();
});
closeFormProfile.addEventListener("click", function () {
  handleClosePlace();
});
placeButton.addEventListener("click", function () {
  popupPlace.classList.add("popup_show");
  document.addEventListener("keydown", closePopupOnEsc);
});
closeImage.addEventListener("click", function () {
  handleCloseImage();
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handleCloseProfile();
});

formCards.addEventListener("submit", function (event) {
  event.preventDefault();
  const cardToAdd = generatorCard(inputPlaceName.value, inputPlaceEnlace.value);
  cardArea.prepend(cardToAdd);
  popupPlace.classList.remove("popup_show");
});
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", closePopupOnOverlayClick);
});

function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    document.querySelectorAll(".popup_show").forEach((popup) => {
      popup.classList.remove("popup_show");
    });
  }
}
