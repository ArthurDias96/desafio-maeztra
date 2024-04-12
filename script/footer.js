const $showInformacoes = document.querySelector('.footer-show-informacoes');
const $showConta = document.querySelector('.footer-show-conta');
const $showEndereco = document.querySelector('.footer-show-endereco');
const $footerNav = document.querySelector('#footer-nav');


$showInformacoes.addEventListener('click', () => {
  let $footerUlDisplay = document.querySelector('#footer-informacoes-ul');
  let height;
  if (getComputedStyle($footerUlDisplay).display === "none") {
    $footerUlDisplay.style.display = "block";
    height = parseInt(getComputedStyle($footerNav).height.replace('px', '')) + 140;
    $footerNav.style.height = height.toString().concat('px');

  } else if (getComputedStyle($footerUlDisplay).display == "block") {
    $footerUlDisplay.style.display = "none";
    height = parseInt(getComputedStyle($footerNav).height.replace('px', '')) - 140;
    $footerNav.style.height = height.toString().concat('px');
  }
});


$showConta.addEventListener('click', () => {
  let $footerUlDisplay = document.querySelector('#footer-conta-ul');
  let height;
  if (getComputedStyle($footerUlDisplay).display === "none") {
    $footerUlDisplay.style.display = "block";
    height = parseInt(getComputedStyle($footerNav).height.replace('px', '')) + 130;
    $footerNav.style.height = height.toString().concat('px');

  } else if (getComputedStyle($footerUlDisplay).display == "block") {
    $footerUlDisplay.style.display = "none";
    height = parseInt(getComputedStyle($footerNav).height.replace('px', '')) - 130;
    $footerNav.style.height = height.toString().concat('px');
  }
});


$showEndereco.addEventListener('click', () => {
  let $footerUlDisplay = document.querySelector('#footer-endereco-ul');
  let height;
  if (getComputedStyle($footerUlDisplay).display === "none") {
    $footerUlDisplay.style.display = "block";
    height = parseInt(getComputedStyle($footerNav).height.replace('px', '')) + 50;
    $footerNav.style.height = height.toString().concat('px');

  } else if (getComputedStyle($footerUlDisplay).display == "block") {
    $footerUlDisplay.style.display = "none";
    height = parseInt(getComputedStyle($footerNav).height.replace('px', '')) - 50;
    $footerNav.style.height = height.toString().concat('px');
  }
});