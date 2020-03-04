let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// Redux
function deleteNote(index){
    console.log(index);
}

function renderNotes(){
    setDeleteButtonsEventListeners();
}

//Event Listeners
addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Title : ', addNoteTitle.valueOf, 'Content : ' , addNoteContent.value)
})

function setDeleteButtonsEventListeners(){
    let buttons = document.querySelectorAll('ul#notes li button');

    for (let button of buttons){
        button.addEventListener('click', () => {
            deleteNote(button.dataset.id)
        })
    }
}