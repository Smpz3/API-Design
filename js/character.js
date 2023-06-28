const characterSection = document.querySelector('#characterView');

const valoresUrl = window.location.search;
const urlParams = new URLSearchParams(valoresUrl);

let id = urlParams.get('id');
if (!id) {
    window.location.href = 'index.html';
}
const urlCharacter = url + '/' + id;



async function getCharacter(pUrl) {
    //consult the API.
    try {
        let data = await getData(pUrl);
        printCharacter(data, characterSection);
    } catch (pErr) {
        console.log(pErr);
    }
}




function printCharacter(pCharacter, pDom) {
    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = pCharacter.name;
    const hr = document.createElement('hr');

    const div = document.createElement('div');
    div.classList.add('row');

    div.innerHTML = ` <figure class="col">
                            <img src="${pCharacter.image}">
                        </figure>
                        <ul class="col">
                            <li>Status: ${pCharacter.status}</li>
                            <li>Gender: ${pCharacter.gender}</li>
                        </ul>`;
    pDom.append(h3, hr, div);
}

getCharacter(urlCharacter);