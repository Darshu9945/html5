//traversing dom
// var itemlist = document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = 'green'
// console.log(itemlist.parentNode.parentNode)
// itemlist.parentNode.parentNode.style.backgroundColor = 'pink'

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'green'
// console.log(itemlist.parentElement.parentElement)
// itemlist.parentElement.parentElement.style.backgroundColor = 'pink'
// console.log(itemlist.childNodes)
// console.log(itemlist.children)

// itemlist.firstElementChild.textContent='sharpener'
// console.log(itemlist.firstElementChild)
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.style.fontWeight='bold'
// console.log(itemlist.nextSibling)
// console.log(itemlist.nextElementSibling)
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color='red'

//creat lastElementChild
var newDiv = document.createElement('div');

console.log(newDiv)

newDiv.className='hello'

newDiv.id='darshan'

newDiv.title='gurukiran'

var k1=document.createTextNode('helloworld')

newDiv.appendChild(k1)

var contain= document.getElementById('items');

var h2 = document.getElementById('kb')

contain.insertBefore (newDiv,h2)