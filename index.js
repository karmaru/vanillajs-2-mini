// let form = document.querySelector('form')
// let userInput = form.querySelector('input')

// document.addEventListener('submit', function(e) {
//     // prevent submit default behavior
//     e.preventDefault()
//      let item = document.createElement('li')
//      item.innerText = document.querySelector('#item')
//      document.querySelector('ul').appendChild(item)
// })

// function addTodo (event) {
//     let todoItem = document.createElement('li')
//     todoItem.innerText = document.getElementById() 
// }

document.querySelector('form').addEventListener
('submit', addTodo)


function addTodo(e) {
    e.preventDefault()

    let item = document.createElement('li')
    let button = document.createElement('button')
    item.innerText = document.querySelector('#item').value
    button.innerText = 'x'
    button.addEventListener('click', removeTodo)
    item.append(button)
    item.addEventListener('click', completedTodo)
    document.querySelector('ul').appendChild(item)
    document.querySelector('#item').value = ''
}

function removeTodo (event) {
    event.target.parentNode.remove()
}

function completedTodo (event) {
    let value = event.target.getAttribute('aria-checked')

    event.target.setAttribute('aria-checked', value === 'true' ? 'false': 'true')
    
    // if (!event.target.getAttribute('aria-checked')) {
    //     event.target.getAttribute('aria-checked') = true;
    // }
    // else {
    //     event.target.getAttribute('aria-checked') = false;
    // }
}

