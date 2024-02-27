const body = document.body
const buttons = document.querySelectorAll(".button")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        toggleModal()
    })
})

overlay.addEventListener("click", () => {
    toggleModal()
})

function toggleModal() {
    modal.classList.toggle("modalIsOpen")
    overlay.classList.toggle("overlayIsOpen")
    body.classList.toggle("isScrollNotAllowed")
}