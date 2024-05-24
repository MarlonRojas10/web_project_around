const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__job");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formProfile = document.querySelector("#form-profile");
const closeForm = document.querySelector("#close-profile-form");

profileButton.addEventListener("click", function (evt) {
  popupProfile.classList.add("popup_show");
});
function handleCloseProfile() {
  popupProfile.classList.remove("popup_show");
}
closeForm.addEventListener("click", handleCloseProfile);

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handleCloseProfile();
});
