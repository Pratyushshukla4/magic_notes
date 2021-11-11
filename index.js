console.log('add notes app');
shownotes();


let addbtn = document.getElementById('btn1');
addbtn.addEventListener("click",function(e){
    let addtext = document.getElementById('notes');

    let notes = localStorage.getItem('notes');
    if(notes==null)
    {
        notesobj = [];
    }
    else
    {
    notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);

    shownotes();
});

function shownotes()
{
    let notes = localStorage.getItem('notes');

    if(notes == null)
    {
        notesobj = [];
    }
    else
    {
    notesobj = JSON.parse(notes);
    }

    let html  = "";

    notesobj.forEach(function(element , index) {

        html += `
        
       
          <div class="card">
          <h2 class="nt">Note ${index+1} </h2>
           <p class="pe">${element}</p>
           <button class="btnele" id="${index}" onclick="deletenote(this.id)">  <a>delete node</a></button>
          </div>
         `
          ;
        
    });

    let noteselm = document.getElementById('card1');
    if(notesobj.length !=0)
    {
        noteselm.innerHTML = html;
    }
}

// --------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>// delete the notes

function deletenote(index)
{
    console.log('i am deleting a note',index);
    let notes = localStorage.getItem('notes');

    if(notes == null)
    {
        notesobj = [];
    }
    else
    {
    notesobj = JSON.parse(notes);
    }

    notesobj.splice(index , 1);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    shownotes();

}


// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>search note

let search = document.getElementById('searchtxt');

search.addEventListener('input',function(){
let inputval = search.value;
console.log('input event is fired',inputval);
let notecard = document.getElementsByClassName('card');
Array.from(notecard).forEach(function(element){
    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    console.log(cardtxt);
    if(cardtxt.includes(inputval))
    {
        element.style.display =  "block";
    }
    else 
    {
        element.style.display =  "none";
    }
})


});