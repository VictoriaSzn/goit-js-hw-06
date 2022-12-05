const categories = document.querySelector('#categories');
const categChild = categories.children.length;
console.log('Number of categories:', categChild);

const categLl = document.querySelectorAll('.item');
for (let i = 0; i < categLl.length; i += 1) {
    console.dir(categLl[i].firstElementChild.textContent);
    console.log(categLl[i].lastElementChild.children.length);
}