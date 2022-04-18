import './style.css';
import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = 'Ristorante Rustica';

    header.appendChild(name);
    header.appendChild(createNavbar());

    return header;

}

function createNavbar() {
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('tab');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActive(homeBtn);
        loadHomePage();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('tab');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActive(menuBtn);
        loadMenuPage();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('tab');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActive(contactBtn);
        loadContactPage();
    });

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    return navBar;
}

function setActive(button) {
    const buttons = document.querySelectorAll('.tab');
    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.id = ('main');
    return main;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerLink = document.createElement('a');
    footerLink.href = '';
    footerLink.textContent = 'Click Me'

    const footerIcon = document.createElement('i');
    footerIcon.classList.add('fab');
    footerIcon.classList.add('fa-something');
    footer.appendChild(footerLink);
    return footer;

}

function initSite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    setActive(document.querySelector('.tab'));
    loadHomePage();
}

export { initSite }
