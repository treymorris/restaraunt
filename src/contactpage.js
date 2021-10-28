const content = document.getElementById('content');
 
/*const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tabs-container');
content.appendChild(tabsContainer);

const tab1 = document.createElement('button');
tab1.setAttribute('type', 'button');
tab1.classList.add('tab1');
tabsContainer.appendChild(tab1);
tab1.textContent = 'Home';

const tab2 = document.createElement('button');
tab2.setAttribute('type', 'button');
tab2.classList.add('tab2');
tabsContainer.appendChild(tab2);
tab2.textContent = 'Menu'

const tab3 = document.createElement('button');
tab3.setAttribute('type', 'button');
tab3.classList.add('tab3');
tabsContainer.appendChild(tab3);
tab3.textContent = 'Contact'*/

function createContactPage() {

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const mainPage = document.createElement('div');
    mainPage.classList.add('main-page');
    container.appendChild(mainPage);

    const contactPageBox1 = document.createElement('div');
    contactPageBox1.classList.add('main-page-box1');
    mainPage.appendChild(contactPageBox1);
    contactPageBox1.textContent = 'Contact Us';

    const contactPageBox2 = document.createElement('div');
    contactPageBox2.classList.add('contact-box');
    mainPage.appendChild(contactPageBox2);
    contactPageBox2.textContent = 'Contact 1';

    const contactPageBox3 = document.createElement('div');
    contactPageBox3.classList.add('contact-box');
    mainPage.appendChild(contactPageBox3);
    contactPageBox3.textContent = 'Contact 2';

    const contactPageBox4 = document.createElement('div');
    contactPageBox4.classList.add('contact-box');
    mainPage.appendChild(contactPageBox4);
    contactPageBox4.textContent = 'Contact 3';

}

/*const footer = document.createElement('div');
footer.classList.add('footer');
content.appendChild(footer);

const footerLink1 = document.createElement('a');
footerLink1.setAttribute('href', "yourlink.here");
footerLink1.classList.add('footer-link1');
footer.appendChild(footerLink1);
footerLink1.innerText = "click me now"

const footerLink2 = document.createElement('a');
footerLink2.setAttribute('href', "yourlink.here");
footerLink2.classList.add('footer-link2');
footer.appendChild(footerLink2);
footerLink2.innerText = 'or click me';

const footerLink3 = document.createElement('a');
footerLink3.setAttribute('href', "yourlink.here");
footerLink3.classList.add('footer-link3');
footer.appendChild(footerLink3);
footerLink3.innerText = 'or click me';*/

export {
    createContactPage
}