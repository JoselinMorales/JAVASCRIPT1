const list = document.createElement('ul'); 
const info = document.createElement('p');
const html = document.querySelector('html'); 

info.textContent= 'l  Lorem ipsum dolsit tempora optio perferendis doloribus fuga, voluptate maiores, cupiditate dicta aspernatur molestiae dolorem ipsa vero eveniet enim.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('favorite color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function (event) {
        event.stopPropagation();
        const listContent = prompt('change your color');
        this.textContent = listContent;
    };
        
  
}