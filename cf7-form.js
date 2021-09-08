function moveLabel() {
  const form = document.querySelector('.wpcf7-form')
  const label = form.querySelectorAll('label')

  label.forEach(el => {
    const input = el.querySelector('input') || el.querySelector('textarea')

    if (input.value) {
      el.classList.add('active')
    }

    input.addEventListener('focus', e=> {
      el.classList.add('active')
    })
    input.addEventListener('blur', e=> {
      if (!input.value) {
        el.classList.remove('active')
      }
    })
  })
}
if (hasElement('.wpcf7-form')) {
  moveLabel()
}
