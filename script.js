let filteredMuseums = [];
let currentRoute = null;
let currentDate = new Date();
let myMap;

const museumData = [
    {
        type: "Feature",
        id: 0,
        geometry: {
            type: "Point",
            coordinates: [56.837487, 60.605657]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей природы Урала</strong><br><img src="img/PrirodaYrala.jpg" alt="Музей природы Урала" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.837487, 60.605657])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.837487, 60.605657])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей природы Урала</h3>
                <div class="gallery">
                    <img src="img/PrirodaYrala2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala4.jpg" alt="Фoto 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala5.jpg" alt="Фoto 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala6.jpg" alt="Фoto 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala7.jpg" alt="Фoto 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala8.jpg" alt="Фoto 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala9.jpg" alt="Фoto 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "природа"
    },
    {
        type: "Feature",
        id: 1,
        geometry: {
            type: "Point",
            coordinates: [56.836255, 60.605714]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей архитектуры и дизайна</strong><br><img src="img/ArxitDiz.jpg" alt="Музей архитектуры и дизайна" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.836255, 60.605714])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.836255, 60.605714])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей архитектуры и дизайна</h3>
                <div class="gallery">
                    <img src="img/ArxitDiz2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/ArxitDiz3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/ArxitDiz4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/ArxitDiz5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/ArxitDiz6.jpg" alt="Фoto 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/ArxitDiz7.jpg" alt="Фoto 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/ArxitDiz8.jpg" alt="Фoto 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/ArxitDiz9.jpg" alt="Фoto 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "архитектура"
    },
    {
        type: "Feature",
        id: 2,
        geometry: {
            type: "Point",
            coordinates: [56.835295, 60.603326]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей изобразительных искусств</strong><br><img src="img/IsobrazIsk.jpg" alt="Екатеринбургский музей изобразительных искусств" style="width: 300px; height: 150px;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.835295, 60.603326])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.835295, 60.603326])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей изобразительных искусств</h3>
                <div class="gallery">
                    <img src="img/IsobrazIsk2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/IsobrazIsk3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/IsobrazIsk4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/IsobrazIsk5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/IsobrazIsk6.jpg" alt="Фoto 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/IsobrazIsk7.jpg" alt="Фoto 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/IsobrazIsk8.jpg" alt="Фoto 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/IsobrazIsk9.jpg" alt="Фoto 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "искусство" 
    },
    {
        type: "Feature",
        id: 3,
        geometry: {
            type: "Point",
            coordinates: [56.839213, 60.606905]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей истории камнерезного и ювелирного искусства</strong><br><img src="img/KamnUvelirn.jpg" alt="Музей истории камнерезного и ювелирного искусства" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.839213, 60.606905])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.839213, 60.606905])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей истории камнерезного и ювелирного искусства</h3>
                <div class="gallery">
                    <img src="img/KamnUvelirn2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/KamnUvelirn3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/KamnUvelirn4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/KamnUvelirn5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/KamnUvelirn6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/KamnUvelirn7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/KamnUvelirn8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/KamnUvelirn9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 4,
        geometry: {
            type: "Point",
            coordinates: [56.842743, 60.606889]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Литературная жизнь Урала XX века, музей</strong><br><img src="img/JiznYrala.jpg" alt="Литературная жизнь Урала XX века, музей" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.842743, 60.606889])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.842743, 60.606889])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Литературная жизнь Урала XX века, музей</h3>
                <div class="gallery">
                    <img src="img/JiznYrala2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/JiznYrala3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/JiznYrala4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/JiznYrala5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/JiznYrala6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/JiznYrala7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/JiznYrala8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/JiznYrala9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 5,
        geometry: {
            type: "Point",
            coordinates: [56.843752, 60.608468]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей святой царской семьи</strong><br><img src="img/CarskyaSemya.jpg" alt="Музей святой царской семьи" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.843752, 60.608468])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.843752, 60.608468])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей святой царской семьи</h3>
                <div class="gallery">
                    <img src="img/CarskyaSemya2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/CarskyaSemya3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/CarskyaSemya4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/CarskyaSemya5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/CarskyaSemya6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/CarskyaSemya7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/CarskyaSemya8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/CarskyaSemya9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 6,
        geometry: {
            type: "Point",
            coordinates: [56.834169, 60.602954]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Краеведческий музей имени О. Е. Клера</strong><br><img src="img/MuzeiKlera.jpg" alt="Краеведческий музей имени О. Е. Клера" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.834169, 60.602954])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.834169, 60.602954])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Краеведческий музей имени О. Е. Клера</h3>
                <div class="gallery">
                    <img src="img/MuzeiKlera2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiKlera3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiKlera4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiKlera5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiKlera6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiKlera7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiKlera8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiKlera9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "архитектура"
    },
    {
        type: "Feature",
        id: 7,
        geometry: {
            type: "Point",
            coordinates: [56.833413, 60.603323]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей андеграунда, галерея Павла Неганова</strong><br><img src="img/PavlaNeganova.jpg" alt="Музей андеграунда, галерея Павла Неганова" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.833413, 60.603323])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.833413, 60.603323])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей андеграунда, галерея Павла Неганова</h3>
                <div class="gallery">
                    <img src="img/PavlaNeganova2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/PavlaNeganova3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/PavlaNeganova4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/PavlaNeganova5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/PavlaNeganova6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/PavlaNeganova7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/PavlaNeganova8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/PavlaNeganova9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "искусство"
    },
    {
        type: "Feature",
        id: 8,
        geometry: {
            type: "Point",
            coordinates: [56.833713, 60.615436]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей Миши Брусиловского</strong><br><img src="img/MishaBrysilovski.jpg" alt="Музей Миши Брусиловского" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.833713, 60.615436])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.833713, 60.615436])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей Миши Брусиловского</h3>
                <div class="gallery">
                    <img src="img/MishaBrysilovski2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/MishaBrysilovski3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/MishaBrysilovski4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/MishaBrysilovski5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/MishaBrysilovski6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/MishaBrysilovski7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/MishaBrysilovski8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/MishaBrysilovski9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 9,
        geometry: {
            type: "Point",
            coordinates: [56.833476, 60.613006]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей радио имени А. С. Попова</strong><br><img src="img/RadioPopova.jpg" alt="Музей радио имени А. С. Попова" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.833476, 60.613006])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.833476, 60.613006])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей радио имени А. С. Попова</h3>
                <div class="gallery">
                    <img src="img/RadioPopova2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/RadioPopova3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/RadioPopova4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/RadioPopova5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/RadioPopova6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/RadioPopova7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/RadioPopova8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/RadioPopova9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 10,
        geometry: {
            type: "Point",
            coordinates: [56.836948, 60.612782]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Свердловский областной музей истории медицины</strong><br><img src="img/MuzeiMedecini.jpg" alt="Свердловский областной музей истории медицины" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.836948, 60.612782])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.836948, 60.612782])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Свердловский областной музей истории медицины</h3>
                <div class="gallery">
                    <img src="img/MuzeiMedecini2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiMedecini3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiMedecini4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiMedecini5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiMedecini6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiMedecini7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiMedecini8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiMedecini9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 11,
        geometry: {
            type: "Point",
            coordinates: [56.840779, 60.611506]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей истории Екатеринбурга</strong><br><img src="img/IstoriaEkb.jpg" alt="Музей истории Екатеринбурга" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.840779, 60.611506])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.840779, 60.611506])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей истории Екатеринбурга</h3>
                <div class="gallery">
                    <img src="img/IstoriaEkb2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/IstoriaEkb3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/IstoriaEkb4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/IstoriaEkb5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/IstoriaEkb6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/IstoriaEkb7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/IstoriaEkb8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/IstoriaEkb9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 12,
        geometry: {
            type: "Point",
            coordinates: [56.841497, 60.614102]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей дома Романовых</strong><br><img src="img/MuzeiRomanovih.jpg" alt="Музей дома Романовых" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.841497, 60.614102])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.841497, 60.614102])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей дома Романовых</h3>
                <div class="gallery">
                    <img src="img/MuzeiRomanovih2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiRomanovih3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiRomanovih4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiRomanovih5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiRomanovih6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiRomanovih7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiRomanovih8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiRomanovih9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "искусство"
    },
    {
        type: "Feature",
        id: 13,
        geometry: {
            type: "Point",
            coordinates: [56.843432, 60.606512]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей Страна чудес</strong><br><img src="img/StranaChudes.jpg" alt="Музей Страна чудес" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.843432, 60.606512])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.843432, 60.606512])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей Страна чудес</h3>
                <div class="gallery">
                    <img src="img/StranaChudes2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/StranaChudes3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/StranaChudes4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/StranaChudes5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/StranaChudes6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/StranaChudes7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/StranaChudes8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/StranaChudes9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "искусство"
    },
    {
        type: "Feature",
        id: 14,
        geometry: {
            type: "Point",
            coordinates: [56.846435, 60.624083]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей карикатуры</strong><br><img src="img/Karikatura.jpg" alt="Музей карикатуры" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.846435, 60.624083])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.846435, 60.624083])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей карикатуры</h3>
                <div class="gallery">
                    <img src="img/Karikatura2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/Karikatura3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/Karikatura4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/Karikatura5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/Karikatura6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/Karikatura7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/Karikatura8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/Karikatura9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "архитектура"
    },
    {
        type: "Feature",
        id: 15,
        geometry: {
            type: "Point",
            coordinates: [56.831063, 60.600556]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей военной истории</strong><br><img src="img/BoinIstoria.jpg" alt="Музей военной истории" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.831063, 60.600556])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.831063, 60.600556])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей военной истории</h3>
                <div class="gallery">
                    <img src="img/BoinIstoria2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/BoinIstoria3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/BoinIstoria4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/BoinIstoria5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/BoinIstoria6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/BoinIstoria7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/BoinIstoria8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/BoinIstoria9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 16,
        geometry: {
            type: "Point",
            coordinates: [56.827552, 60.595570]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Уральский геологический музей</strong><br><img src="img/MuzeiGeolog.jpg" alt="Уральский геологический музей" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.827552, 60.595570])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.827552, 60.595570])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Уральский геологический музей</h3>
                <div class="gallery">
                    <img src="img/MuzeiGeolog2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiGeolog3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiGeolog4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiGeolog5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiGeolog6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiGeolog7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiGeolog8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiGeolog9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "архитектура"
    },
    {
        type: "Feature",
        id: 17,
        geometry: {
            type: "Point",
            coordinates: [56.821026, 60.611749]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Центр традиционной народной культуры Среднего Урала</strong><br><img src="img/CultureYrala.jpg" alt="Центр традиционной народной культуры Среднего Урала" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.821026, 60.611749])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.821026, 60.611749])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Центр традиционной народной культуры Среднего Урала</h3>
                <div class="gallery">
                    <img src="img/CultureYrala2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/CultureYrala3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/CultureYrala4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/CultureYrala5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/CultureYrala6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/CultureYrala7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/CultureYrala8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/CultureYrala9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "искусство"
    },
    {
        type: "Feature",
        id: 18,
        geometry: {
            type: "Point",
            coordinates: [56.858845, 60.600817]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей истории, науки и техники Свердловской железной дороги</strong><br><img src="img/JeleznayaDoroga.jpg" alt="Музей истории, науки и техники Свердловской железной дороги" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.858845, 60.600817])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.858845, 60.600817])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей истории, науки и техники Свердловской железной дороги</h3>
                <div class="gallery">
                    <img src="img/JeleznayaDoroga2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/JeleznayaDoroga3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/JeleznayaDoroga4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/JeleznayaDoroga5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/JeleznayaDoroga6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/JeleznayaDoroga7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/JeleznayaDoroga8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/JeleznayaDoroga9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 19,
        geometry: {
            type: "Point",
            coordinates: [56.874552, 60.610349]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей энергетики Урала</strong><br><img src="img/InergiaYrala.jpg" alt="Музей энергетики Урала" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.874552, 60.610349])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.874552, 60.610349])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей энергетики Урала</h3>
                <div class="gallery">
                    <img src="img/InergiaYrala2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/InergiaYrala3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/InergiaYrala4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/InergiaYrala5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/InergiaYrala6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/InergiaYrala7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/InergiaYrala8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/InergiaYrala9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    },
    {
        type: "Feature",
        id: 20,
        geometry: {
            type: "Point",
            coordinates: [56.901646, 60.583502]
        },
        properties: {
            hintContent: '<div style="text-align: center;"><strong>Музей военно-морского флота</strong><br><img src="img/MuzeiFlota.jpg" alt="Музей военно-морского флота" style="width: 300px; height: auto;"></div>',
            balloonContent: `
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.901646, 60.583502])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.901646, 60.583502])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей военно-морского флота</h3>
                <div class="gallery">
                    <img src="img/MuzeiFlota2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiFlota3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiFlota4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiFlota5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiFlota6.jpg" alt="Фото 5" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiFlota7.jpg" alt="Фото 6" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiFlota8.jpg" alt="Фото 7" onclick="showFullscreenImage(this.src)">
                    <img src="img/MuzeiFlota9.jpg" alt="Фото 8" onclick="showFullscreenImage(this.src)">
                </div>
            `
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        },
        category: "история"
    }
];

