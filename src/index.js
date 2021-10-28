import './style.css';
//import './homepage.js';
//import './menupage.js';
//import './contactpage.js';

import { createMainPage, createTabs, createFooter } from './homepage';
import { createMenuPage } from './menupage';
import { createContactPage } from './contactpage';

createTabs();
addingListeners();
createMainPage();
createFooter();

function addingListeners() {

    const homeTab = document.getElementById('tab1');
    homeTab.addEventListener('click', () => {
        console.log('one');
        clearCurrentContent();
        createTabs();
        addingListeners();
        createMainPage();
    });

    const menuTab = document.getElementById('tab2');
    menuTab.addEventListener('click', () => {
        console.log('two');
        clearCurrentContent()
        createTabs()
        addingListeners();
        createMenuPage()
    });

    const contactTab = document.getElementById('tab3');
    contactTab.addEventListener('click', () => {
        console.log('three');
        clearCurrentContent()
        createTabs()
        addingListeners();
        createContactPage()
    });

}

function clearCurrentContent() {
    
    const currentContent = document.getElementById('content');
    currentContent.replaceChildren();
    
}