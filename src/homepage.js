function createTabs() {
    const content = document.getElementById('content');
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabsContainer');
    content.appendChild(tabsContainer);
    
    for (let i = 0; i < 3; i++) {
        const tabContent = ['Home', 'Menu', 'Contact'];
        const tab = document.createElement('button');
        tab.setAttribute('type', 'button');
        tab.id = 'tab';
        tab.classList.add('tab');
        tabsContainer.appendChild(tab);
        tab.textContent = tabContent[i];
        }
}

function createMainPage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('container');
    content.appendChild(container);

    const mainPage = document.createElement('div');
    mainPage.classList.add('mainPage');
    container.appendChild(mainPage);

    const mainPageBox1 = document.createElement('div');
    mainPageBox1.classList.add('mainPageBox1');
    mainPage.appendChild(mainPageBox1);
    mainPageBox1.textContent = 'Ristorante Rustica';

    const mainPageBox2 = document.createElement('div');
    mainPageBox2.classList.add('mainPageBox2', 'mainPageBox1');
    mainPage.appendChild(mainPageBox2);
    mainPageBox2.textContent = 'Sophisticated yet casual. Ristorante Rustica serves fresh, homemade Italian food. Whether you are celebrating a special occasion or just want to grab a quick bite to eat, Ristorante Rustica will satisfy your senses on every level.';

    const mainPageBox3 = document.createElement('div');
    mainPageBox3.classList.add('mainPageBox3', 'mainPageBox1');
    mainPage.appendChild(mainPageBox3);
    mainPageBox3.textContent = 'Hours of Operation';

    const mainPageBox4 = document.createElement('div');
    mainPageBox4.classList.add('mainPageBox4', 'mainPageBox1');
    mainPage.appendChild(mainPageBox4);
    mainPageBox4.textContent = 'Location';

    const hoursBox = document.createElement('ul');
    hoursBox.classList.add('hoursBox');
    mainPageBox3.appendChild(hoursBox);

    for (let i = 0; i < 7; i++) {
        const hours = ['Monday: 1pm - 10pm', 'Tuesday: 1pm - 10pm', 'Wednesday: 1pm - 10pm', 'Thurday: 1pm - 10pm', 'Friday: 1pm - 10pm', 'Saturday: 1pm - 10pm', 'Sunday: 1pm - 10pm']
        const li = document.createElement('li');
        li.classList.add('li');
        hoursBox.appendChild(li);
        li.textContent = hours[i];
    }
}

function createFooter() {
    const content = document.getElementById('content');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);

    for (let i=0; i < 3; i++) {
        const text = ['click me', 'click me', 'click me'];
        const footerLink = document.createElement('a');
        footerLink.setAttribute('href', "yourlink.here");
        footer.appendChild(footerLink);
        footerLink.textContent = text[i];
    }
}

export {
    createTabs,
    createMainPage,
    createFooter
}