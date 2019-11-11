'use strict';

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
};

window.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contactForm');
  var contactFormSubmit = document.getElementById('contactFormSubmit');

  function submitSuccess() {
    contactForm.reset();
    contactFormSubmit.textContent = '전송이 완료되었습니다. 감사합니다.';
  }

  function submitError() {
    contactFormSubmit.textContent = '일시적인 오류가 발생하였습니다. 잠시후 다시 전송 부탁드립니다.';
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(contactForm);
    ajax(contactForm.method, contactForm.action, data, submitSuccess, submitError);
  });
});

document.getElementById('nav').addEventListener('click', function (e) {
  var eventTarget = e.target;
  var initWidth = 1079;

  switch (eventTarget.tagName) {
    case 'STRONG' :
      var offsetTarget = document.getElementById(eventTarget.dataset.moveTarget);
      var distance = window.innerWidth >= initWidth ? parseInt(eventTarget.offsetHeight, 10) : 0;

      if (e.currentTarget.classList.contains('active')) {
        e.currentTarget.classList.remove('active');
      }

      return window.scroll({
        top: offsetTarget.offsetTop - distance,
        left: 0,
        behavior: 'smooth'
      });
    case 'BUTTON' :
    case 'SPAN':
      return e.currentTarget.classList.toggle('active');
  }
});

document.getElementById('goTop').addEventListener('click', function() {
  return window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
