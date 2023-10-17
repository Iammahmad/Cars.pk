function navbar() {
    const nav = document.getElementById("navbar");
    
    if(nav.classList.contains('hide')) {
        nav.classList.remove('hide');
    } else {
        nav.classList.add('hide');
    }
}
function searchBar(){
    const searchBtn = document.getElementById("search-bar")

    if(searchBtn.classList.contains('hide')){
        searchBtn.classList.remove('hide');
    } else {
        searchBtn.classList.add('hide');
    }
}
function search() {
    var input = document.getElementById("search-bar");
    var filter = input.value.toLowerCase();
    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        var carName = cards[i].getElementsByClassName("description")[0].getElementsByTagName("h4")[0].textContent.toLowerCase();
        if (carName.includes(filter)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}