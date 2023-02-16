"use strict"

// accordion

const accordionHeader = document.querySelectorAll(".accordion__header")

accordionHeader.forEach((item) => {
  item.addEventListener("click", (e) => {
    let content = item.nextElementSibling
    let accordion = item.closest(".accordion")
    accordion.classList.toggle("active")
    item.querySelector(".accordion__button").classList.toggle("active")
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
})

// languages

const langBtn = document.querySelectorAll(".top-footer__lang")

langBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active")
    } else {
      e.currentTarget.classList.add("active")
      let nextEl = e.currentTarget.nextElementSibling
      let prevEl = e.currentTarget.previousElementSibling
      if (nextEl) {
        nextEl.classList.remove("active")
      } else {
        prevEl.classList.remove("active")
      }
    }
  })
})

//circles

var element = document.querySelectorAll("[data-circle]")

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    }

  if (
    targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right
  ) {
    // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    console.clear()
    console.log("Вы видите элемент :)")

    target.classList.add("active")
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear()
    target.classList.remove("active")
  }
}

// Запускаем функцию при прокрутке страницы
window.addEventListener("scroll", function () {
  element.forEach((item) => {
    Visible(item)
  })
})

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
// Visible(element)

const bubbles = document.querySelectorAll(".circle")
console.log(bubbles)

setTimeout(() => {
  bubbles.forEach((e) => {
    e.classList.add("active")
  })
}, 2000)
