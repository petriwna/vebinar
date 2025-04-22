export class Main {
    constructor() {
        this.btnReserve = document.querySelector(".anchor");
        this.reservSection = document.querySelector('#reserve');

        this.mobileMenu = document.querySelector('.mobile-menu');
        this.menuBtnOpen = document.querySelector('.menu-btn-open');
        this.menuBtnClose = document.querySelector('.menu-btn-close');

        this.addEventListeners();
    }

    addEventListeners() {
        this.btnReserve.addEventListener('click', this.scrollToSection.bind(this));

        this.menuBtnOpen.addEventListener('click', this.handleMenuButton.bind(this));
        this.menuBtnClose.addEventListener('click', this.handleMenuButton.bind(this));
    }

    scrollToSection(event) {
        event.preventDefault();
        this.reservSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    handleMenuButton() {
        this.toggleMenu();
        this.disableScroll();
    }

    toggleMenu() {
        this.mobileMenu.classList.toggle('is-open');
    }

    disableScroll() {
        document.body.classList.toggle('is-scroll-disable');
    }
}
