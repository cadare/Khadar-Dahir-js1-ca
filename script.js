const url = 'https://rickandmortyapi.com/api/character'
console.log(url)



const resultContainer = document.querySelector('.animate-bottom');


async function getData() {

    try {
        const response = await fetch(url);
        const result = await response.json();

        let loopResult;


        for (let i = 0; i < result.results.length; i++) {
            let newResult = result.results
            loopResult = newResult

        }

        console.log(loopResult)
        resultContainer.innerHTML = "";

        const species = loopResult;

        species.forEach(function (species) {
            resultContainer.innerHTML += `<a href="details.html?id=${species.id}" class="card">
            <div class="container">
            <div class="wrapper">
                                                <div class="image" style="background-image: url(${species.image});"></div>
                                                <div class="details">
                                                    <h4 class="name">${species.name}
                                                    </br>${species.species}
                                                    </br>ID: ${species.id}</h4>  
                                                    </div>
                                                </div>
                                                </div>
                                            </a>`;
        });









    } catch (error) {
        resultContainer.innerHTML = message("error", error);
    }

}

getData()

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";

}