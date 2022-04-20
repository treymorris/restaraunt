function createMenuPage() {
    const menu = document.createElement('div');
    menu.classList.add('menuPage');
    
    menu.appendChild(
        createItem(
            'Campofiloni alle Cozze',
            'Mussels with black pasta, sea fruits and little tomatoes.',
            'https://images.freeimages.com/images/large-previews/fb6/campofiloni-alle-cozze-1544984.jpg'
        )
    );
    menu.appendChild(
        createItem(
            'Insalata Caprese',
            'Slices of fresh tomato layered with Basil and house-made fresh mozzerella.',
            'https://images.freeimages.com/images/large-previews/df3/fine-italian-food-gallery-1-1519673.jpg'
        )
    );
    menu.appendChild(
        createItem(
            'Pizza Rustica',
            'Classic homemade pizza topped with fresh tomatoes, feta cheese, and arugala.',
            'https://images.freeimages.com/images/large-previews/22e/pizza-1-1326545.jpg'
        )
    );
    menu.appendChild(
        createItem(
            'Tira Misu',
            'Ladyfingers dipped in expresso, layered with marscepone cheese, whipped cream, and dusted with chocolate.',
            'https://images.freeimages.com/images/large-previews/9d8/sweet-7-1321782.jpg'
        )
    );
    menu.appendChild(
        createItem(
            'Beverages',
            'Espresso, Beer, Wine, Soda',
            'https://images.freeimages.com/images/small-previews/3bc/cappucino-1329298.jpg'
        )
    );
    return menu;
}

function createItem(name, description, img) {

    const item = document.createElement('div');
    item.classList.add('card');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const itemImage = document.createElement('img')
    itemImage.src = img;
    itemImage.alt = name;
    
    item.appendChild(itemImage);
    item.appendChild(itemName);
    item.appendChild(itemDescription);

    return item;
}

function loadMenuPage() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenuPage())
}

export { loadMenuPage }