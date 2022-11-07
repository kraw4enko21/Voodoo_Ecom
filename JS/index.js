const array = document.querySelectorAll('select')
array.forEach((item) => {
    const local = item.querySelectorAll('option')
    const itemClass = item.className
    const localArray = []
    local.forEach((item) => localArray.push(item.innerText))
    const select = document.createElement('select')
    select.classList.add('container__input')
    select.classList.add(itemClass)
    const a = localArray.map((item, i) => {
        if (i === 0) {
            return `<option class='option' value="${item}" selected disabled>${item}</option>`
        } else {
            return `<option class='option' value="value" >${item}</option>`
        }
    })
    select.innerHTML = a
    item.after(select)
    item.classList.add('hide')
})

// function initMap() {
//     // The location of Uluru
//     const uluru = {
//         lat: 50.45039877766932,
//         lng: 30.444519259180446
//     };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 15,
//         center: uluru,
//         streetViewControl: false,
//         panControl: false,
//         zoomControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//         streetViewControl: false,
//         overviewMapControl: false,
//         rotateControl: false
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//         icon: './img/Vector.png'
//     });
//     const contentString =
//         '<h1 class="maps__title">Voodoo</h1>' +
//         '<p class="maps__subtitle">137 Glasgow St., Unit 115 <br> Kitchener, ON N2G 4X8 <br>Ukraine</p>' +
//         '<div class="maps__block"><img src="./img/Shape.png" alt="1"> <p class="maps__text">1-800-480-9597</p></div>' +
//         '<div class="maps__block"><img src="./img/mail.png" alt="2"> <p class="maps__text">info@voodoo.com</p></div>'

//     const infowindow = new google.maps.InfoWindow({
//         content: contentString,
//         ariaLabel: uluru,
//     });
//     infowindow.open(map, marker)
// }

// window.initMap = initMap;