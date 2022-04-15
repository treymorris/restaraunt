function createMenuPage() {

    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('container');
    content.appendChild(container);
    // const menu = document.createElement('div');
    // menu.classList.add('container');
    // content.appendChild(menu);

    const menu = document.createElement('div');
    menu.classList.add('mainPage');
    //container.appendChild(menu);
    container.appendChild(menu);

    menu.appendChild(
        createItem(
            'Oysters ala fornio',
            'Oysters on the half-shell served ala flambe!'
        )
    );
    menu.appendChild(
        createItem(
            'Insalata Caprese',
            'Slices of fresh tomato layered with Basil and house-made fresh mozzerella.'
        )
    );
    menu.appendChild(
        createItem(
            'Osso Bucco',
            'Classic veal shank braised to perfection, with just a hint of citrus and rosemary.'
        )
    );
    menu.appendChild(
        createItem(
            'Tira Misu',
            'Ladyfingers dipped in expresso, layered with marscepone cheese, whipped cream, and dusted with chocolate.'
        )
    );
    menu.appendChild(
        createItem(
            'Beverages',
            'Beer, Wine, Soda'
        )
    );
    return menu;
}

function createItem(name, description) {

    const item = document.createElement('div');
    item.classList.add('card');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const itemImage = document.createElement('img')
    itemImage.src = '';
    itemImage.alt = `${name}`;
    
    item.appendChild(itemImage);
    item.appendChild(itemName);
    item.appendChild(itemDescription);

    return item;
}

export { createMenuPage }