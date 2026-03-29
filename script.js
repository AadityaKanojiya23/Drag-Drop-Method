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


        selected = null;
    }
});
