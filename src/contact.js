function createContactPage() {

    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const mainPage = document.createElement('div');
    mainPage.classList.add('mainPage');
    container.appendChild(mainPage);

    const contactPageBox1 = document.createElement('div');
    contactPageBox1.classList.add('mainPageBox1');
    mainPage.appendChild(contactPageBox1);
    contactPageBox1.textContent = 'Contact Us';

    const contactPageBox2 = document.createElement('div');
    contactPageBox2.classList.add('card');
    mainPage.appendChild(contactPageBox2);
    contactPageBox2.textContent = 'Contact 1';

    const contactPageBox3 = document.createElement('div');
    contactPageBox3.classList.add('card');
    mainPage.appendChild(contactPageBox3);
    contactPageBox3.textContent = 'Contact 2';

    const contactPageBox4 = document.createElement('div');
    contactPageBox4.classList.add('card');
    mainPage.appendChild(contactPageBox4);
    contactPageBox4.textContent = 'Contact 3';

}

export { createContactPage }