function createContactPage() {

    const contact = document.createElement('div');
    contact.classList.add('card');
    contact.textContent = 'Contact us for reservations.'

    const phoneNum = document.createElement('p');
    phoneNum.textContent = 'Phone 900 867 5309';

    const address = document.createElement('p');
    address.textContent = '101 Main Street, Anytown, USA';

    const location = document.createElement('img');
    location.src = 'https://previews.123rf.com/images/vadmary/vadmary1302/vadmary130200032/17960630-street-map-with-gps-icons-navigation.jpg';
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