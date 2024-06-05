export const map = () => {
  let center = [43.236881, 76.879592];

  function init() {
    let map = new ymaps.Map("map", {
      center: center,
      zoom: 13,
    });

    let placemark = new ymaps.Placemark(
      [43.236881, 76.879592],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "/local/templates/s1/img/pin.png",
        iconImageSize: [50, 40],
        iconImageOffset: [-20, -37],
      }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);
};