const eventsData = [
    {
        title: "Выставка OUTвижн",
        description: "В рамках фестиваля наивного искусства и аутсайдер-арта «ИНОЕ/НАИВНОЕ»",
        startDate: "2025-05-16",
        endDate: "2025-06-29",
        price: "400руб - полный билет, 200руб - льготный билет",
        museumId: 7 // Галерея Павла Неганова
    },
    {
        title: "Лекция-диджей-сет",
        description: "дискография FKA twigs и танцевальный перформанс от «OKOLO»",
        startDate: "2025-06-07",
        endDate: "2025-06-07",
        price: "800руб",
        museumId: 7 // Галерея Павла Неганова
    },
    {
        title: "Выставка работ Юрия Волошина",
        description: "9 апреля – 22 июня",
        startDate: "2025-04-09",
        endDate: "2025-06-22",
        price: "200руб",
        museumId: 3 // Музей истории камнерезного и ювелирного искусства
    },
    {
        title: "Выставка огранённых камней",
        description: "22 марта – 31 августа",
        startDate: "2025-03-22",
        endDate: "2025-08-31",
        price: "200руб",
        museumId: 3 // Музей истории камнерезного и ювелирного искусства
    },
    {
        title: "Экспозиция 'Изумрудная комната'",
        description: "20 ИЮЛЯ 2023 — 31 ДЕК. 2025",
        startDate: "2023-07-20",
        endDate: "2025-12-31",
        price: "500руб",
        museumId: 3 // Музей истории камнерезного и ювелирного искусства
    },
    {
        title: "Экспозиция 'Золотая кладовая'",
        description: "20 ИЮЛЯ 2023 — 31 ДЕК. 2025",
        startDate: "2023-07-20",
        endDate: "2025-12-31",
        price: "500руб",
        museumId: 3 // Музей истории камнерезного и ювелирного искусства
    },
    {
        title: "Играем в Квиддич, ДетКвиз, PRO книги, Квест 'Невиртуальная реальность', 'Литературные мультики'",
        description: "1 июня",
        startDate: "2025-06-01",
        endDate: "2025-06-01",
        price: "300руб",
        museumId: 4 // Литературная жизнь Урала ХХ века, музей
    },
    {
        title: "Мастер-класс 'Рисую шоколадом'",
        description: "1 июня, 16:00",
        startDate: "2025-06-01",
        endDate: "2025-06-01",
        price: "Взрослый - 400руб, Льготный - 250руб",
        museumId: 6 // Краеведческий музей имени О.Е.Клера
    },
    {
        title: "Мини-выставка ко Дню защиты детей 'Сказочные герои в значках СССР'",
        description: "1 июня - 30 июня",
        startDate: "2025-06-01",
        endDate: "2025-06-30",
        price: "Взрослый - 400руб, Льготный - 250руб",
        museumId: 6 // Краеведческий музей имени О.Е.Клера
    },
    {
        title: "Выставка Юрия Шерова",
        description: "1 мая - 31 августа",
        startDate: "2025-05-01",
        endDate: "2025-08-31",
        price: "500руб",
        museumId: 8 // Музей Миши Брусиловского
    },
    {
        title: "Выставка Художники Екатеринбурга и Урала",
        description: "18 декабря - идёт",
        startDate: "2024-12-18",
        endDate: "2025-12-31",
        price: "500руб",
        museumId: 8 // Музей Миши Брусиловского
    },
    {
        title: "Выставка Миши Брусиловского",
        description: "18 июля 2024 - идёт",
        startDate: "2024-07-18",
        endDate: "2025-12-31",
        price: "500руб",
        museumId: 8 // Музей Миши Брусиловского
    },
    {
        title: "Встреча в медиалектории 'Владислав Ветлугин и его время'",
        description: "6 июня, 18:00",
        startDate: "2025-06-06",
        endDate: "2025-06-06",
        price: "100-200руб",
        museumId: 11 // Музеи истории Екатеринбурга
    },
    {
        title: "Выставка 'Тот самый Мурзилка'",
        description: "1 июня",
        startDate: "2025-06-01",
        endDate: "2025-06-01",
        price: "100-200руб",
        museumId: 13 // Музей кукол и детской книги "Страна чудес"
    },
    {
        title: "Выставка изделий мастеров народных художественных промыслов и ремёсел Свердловской области 'Береста'",
        description: "7 марта - 15 июня",
        startDate: "2025-03-07",
        endDate: "2025-06-15",
        price: "110 рублей, льготный – 80 рублей",
        museumId: 17 // Центр традиционной народной культуры Среднего Урала
    },
    {
        title: "Выставка 'Про медведя и мужика'",
        description: "5 июня - 7 сентября",
        startDate: "2025-06-05",
        endDate: "2025-09-07",
        price: "110 рублей, льготный – 80 рублей",
        museumId: 17 // Центр традиционной народной культуры Среднего Урала
    },
    {
        title: "Этнографическая выставка 'Под единым шаныраком'",
        description: "5 июня - 24 августа",
        startDate: "2025-06-05",
        endDate: "2025-08-24",
        price: "110 рублей, льготный – 80 рублей",
        museumId: 17 // Центр традиционной народной культуры Среднего Урала
    },
    {
        title: "Выставка 'Вспомним, братцы, про былое…'",
        description: "25 апреля - 15 июня",
        startDate: "2025-04-25",
        endDate: "2025-06-15",
        price: "110 рублей, льготный – 80 рублей",
        museumId: 17 // Центр традиционной народной культуры Среднего Урала
    },
    {
        title: "Выставка 'У Победы наши лица'",
        description: "Посвящена 80-летию Победы в Великой Отечественной войне",
        startDate: "2025-04-30",
        endDate: "2025-06-29",
        price: "Вход свободный",
        museumId: 17 // Центр традиционной народной культуры Среднего Урала
    }
];          

ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
        center: [56.838011, 60.597464],
        zoom: 13
    });

    const objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: false
    });

    filteredMuseums = [...museumData];
    updateMapMarkers();

    myMap.geoObjects.add(objectManager);

    document.querySelectorAll('.rubricator-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            document.querySelectorAll('.rubricator-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            if (category === 'all') {
                filteredMuseums = [...museumData];
            } else {
                filteredMuseums = museumData.filter(museum => museum.category === category);
            }
            
            updateMapMarkers();
        });
    });

    function updateMapMarkers() {
        objectManager.removeAll();
        objectManager.add({
            type: "FeatureCollection",
            features: filteredMuseums
        });
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userCoordinates = [position.coords.latitude, position.coords.longitude];
                addUserMarker(userCoordinates);
            },
            function() {
                alert("Не удалось получить вашу геопозицию.");
            }
        );
    } else {
        alert("Геолокация не поддерживается вашим браузером.");
    }

    function addUserMarker(coordinates) {
        const userPlacemark = new ymaps.Placemark(coordinates, {
            hintContent: "Ваша позиция"
        }, {
            preset: "islands#blueCircleIcon"
        });
        myMap.geoObjects.add(userPlacemark);
        myMap.setCenter(coordinates, 13);
    }

    function removeCurrentRoute() {
        if (currentRoute) {
            myMap.geoObjects.remove(currentRoute);
            currentRoute = null;
            document.getElementById('clear-route-btn').style.display = 'none';
        }
    }

    window.buildRoute = function(destinationCoordinates) {
        myMap.balloon.close();
        objectManager.objects.balloon.close();

        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userCoordinates = [position.coords.latitude, position.coords.longitude];

                removeCurrentRoute();

                const multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [userCoordinates, destinationCoordinates],
                    params: {
                        routingMode: "pedestrian",
                        results: 1
                    }
                }, {
                    boundsAutoApply: true
                });

                myMap.geoObjects.add(multiRoute);
                currentRoute = multiRoute;

                document.getElementById('clear-route-btn').style.display = 'block';

                multiRoute.model.events.add("requestsuccess", function() {
                    const activeRoute = multiRoute.getActiveRoute();
                    if (activeRoute) {
                        const distance = activeRoute.properties.get("distance").text;
                        alert("Расстояние до музея: " + distance);
                    }
                });
            },
            function() {
                alert("Не удалось получить вашу геопозицию.");
            }
        );
    };

    window.buildCarRoute = function(destinationCoordinates) {
        myMap.balloon.close();
        objectManager.objects.balloon.close();
        
        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userCoordinates = [position.coords.latitude, position.coords.longitude];

                removeCurrentRoute();

                const multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [userCoordinates, destinationCoordinates],
                    params: {
                        routingMode: "auto",
                        results: 1
                    }
                }, {
                    boundsAutoApply: true
                });

                myMap.geoObjects.add(multiRoute);
                currentRoute = multiRoute;

                document.getElementById('clear-route-btn').style.display = 'block';

                multiRoute.model.events.add("requestsuccess", function() {
                    const activeRoute = multiRoute.getActiveRoute();
                    if (activeRoute) {
                        const distance = activeRoute.properties.get("distance").text;
                        alert("Расстояние до музея на автомобиле: " + distance);
                    }
                });
            },
            function() {
                alert("Не удалось получить вашу геопозицию.");
            }
        );
    };

    document.getElementById('clear-route-btn').addEventListener('click', function() {
        removeCurrentRoute();
    });

    document.getElementById('show-calendar-btn').addEventListener('click', function() {
        const calendar = document.getElementById('calendar');
        if (calendar.style.display === 'none' || calendar.style.display === '') {
            calendar.style.display = 'block';
            this.textContent = 'Скрыть календарь';
            generateCalendar(currentDate);
        } else {
            calendar.style.display = 'none';
            this.textContent = 'Календарь событий';
        }
    });

    document.getElementById('prev-month-btn').addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    document.getElementById('next-month-btn').addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysContainer = document.getElementById('calendar-days');
    const monthYear = document.getElementById('month-year');

    // Очистить предыдущие дни
    daysContainer.innerHTML = '';

    // Отображение названия месяца и года
    monthYear.textContent = `${date.toLocaleString('ru', { month: 'long' })} ${year}`;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    // Добавить пустые дни до начала месяца
    for (let i = 0; i < firstDay; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        daysContainer.appendChild(dayElement);
    }

    // Добавить дни месяца
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = i;

        const dayDate = new Date(year, month, i);
        const eventsForDay = getEventsForDay(dayDate);

        if (eventsForDay.length > 0) {
            dayElement.classList.add('has-events'); // Добавляем класс для стилизации дней с событиями
            dayElement.title = `Событий: ${eventsForDay.length}`; // Добавляем всплывающую подсказку с количеством событий
        }

        // Добавить обработчик клика для каждого дня
        dayElement.addEventListener('click', function() {
            showEventsForDay(dayDate);
        });

        daysContainer.appendChild(dayElement);
    }
}

   function showEventsForDay(date) {
    const events = getEventsForDay(date);
    const modal = document.getElementById('events-modal');
    const eventsDate = document.getElementById('events-date');
    const eventsList = document.getElementById('events-list');
    
    eventsDate.textContent = `События на ${date.toLocaleDateString('ru-RU')}:`;
    eventsList.innerHTML = '';
    
    if (events.length > 0) {
        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = `${event.title} - ${event.description} (${event.price})`;
            eventsList.appendChild(li);

            li.addEventListener('click', function() {
                console.log("Нажато на событие:", event);
                const museumId = event.museumId;
                const museum = museumData.find(m => m.id === museumId);

                if (museum) {
                    console.log("Найден музей:", museum);
                    closeEventsModal(); // Закрываем модальное окно календаря
                    openMuseumInfo(museum); // Открываем информацию о музее
                } else {
                    console.error("Музей с ID", museumId, "не найден");
                }
            });
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Нет запланированных событий';
        eventsList.appendChild(li);
    }
    
    modal.style.display = 'block';
}

