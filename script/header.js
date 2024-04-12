const $menu = document.querySelector('.icon-menu');
const $navDisplay = document.querySelector('.nav');
const $magnifier = document.querySelector('.icon-magnifier');
const $searchBarDisplay = document.querySelector('#header-search-bar');
const $logo = document.querySelector('#header-logo');
const $purse = document.querySelector('.icon-purse');
const $userAreaDisplay = document.querySelector('.header-user-area');


$magnifier.addEventListener('click', () => {
  if (getComputedStyle($searchBarDisplay).display === "none") {
    $searchBarDisplay.style.display = 'block';
    $userAreaDisplay.style.display = "none";
    $navDisplay.style.display = "none";
    $menu.style.display = 'none';
    $logo.style.display = 'none';
  } else if (getComputedStyle($searchBarDisplay).display == "block") {
    $menu.style.display = 'block';
    $searchBarDisplay.style.display = "none";
    $logo.style.display = 'block';
  }
});

$purse.addEventListener('click', () => {
  if (getComputedStyle($userAreaDisplay).display === "none") {
    $userAreaDisplay.style.display = "block";
    $navDisplay.style.display = "none";
  } else if (getComputedStyle($userAreaDisplay).display == "block") {
    $menu.style.display = 'block';
    $logo.style.display = 'block';
    $userAreaDisplay.style.display = "none";
  }
});

$menu.addEventListener('click', () => {
  if (getComputedStyle($navDisplay).display === "none") {
    $navDisplay.style.display = "block";
    $userAreaDisplay.style.display = "none";
  } else if (getComputedStyle($navDisplay).display == "block") {
    $navDisplay.style.display = "none";
  }
});