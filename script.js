const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");



addBtn.addEventListener(
    "click",
    function() {
        addNote()
    }
)

const addNote = () => {
    const  note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class=" save fas fa-save"></i>
    <i class=" trash fas fa-trash"></i>
     </div>
     <textarea ></textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
        }
    ) 

    const saveNotes = () => {
        const notes = document.querySelectorAll(".note textarea");
        const data = [];
    
        notes.forEach(
            (note) => data.push(note.value)
        )
         localStorage.setItem("notes", JSON.stringify(data))
    }

    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    ) 
    main.appendChild(note);
}