import './style.css';
import { createMainPage, createTabs, createFooter } from './homepage';
import { createMenuPage } from './menupage';
import { createContactPage } from './contactpage';

createTabs();
addingListeners();
createMainPage();
createFooter();

function addingListeners() {
    const tab = document.querySelectorAll('button');
    tab[0].addEventListener('click', () => {    
        clearCurrentContent();
        createTabs();
        addingListeners();
        createMainPage();
        createFooter();
    });
    tab[1].addEventListener('click', () => {
        clearCurrentContent()
        createTabs()
        addingListeners();
        createMenuPage()
        createFooter();
    });
    tab[2].addEventListener('click', () => {
        clearCurrentContent()
        createTabs()
        addingListeners();
        createContactPage()
        createFooter();
    });
}

function clearCurrentContent() {
    const currentContent = document.getElementById('content');
    currentContent.replaceChildren();   
}