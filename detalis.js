const detailContainer = document.querySelector(".animate-bottoms");




const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://rickandmortyapi.com/api/character/" + id;
console.log(url)





async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
        detailContainer.innerHTML = "";
        createHtml(details);

        function createHtml(details) {
            detailContainer.innerHTML = `<h1>${details.name}</h1>
                                        <div class="details-image" 
                                            style="background-image: url('${details.image}')"></div>
                                        <div class="details-description">Status: ${details.status}</br> Species: ${details.species} </br>Id: ${details.id}</div>
                                        <time class="details-date">Created: ${details.created}</time>`;
        }



    } catch (error) {
        console.log('this a Error');
        detailContainer.innerHTML = message("error", error);
    }


}

fetchGame();


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";

}