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
        const swordAdd = document.getElementById('showWeapon5');
        const swordEl = document.querySelector('[data-id=swords]');
        swords.map(o => {
            const option = new Option(o.name);
            swordEl.appendChild(option);
            swordAdd.addEventListener('click', () => {
                const img = document.createElement('IMG');
                if (swordEl.value === o.name) {
                    sword.innerHTML = '';
                    img.src = o.img;
                    console.log(img);
                    sword.appendChild(img);
                }
            });
        });
    }

// end показ sword

//показ boots
    function showBoots() {
        const boot = document.querySelector('.boots');
        const bootsAdd = document.getElementById('showWeapon3');
        const bootsEl = document.querySelector('[data-id=boots]');
        boots.map(o => {
            const option = new Option(o.name);
            bootsEl.appendChild(option);
            bootsAdd.addEventListener('click', () => {
                const img = document.createElement('IMG');
                if (bootsEl.value === o.name) {
                    boot.innerHTML = '';
                    img.src = o.img;
                    console.log(img);
                    boot.appendChild(img);
                }
            });
        });
    }

// end показ boots

//показ gloves
    function showGloves() {
        const glove = document.querySelector('.gloves');
        const glovesAdd = document.getElementById('showWeapon4');
        const gloveEl = document.querySelector('[data-id=gloves]');
        gloves.map(o => {
            const option = new Option(o.name);
            gloveEl.appendChild(option);
            glovesAdd.addEventListener('click', () => {
                const img = document.createElement('IMG');
                console.log(img);
                if (gloveEl.value === o.name) {
                    glove.innerHTML = '';
                    img.src = o.img;
                    console.log(img);
                    glove.appendChild(img);
                }
            });
        });
    }

// end показ gloves

// показ chest
    function showChest() {
        const chest = document.querySelector('.chest');
        const chestAdd = document.getElementById('showWeapon2');
        const chestEl = document.querySelector('[data-id=chest]');
        chests.map(o => {
            const option = new Option(o.name);
            chestEl.appendChild(option);
            chestAdd.addEventListener('click', () => {
                const img = document.createElement('IMG');
                console.log(img);
                if (chestEl.value === o.name) {
                    chest.innerHTML = '';
                    img.src = o.img;
                    console.log(img);
                    chest.appendChild(img);
                }
            });
        });
    }

// end показ chest

    // показ Helmet
    function showHelmet() {
        const helmetClass = document.querySelector('.helmet');
        const buttonHelmet = document.getElementById('showWeapon1');
        const helmetEl = document.querySelector('[data-id=system');
        helmets.map(o => {
            const option = new Option(o.name);
            helmetEl.appendChild(option);
            buttonHelmet.addEventListener('click', () => {
                console.log(helmets);
                const img = document.createElement('IMG');
                if (helmetEl.value === o.name) {
                    helmetClass.innerHTML = '';
                    img.src = o.img;
                    console.log(img);
                    helmetClass.appendChild(img);
                }
            })
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
