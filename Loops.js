//this is the array
const library = [
    "A court of thorns and roses",
    "After Dark",
    "Peter rabbit",
    "Fourth wing",
    "Last dance",
    "Hells Bells ",
    "For whom the bell tolls"
];

function searchBook() {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let searchResult = document.getElementById('searchResults');
    searchResult.innerHTML = "";

    let foundBooks = [];

    for (let i = 0; i < library.length; i++){
        if(library[i].toLowerCase().includes(searchInput)){
            foundBooks.push(library[i]);
        }
    }

    if (foundBooks.length > 0){
        for (let i = 0; i < foundBooks.length; i++){
            let bookInfo = document.createElement('p');
            bookInfo.textContent = foundBooks[i];
            searchResult.appendChild(bookInfo);
        }
    }
    else{ 
        let noResultMsg = document.createElement('p');
        noResultMsg.textContent='No matching books found.';
        searchResult.appendChild(noResultMsg);
    }
}

