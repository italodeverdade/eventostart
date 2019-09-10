window.onload = function () {
    countUpFromTime("Nov 22, 2019 13:00:00", 'event-countdown')
    startBackgroundChanges()
}

function startBackgroundChanges() {
    var element = document.getElementById('header-hero')
    var images = [
        '/assets/images/background-01.jpg',
        '/assets/images/background-03.jpg',
        '/assets/images/background-04.jpg',
        '/assets/images/background-05.jpg',
        '/assets/images/background-06.jpg'
    ]
    var image = images[Math.floor(Math.random() * images.length)];
    element.style = 'background-image: url(' + image + ');'
}

function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);

    var secondsInADay = 60 * 60 * 1000 * 24;

    days = Math.floor(timeDifference / (secondsInADay) * 1);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = Math.abs(days);

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function () { countUpFromTime(countFrom, id); }, 1000);
}