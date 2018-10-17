ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [57.99889405, 56.29376886],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [57.99889405, 56.29376886]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Home'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon'
        });

    myMap.geoObjects
        .add(myGeoObject);
});