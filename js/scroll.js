const leftFadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-from-left');
        } else {
            entry.target.classList.remove('animate-fade-in-from-left');
        }
    });
});
const leftFadeClasses = document.querySelectorAll('.left-fade-in');
leftFadeClasses.forEach((el) => leftFadeObserver.observe(el));

const bottomFadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-from-bottom');
        } else {
            entry.target.classList.remove('animate-fade-in-from-bottom');
        }
    });
});
const bottomFadeClasses = document.querySelectorAll('.bottom-fade-in');
bottomFadeClasses.forEach((el) => bottomFadeObserver.observe(el));