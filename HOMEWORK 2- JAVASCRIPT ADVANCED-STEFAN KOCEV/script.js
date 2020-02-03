let btn = document.querySelector(`#btn`);
let tbody = document.querySelector(`tbody`)
let body = document.querySelector(`body`)
let showPlanets = function (url) {

    $.ajax({
        url: `${url}`,
        success: function (data) {
            planets(data)
        },
        error: function (error) {
            console.log(error)
        }
    })
}

let planets = data => {
    tbody.innerHTML = ``;
    for (let i = 0; i < data.results.length; i++) {
        tbody.innerHTML += `<tr>
        <td>${data.results[i].name}</td>
        <td> ${data.results[i].population}</td>
        <td> ${data.results[i].climate}</td>
        <td> ${data.results[i].gravity}</td>
        </tr>`
    }
}

btn.addEventListener(`click`, function () {
    btn.style.visibility = `hidden`;
    showPlanets(`https://swapi.co/api/planets/?format=json&page=1`);
    let nextButton = document.createElement(`button`)
    body.appendChild(nextButton)
    nextButton.innerHTML = `Next 10 Planets`
    nextButton.addEventListener(`click`, function () {
        nextButton.style.visibility = `hidden`;
        showPlanets(`https://swapi.co/api/planets/?format=json&page=2`);
        let previousButton = document.createElement(`button`);
        previousButton.innerHTML = `Previous 10 Planets`;
        body.appendChild(previousButton);
        previousButton.addEventListener(`click`, function(){
            showPlanets(`https://swapi.co/api/planets/?format=json&page=1`)
            body.removeChild(previousButton)
            nextButton.style.visibility = 'visible';
        })
    })
})


