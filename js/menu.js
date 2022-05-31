// Menu
const menu = document.querySelector('#showMenu');
const promotions = document.querySelector('#showPromotions');

// Buttons show menu
const showAll = document.querySelector('#showAll');
const showMystery = document.querySelector('#showMistery'); //1
const showAdventure = document.querySelector('#showAdventure');//2
const showBoxes = document.querySelector('#showBoxes');//3
const showTerror = document.querySelector('#showTerror');//4
const showFantasy = document.querySelector('#showFantasy');//5

// Items
let items

const clearItems = () => {
    items = '';
    menu.innerHTML = '';
}

const removeClasses = () => {
    showAll.classList.remove('active');
    showAdventure.classList.remove('active');
    showTerror.classList.remove('active');
    showFantasy.classList.remove('active');
    showBoxes.classList.remove('active');
    showMystery.classList.remove('active');
}

const checkIfHaveItem = items => {
    if (items === '')
        menu.innerHTML = '<p>Nenhum produto encontrado!</p>';
    else
        menu.innerHTML = items;
}

const addItemToArray = prod => {
    items +=
        `<div class="card">
            <div>
                <div class="cardImg">
                    <img src="./img/${prod.img}" alt="Imagem do livro ${prod.name}">
                </div>
                <h4>${prod.name}</h4>
                <p>${prod.description}</p>
            </div>
            <div>
                <p class="price">R$ <span>${prod.price}</span></p>
                <button class="btn" onclick="addToCart(${prod.id})">
                    <span class="iconify-inline" data-icon="mdi:cart-plus"></span> Adicionar
                </button>
            </div>
        </div>`;
}



function getBooksSpecifics(type){
    clearItems();

    books.map(prod => {
        if (prod.type === type || type === 0){
            addItemToArray(prod);
        }
    });

    checkIfHaveItem(items);
    removeClasses();
    switch(type){
        case 0: showAll.classList.add('active'); break;
        case 1: showMystery.classList.add('active'); break;
        case 2: showAdventure.classList.add('active'); break;
        case 3: showBoxes.classList.add('active'); break;
        case 4: showTerror.classList.add('active'); break;
        case 5: showFantasy.classList.add('active'); break;
    }
}

//Capturing button clicks
showAll.addEventListener('click', function(){getBooksSpecifics(0)});
showAdventure.addEventListener('click', function(){getBooksSpecifics(2)});
showTerror.addEventListener('click', function(){getBooksSpecifics(4)});
showFantasy.addEventListener('click', function(){getBooksSpecifics(5)});
showBoxes.addEventListener('click', function(){getBooksSpecifics(3)});
showMystery.addEventListener('click', function(){getBooksSpecifics(1)});
getBooksSpecifics(0);