let health = document.getElementById('health');
health = 100;
let armor = document.getElementById('armor');
armor = 10;

let attack = document.getElementById('attack');
attack = 25;



// показ sword

function showSword() {
    const sword = document.querySelector('.sword');
    const img = document.createElement('IMG');
    img.src = 'http://test.datalb.ru/assets/Sword-2.png';
    sword.appendChild(img);
    sword.style.display = 'none';
    const swordAdd = document.getElementById('showWeapon5');
    swordAdd.addEventListener('click', () => {
        event.preventDefault();
        sword.style.display = '';
        health += 0;
        armor += 0;
        attack += 25;
    });

}

// end показ sword

//показ boots
function showBoots() {
    const boots = document.querySelector('.boots');
    const img = document.createElement('IMG');
    img.src = 'http://test.datalb.ru/assets/Boots-2.png';
    boots.appendChild(img);
    boots.style.display = 'none';
    const bootsAdd = document.getElementById('showWeapon4');
    bootsAdd.addEventListener('click', () => {
        event.preventDefault();
        boots.style.display = '';
        health += 10;
        armor += 4;
        attack += 0;
    });
}

// end показ boots


//показ gloves
function showGloves() {
    const gloves = document.querySelector('.gloves');
    const img = document.createElement('IMG');
    img.src = 'http://test.datalb.ru/assets/Gloves-2.png';
    gloves.appendChild(img);
    gloves.style.display = 'none';
    const glovesAdd = document.getElementById('showWeapon3');
    glovesAdd.addEventListener('click', () => {
        event.preventDefault();
        gloves.style.display = '';
        health += 10;
        armor += 4;
        attack += 0;
    });
}

// end показ gloves

// показ chest
function showChest() {
    const chest = document.querySelector('.chest');
    const img = document.createElement('IMG');
    img.src = 'http://test.datalb.ru/assets/Chest-2.png';
    chest.appendChild(img);
    chest.style.display = 'none';
    const chestAdd = document.getElementById('showWeapon2');
    chestAdd.addEventListener('click', () => {
        event.preventDefault();
        chest.style.display = '';
        health += 30;
        armor += 15;
        attack += 0;
    });
}

// end показ chest

// показ Helmet
function showHelmet() {
    const equipment = document.querySelector('.helmet');
    const img = document.createElement('IMG');
    img.src = 'http://test.datalb.ru/assets/Helmet-2.png';
    equipment.appendChild(img);
    equipment.style.display = 'none';
    const helmet = document.getElementById('showWeapon1');
    helmet.addEventListener('click', () => {
        event.preventDefault();
        equipment.style.display = '';
        health += 10;
        armor += 4;
        attack += 0;
    });
}

//end Helmet


function getHeroImg() {
    const hero = document.querySelector('.hero-img');
    const img = document.createElement('IMG');
    img.src = 'http://test.datalb.ru/assets/Dude-2.png';
    hero.appendChild(img);
}


function getData() {
    const goodsData = document.getElementById('maket');
    return fetch('test.json')
        .then((responce) => {

            if (responce.ok) {
                return responce.json();
            } else {
                throw new Error('Данные не были получены, ошибка: ' + responce.status);
            }
        })
        .then((data) => {
            return data;
        })


        .catch((err) => {
            console.warn(err);
            goodsData.innerHTML = '<div style="color: red; font-size: 30px">Упс, что-то пошло не так!</div>'
        });

}


getData();
showSword();
getHeroImg();
showBoots();
showChest();
showGloves();
showHelmet();
