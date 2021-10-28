import './style.css';
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
        clearCurrentContent();
        createTabs();
        addingListeners();
        createMainPage();
        createFooter();
    });

    const menuTab = document.getElementById('tab2');
    menuTab.addEventListener('click', () => {
        clearCurrentContent()
        createTabs()
        addingListeners();
        createMenuPage()
        createFooter();
    });

    const contactTab = document.getElementById('tab3');
    contactTab.addEventListener('click', () => {
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