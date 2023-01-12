//scroll progress

document.addEventListener('scroll', function () {
    const htmlProg = document.querySelector(`.progress`)
    const progressBar = document.querySelector('.progressBar')
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight
    const targetScrollY = documentHeight - windowHeight
    const progress = Math.round((window.scrollY * 100) / targetScrollY)

    progressBar.style.width = progress + "%"
    htmlProg.innerHTML = progress + "%"
    console.log(progress)
})
const runBoxTarget = document.querySelector(`.run-box`);

runBoxTarget.addEventListener(`mouseenter`, function () {
    runBoxTarget.classList.add(`active`);
});
runBoxTarget.addEventListener(`mouseout`, function () {
    runBoxTarget.classList.remove(`active`);
});