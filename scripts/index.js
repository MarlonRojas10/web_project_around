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
function cardGenerator(name, link) {
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
    popupImage.classList.add("popup_show");
  });
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  return card;
}
initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});
profileButton.addEventListener("click", function (evt) {
  popupProfile.classList.add("popup_show");
});
function handleCloseProfile() {
  popupProfile.classList.remove("popup_show");
}
function handleClosePlace() {
  popupPlace.classList.remove("popup_show");
}
function handleCloseImage() {
  popupImage.classList.remove("popup_show");
}
closeForm.addEventListener("click", function () {
  handleCloseProfile();
});
placeButton.addEventListener("click", function () {
  popupPlace.classList.add("popup_show");
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
  const cardToAdd = cardGenerator(inputPlaceName.value, inputPlaceEnlace.value);
  cardArea.prepend(cardToAdd);
  popupPlace.classList.remove("popup_show");
});
