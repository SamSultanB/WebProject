"use strict";

let button = document.getElementById('choose');
let dolist = document.getElementById('sortOFbeer')


button.addEventListener('click', function() {
    fetch('https://random-data-api.com/api/v2/beers')
    .then(response => {
        return response.json();
        })
        .then(user => {
          console.log(user)
          dolist.innerHTML = user.name;
        }).catch(e => console.log(e))
})