function openMuseumInfo(museum) {
    if (!myMap) {
        console.error("Карта не инициализирована");
        return;
    }

    const placemark = new ymaps.Placemark(museum.geometry.coordinates, {
        hintContent: museum.properties.hintContent,
        balloonContent: museum.properties.balloonContent
    }, {
        iconLayout: museum.options.iconLayout,
        iconImageHref: museum.options.iconImageHref,
        iconImageSize: museum.options.iconImageSize,
        iconImageOffset: museum.options.iconImageOffset
    });

    myMap.geoObjects.add(placemark);
    myMap.setCenter(museum.geometry.coordinates, 15);
    placemark.balloon.open();
}
function closeEventsModal() {
    const modal = document.getElementById('events-modal');
    modal.style.display = 'none';
}

    function getEventsForDay(date) {
    const dateString = date.toISOString().split('T')[0];
    return eventsData.filter(event => {
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
        return date >= startDate && date <= endDate;
    });
}

    // Инициализация календаря с текущей датой
    generateCalendar(currentDate);
}

function showFullscreenImage(src) {
    document.getElementById('full-image').src = src;
    document.querySelector('.fullscreen-image').style.display = 'flex';
}

document.querySelector('.close-events-modal').addEventListener('click', function() {
    document.getElementById('events-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('events-modal')) {
        document.getElementById('events-modal').style.display = 'none';
    }
});

document.getElementById('show-rubricator-btn').addEventListener('click', function() {
    const rubricator = document.getElementById('rubricator');
    if (rubricator.style.display === 'none' || rubricator.style.display === '') {
        rubricator.style.display = 'block';
        this.textContent = 'Скрыть фильтр';
    } else {
        rubricator.style.display = 'none';
        this.textContent = 'Фильтр';
    }
});


