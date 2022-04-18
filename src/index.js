import './style.css';
import { createHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

createTabs();
addingListeners();
createHomePage();
createFooter();

function addingListeners() {
    const tab = document.querySelectorAll('button');
    tab[0].addEventListener('click', () => {    
        clearCurrentContent();
        createTabs();
        addingListeners();
        createHomePage();
        createFooter();
    });
    tab[1].addEventListener('click', () => {
        clearCurrentContent()
        createTabs()
        addingListeners();
        loadMenuPage()
        createFooter();
    });
    tab[2].addEventListener('click', () => {
        clearCurrentContent()
        createTabs()
        addingListeners();
        loadContactPage()
        createFooter();
    });
}

function clearCurrentContent() {
    const currentContent = document.getElementById('content');
    currentContent.replaceChildren();   
}

function createTabs() {
    const content = document.getElementById('content');
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabsContainer');
    content.appendChild(tabsContainer);
    
    for (let i = 0; i < 3; i++) {
        const tabContent = ['Home', 'Menu', 'Contact'];
        const tab = document.createElement('button');
        tab.setAttribute('type', 'button');
        tab.id = 'tab';
        tab.classList.add('tab');
        tabsContainer.appendChild(tab);
        tab.textContent = tabContent[i];
        }
}

function createFooter() {
    const content = document.getElementById('content');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);

    for (let i=0; i < 3; i++) {
        const text = ['click me', 'click me', 'click me'];
        const footerLink = document.createElement('a');
        footerLink.setAttribute('href', "yourlink.here");
        footer.appendChild(footerLink);
        footerLink.textContent = text[i];
    }
}