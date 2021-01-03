const todos = [{
    text: 'check blood',
    result: false
}, {
    text: 'check the DNA',
    result: true
}, {
    text: 'check blood prssure',
    result: true
}]

//const paragraphs = document.querySelectorAll('p')

//paragraphs.forEach(function (paragraph) {
   // if (paragraph.textContent.includes('the')) {
       // paragraph.remove()
   // }
//})


const incompleteTodos = todos.filter(function (todo) {
    return todo.result
})
const summary = document.createElement('h2')
summary.textContent = 'this is a new element'
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)

})

// New todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('add new todo')
})

//todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})
