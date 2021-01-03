const notes = [{
        title: 'my first name',
        body: 'I like priya'
}, {
        title: 'my middle name',
        body: 'I like sanjiv'
}, {
        title: 'my last name',
        body: 'I like patil'

}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    Document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('body').appendChild(noteEl)
    })
    
}


renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'button clicked'
})

document.querySelector('#remove-all') [1].addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })

    //console.log('Delete the note')
})

    document.querySelector('#rsearch-text) [1].addEventListener('input', function () {
        filters.searchText = e.target.value
        renderNotes(notes, filters)
})

//const p = document.querySelector('p')
//console.log(p)
//p.remove()

//query all and remove
//const ps = document.querySelectorAll('p')

//ps.forEach(function (p) {
   // p.textContent = '*****'
    //console.log(p.textContent)
    //p.remove()
//})

//add new element
//const newParagraph = document.createElement('p')
//newParagraph.textContent = 'this is a new element'
//document.querySelector('body').appendChild(newParagraph)