const content = document.getElementById('content');

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

export {
    createContactPage
}