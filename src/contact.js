function createContactPage() {

    const contact = document.createElement('div');
    contact.classList.add('mainPageBox1');
    contact.textContent = 'Contact Us'

    const phoneNum = document.createElement('p');
    phoneNum.textContent = 'Call Us 900 867 5309';

    const address = document.createElement('p');
    address.textContent = '101 Main Street, Anytown, USA';

    const location = document.createElement('img');
    location.src = '';
    location.alt = '';

    contact.appendChild(phoneNum);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact;
}

function loadContactPage() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContactPage());
}

export { loadContactPage }