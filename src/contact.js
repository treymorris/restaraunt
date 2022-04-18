function createContactPage() {

    
const contactPageBox1 = document.createElement('div');
    contactPageBox1.classList.add('mainPageBox1');
    contactPageBox1.textContent = 'Contact Us'

    const phoneNum = document.createElement('p');
    phoneNum.textContent = 'Call Us 900 867 5309';

    const address = document.createElement('p');
    address.textContent = '101 Main Street, Anytown, USA';

    const location = document.createElement('img');
    location.src = '';
    location.alt = '';

    contactPageBox1.appendChild(phoneNum);
    contactPageBox1.appendChild(address);
    contactPageBox1.appendChild(location);

    return contactPageBox1;
}

function loadContactPage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);
    const mainPage = document.createElement('div');
    mainPage.classList.add('mainPage');
    container.appendChild(mainPage);
    mainPage.appendChild(createContactPage());
}

export { loadContactPage }