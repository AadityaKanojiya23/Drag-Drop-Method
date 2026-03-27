let lists = document.querySelectorAll('.list')
let rightbox = document.querySelector('#right')
let leftbox = document.querySelector('#left')

let selected = null;

lists.forEach((list) => {
    list.addEventListener('dragstart', (e) => {
        selected = e.target;
    });
});


rightbox.addEventListener('dragover', (e) => {
    e.preventDefault();
    
/*Browser by default kisi bhi element me drop allow nahi karta.

Agar tu preventDefault() nahi lagayega, toh drop event properly kaam nahi karega.

Easy language:

Ye browser ko bolta hai:

“Is area me drop allow karo.”*/


});

rightbox.addEventListener('drop', () => {
    if (selected) {
        rightbox.appendChild(selected);
        selected = null;
    }
});


leftbox.addEventListener('dragover', (e) => {
    e.preventDefault();
});

leftbox.addEventListener('drop', () => {
    if (selected) {
        leftbox.appendChild(selected);

       /* appendChild() ek JavaScript DOM method hai jo kisi element ko kisi parent element ke andar last position par add (ya move) karta hai.
        Ye element ko copy nahi karta, balki usse ek jagah se uthake doosri jagah shift karta hai. */

        selected = null;
    }
});