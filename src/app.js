const xhr = new XMLHttpRequest();
xhr.open('GET', '/test.json');
xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.responseText);
    const {person} = data;
    const {helmets} = data.equipment;
    const {chests} = data.equipment;
const {boots} = data.equipment;
const {gloves} = data.equipment;
const {swords} = data.equipment;


// показ sword
    function showSword() {
        const sword = document.querySelector('.sword');
        const img = document.createElement('IMG');
        img.src = swords[0].img;
        sword.appendChild(img);
        sword.style.display = 'none';
        const swordAdd = document.getElementById('showWeapon5');
        swordAdd.addEventListener('click', () => {
            event.preventDefault();
            sword.style.display = '';

        });
    }
// end показ sword

//показ gloves
    function showGloves() {
        const glove = document.querySelector('.gloves');
        const img = document.createElement('IMG');
        img.src = gloves[0].img;
        glove.appendChild(img);
        glove.style.display = 'none';
        const glovesAdd = document.getElementById('showWeapon3');
        glovesAdd.addEventListener('click', () => {
            event.preventDefault();
            glove.style.display = '';

        });
    }
// end показ gloves

//показ boots
    function showBoots() {
        const boot = document.querySelector('.boots');
        const img = document.createElement('IMG');
        img.src = boots[0].img;
        boot.appendChild(img);
        boot.style.display = 'none';
        const bootsAdd = document.getElementById('showWeapon4');
        bootsAdd.addEventListener('click', () => {
            event.preventDefault();
            boot.style.display = '';

        });
    }
// end показ boots

// показ chest
        function showChest() {
        const chest = document.querySelector('.chest');
        const img = document.createElement('IMG');
        img.src = chests[0].img;
        chest.appendChild(img);
        chest.style.display = 'none';
        const chestAdd = document.getElementById('showWeapon2');
        chestAdd.addEventListener('click', () => {
            event.preventDefault();
            chest.style.display = '';

        });
    }
// end показ chest

    // показ Helmet
    function showHelmet() {
        const equipment = document.querySelector('.helmet');
        const img = document.createElement('IMG');
        img.src = helmets[0].img;
      //  console.log(helmets[0].img);
        equipment.appendChild(img);
        equipment.style.display = 'none';
        const helmet = document.getElementById('showWeapon1');
        helmet.addEventListener('click', () => {
            event.preventDefault();
            equipment.style.display = '';

        });
    }
//end Helmet
    function getHeroImg() {
        const hero = document.querySelector('.hero-img');
        const img = document.createElement('IMG');
        img.src = person.img;
        hero.appendChild(img);
    }

    getHeroImg();
    showHelmet();
    showChest();
    showBoots();
    showGloves();
    showSword();
});
xhr.send();












