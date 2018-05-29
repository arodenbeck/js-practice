// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const toggleButton = document.querySelector('.jsModalToggle')
const closeButton = document.querySelector('.jsModalClose')
const modalWindow = document.querySelector('.jsModal')

toggleButton.addEventListener('click', _ => {
  document.body.classList.add('modal-is-open')
  modalWindow.setAttribute('aria-modal', 'true')
  closeButton.focus()
})

closeButton.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
  modalWindow.removeAttribute('aria-modal')
  toggleButton.focus()
})
