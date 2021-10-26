const content = document.getElementById('content');
 
const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tabs-container');
content.appendChild(tabsContainer);

const tab1 = document.createElement('div');
tab1.classList.add('tab1');
tabsContainer.appendChild(tab1);
tab1.textContent = 'Home';

const tab2 = document.createElement('div');
tab2.classList.add('tab2');
tabsContainer.appendChild(tab2);
tab2.textContent = 'Menu'

const tab3 = document.createElement('div');
tab3.classList.add('tab3');
tabsContainer.appendChild(tab3);
tab3.textContent = 'Contact'

const container = document.createElement('div');
container.classList.add('container');
content.appendChild(container);

const mainPage = document.createElement('div');
mainPage.classList.add('main-page');
container.appendChild(mainPage);

const menuPageBox1 = document.createElement('div');
menuPageBox1.classList.add('main-page-box1');
mainPage.appendChild(menuPageBox1);
menuPageBox1.textContent = 'Menu';

const menuPageBox2 = document.createElement('div');
menuPageBox2.classList.add('small-box');
mainPage.appendChild(menuPageBox2);
menuPageBox2.textContent = 'Appetizers';

const menuPageBox3 = document.createElement('div');
menuPageBox3.classList.add('big-box');
mainPage.appendChild(menuPageBox3);
menuPageBox3.textContent = 'Oysters ala fornio';

const menuPageBox4 = document.createElement('div');
menuPageBox4.classList.add('small-box');
mainPage.appendChild(menuPageBox4);
menuPageBox4.textContent = 'Salads';

const menuPageBox5 = document.createElement('div');
menuPageBox5.classList.add('big-box');
mainPage.appendChild(menuPageBox5);
menuPageBox5.textContent = 'Insalata Caprese';

const menuPageBox6 = document.createElement('div');
menuPageBox6.classList.add('small-box');
mainPage.appendChild(menuPageBox6);
menuPageBox6.textContent = 'Entrees';

const menuPageBox7 = document.createElement('div');
menuPageBox7.classList.add('big-box');
mainPage.appendChild(menuPageBox7);
menuPageBox7.textContent = 'Osso Bucco';

const menuPageBox8 = document.createElement('div');
menuPageBox8.classList.add('small-box');
mainPage.appendChild(menuPageBox8);
menuPageBox8.textContent = 'Desserts';

const menuPageBox9 = document.createElement('div');
menuPageBox9.classList.add('big-box');
mainPage.appendChild(menuPageBox9);
menuPageBox9.textContent = 'Tira Misu';

const menuPageBox10 = document.createElement('div');
menuPageBox10.classList.add('small-box');
mainPage.appendChild(menuPageBox10);
menuPageBox10.textContent = 'Beverages';

const menuPageBox11 = document.createElement('div');
menuPageBox11.classList.add('big-box');
mainPage.appendChild(menuPageBox11);
menuPageBox11.textContent = 'Wine';

const footer = document.createElement('div');
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
footerLink3.innerText = 'or click me';