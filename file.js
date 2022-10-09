// // default Date 

// let date = new Date();
// let day = date.getDate();
// let month = date.getUTCMonth();
// let year = date.getFullYear();
// // console.log(day, month+1, year);

// console.log(allDate);
// let presentDate = document.getElementById("addDate");

// presentDate.value = allDate;

let menu = document.getElementById("menu");

function show(){
    menu.style.top = "0%";
}
function hide(){
    menu.style.top = "-150vh";
}

let minus = document.querySelector('.upper-left');
let added = document.querySelector('.upper-right');
minus.addEventListener('click', () => {
    minus.classList.add('active');
    added.classList.remove('active');
});

added.addEventListener('click', () => {
    added.classList.add('active')
    minus.classList.remove('active');
})

//to select the entry type "minus or plus"

let minusEntry = document.querySelector("#addAmt-minus");
let addedEntry = document.querySelector("#addAmt");

function showMinus(){
    minusEntry.style.display = "block";
    addedEntry.style.display = "none";
}
function showPlus(){
    addedEntry.style.display = "block";
    minusEntry.style.display = "none";
}

// To get the objects from localStorage for ADD entry
function showEntry(){
    let allEntry;

    let entry = localStorage.getItem('entry');
    if(entry === null) {
        allEntry = [];
    }else{
        allEntry = JSON.parse(entry);
    }

    let notesContainer = document.getElementById("notes");
    notesContainer.innerHTML = '';
    allEntry.forEach((note, index) => {
            entryToBeShown = `
            <div class="entryCard">
                <div class="box1">
                    <p class="date">${note.date}</p>
                </div>
                <div class="box2">
                    <p>${note.desc}</p>
                </div>
                <div class="box3">
                    <p class="find">${note.name}</p>
                </div>
                <div class="box4">
                    <span class="totalPriceNegative">${note.AmtMinus}</span>
                </div>
                <div class="box5">
                    <span class="totalPricePositive">${note.Amt}</span>
                </div>
                <div class="box6">
                    <button onclick="deleteEntry(${index})">Delete</button>
                </div>
            </div>
            `
            notesContainer.innerHTML = notesContainer.innerHTML + entryToBeShown;
    });

    let total = 0.00;
    let totalNeg = 0.00;
    let outputPositive = document.getElementById("positive")
    let outputNegative = document.getElementById("negative")
    let balanceAmt = document.getElementById("balanceAmt")


    allEntry.forEach(item => {
    total = total + Number(item.Amt);
});
    outputPositive.innerHTML = total;



    allEntry.forEach(items => {
        totalNeg = totalNeg + Number(items.AmtMinus);
    });
    outputNegative.innerHTML = totalNeg;

    balanceAmt.innerHTML = total - totalNeg;
}






showEntry();

 
// To set the objects in localStorage for ADD entry
let addEntryBtn = document.getElementById("addBtn");

addEntryBtn.addEventListener('click', ()=>{
    let allEntry;

    let entry = localStorage.getItem('entry');
    if(entry === null) {
        allEntry = [];
    }else{
        allEntry = JSON.parse(entry);
    }
    let name = document.getElementById("addName");
    let Amt = document.getElementById("addAmt");
    let AmtMinus = document.getElementById("addAmt-minus");
    let desc = document.getElementById("addTxt");
    let date = document.getElementById("addDate");

    let newEntryObj = {
        name : name.value,
        Amt : Amt.value,
        AmtMinus : AmtMinus.value,
        desc : desc.value,
        date : date.value
    }
    allEntry.push(newEntryObj);
    localStorage.setItem('entry', JSON.stringify(allEntry));
    name.value = '';
    Amt.value = '';
    AmtMinus.value = '';
    desc.value = '';
    date.value = '';
    showEntry();
})

// To delete the objects from localStorage for ADD entry

function deleteEntry(noteIndex){
    let allEntry = JSON.parse(localStorage.getItem('entry'));
    allEntry.splice(noteIndex, 1)
    localStorage.setItem("entry", JSON.stringify(allEntry));
    showEntry();
}




// To Search the contents from elemenets

let search = document.getElementById("search");
search.addEventListener("input", function(){
    let inputVal = search.value;
    console.log(inputVal);
    let entryCard = document.getElementsByClassName("entryCard");
    Array.from(entryCard).forEach(function(note){
        let entryTxt = note.getElementsByClassName("find")[0].innerText;
        if(entryTxt.includes(inputVal)){
            note.style.display = "flex";
        }else{
            note.style.display = "none";
        }
    })
})




// to add positive all prices



// var sum = 0;
// $('.totalPricePositive').each(function()
// {
//     sum += parseFloat($(this).innerText);
// });
// alert(sum);






// To get the objects from localStorage for MINUS entry
// function showEntryMinus(){
//     let allEntryMinus;

//     let entryMinus = localStorage.getItem('entryMinus');
//     if(entryMinus === null) {
//         allEntryMinus = [];
//     }else{
//         allEntryMinus = JSON.parse(entryMinus);
//     }

//     let notesContainer = document.getElementById("notes");
//     notesContainer.innerHTML = '';
//     allEntryMinus.forEach((noteMinus, index) => {
//             entryToBeShownMinus = `
//             <div class="entryCard">
//                 <div class="box1">
//                     <p class="date">${noteMinus.dateMinus}</p>
//                 </div>
//                 <div class="box2">
//                     <p>${noteMinus.descMinus}</p>
//                 </div>
//                 <div class="box3">
//                     <p id="dateOutput">${noteMinus.nameMinus}</p>
//                 </div>
//                 <div class="box4">
//                     <p></p>
//                 </div>
//                 <div class="box5">
//                     <p>${noteMinus.AmtMinus}</p>
//                 </div>
//                 <div class="box6">
//                     <button onclick="deleteEntry(${index})">Delete</button>
//                 </div>
//             </div>
//             `
//             notesContainer.innerHTML = notesContainer.innerHTML + entryToBeShownMinus;
//     });

// }



// showEntryMinus();

 
// // To set the objects in localStorage for MINUS entry
// let addEntryBtnMinus = document.getElementById("addBtn");

// addEntryBtnMinus.addEventListener('click', ()=>{
//     let allEntryMinus;

//     let entryMinus = localStorage.getItem('entryMinus');
//     if(entryMinus === null) {
//         allEntryMinus = [];
//     }else{
//         allEntryMinus = JSON.parse(entryMinus);
//     }
//     let nameMinus = document.getElementById("addName-minus");
//     let AmtMinus = document.getElementById("addAmt-minus");
//     let descMinus = document.getElementById("addTxt-minus");
//     let dateMinus = document.getElementById("addBtn-minus");

//     let newEntryObjMinus = {
//         nameMinus : nameMinus.value,
//         AmtMinus : AmtMinus.value,
//         descMinus : descMinus.value,
//         dateMinus : dateMinus.value
//     }
//     allEntryMinus.push(newEntryObjMinus);
//     localStorage.setItem('entryMinus', JSON.stringify(allEntryMinus));
//     nameMinus.value = '';
//     AmtMinus.value = '';
//     descMinus.value = '';
//     dateMinus.value = '';
//     showEntryMinus();
// })

// // To delete the objects from localStorage for MINUS entry

// function deleteEntry(noteIndex){
//     let allEntry = JSON.parse(localStorage.getItem('entry'));
//     allEntry.splice(noteIndex, 1)
//     localStorage.setItem("entry", JSON.stringify(allEntry));
//     showEntryMinus();
// }






































// let addBtn = document.getElementById("addBtn");
// let addBtnMinus = document.getElementById("addBtn-minus");

// let notes = document.getElementById("notes");

// addBtn.onclick = function() {
//     let addName = document.getElementById("addName").value;
//     let addAmt = document.getElementById("addAmt").value;
//     let addTxt = document.getElementById("addTxt").value;
//     let addDate = document.getElementById("addDate").value;
//     let entryCard = document.createElement("div");
//     entryCard.classList.add("entryCard");
//     notes.appendChild(entryCard);
//     let box1 = document.createElement("div");
//     box1.classList.add("box1");
//     let para1 = document.createElement("p");

//     let box2 = document.createElement("div");
//     box2.classList.add("box2");
//     let para2 = document.createElement("p");

//     let box3 = document.createElement("div");
//     box3.classList.add("box3");
//     let para3 = document.createElement("p");

//     let box4 = document.createElement("div");
//     box4.classList.add("box4");
//     let para4 = document.createElement("p");

//     let box5 = document.createElement("div");
//     box5.classList.add("box5");
//     let para5 = document.createElement("p");

//     let box6 = document.createElement("div");
//     box6.classList.add("box6");
//     let deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
    
    
//     entryCard.appendChild(box1);
//     entryCard.appendChild(box2);
//     entryCard.appendChild(box3);
//     entryCard.appendChild(box4);
//     entryCard.appendChild(box5);
//     entryCard.appendChild(box6);
//     box1.appendChild(para1);
//     box2.appendChild(para2);
//     box3.appendChild(para3);
//     box4.appendChild(para4);
//     box5.appendChild(para5);
//     box6.appendChild(deleteBtn);

//     para1.innerHTML = addDate;
//     para2.innerHTML = addTxt;
//     para3.innerHTML = addName;
//     para4.innerHTML = "";
//     para5.innerHTML = addAmt;
    
    
//     // console.log(addTxt, typeof);
    
    
    
    
    
//     menu.style.top = "-150vh";
// }



// addBtnMinus.onclick = function() {
//     let addNameminus = document.getElementById("addName-minus").value;
//     let addAmtminus = document.getElementById("addAmt-minus").value;
//     let addTxtminus = document.getElementById("addTxt-minus").value;
//     let addDateminus = document.getElementById("addDate-minus").value;
//     let entryCard = document.createElement("div");
//     entryCard.classList.add("entryCard");
//     notes.appendChild(entryCard);
//     let box1 = document.createElement("div");
//     box1.classList.add("box1");
//     let para1 = document.createElement("p");

//     let box2 = document.createElement("div");
//     box2.classList.add("box2");
//     let para2 = document.createElement("p");

//     let box3 = document.createElement("div");
//     box3.classList.add("box3");
//     let para3 = document.createElement("p");

//     let box4 = document.createElement("div");
//     box4.classList.add("box4");
//     let para4 = document.createElement("p");

//     let box5 = document.createElement("div");
//     box5.classList.add("box5");
//     let para5 = document.createElement("p");

//     let box6 = document.createElement("div");
//     box6.classList.add("box6");
//     let deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
    
    
//     entryCard.appendChild(box1);
//     entryCard.appendChild(box2);
//     entryCard.appendChild(box3);
//     entryCard.appendChild(box4);
//     entryCard.appendChild(box5);
//     entryCard.appendChild(box6);
//     box1.appendChild(para1);
//     box2.appendChild(para2);
//     box3.appendChild(para3);
//     box4.appendChild(para4);
//     box5.appendChild(para5);
//     box6.appendChild(deleteBtn);

//     para1.innerHTML = addDateminus;
//     para2.innerHTML = addTxtminus;
//     para3.innerHTML = addNameminus;
//     para4.innerHTML = addAmtminus;
//     para5.innerHTML = "";


//     // console.log(addTxt, typeof);





//     menu.style.top = "-150vh";
// }














































// If user add a entry add it to the localStorage


// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener('click', function(e) {

//     const all = {
//         addName: document.getElementById("addName").value,
//         addAmt: document.getElementById("addAmt").value,
//         addTxt: document.getElementById("addTxt").value,
//         addDate: document.getElementById("addDate").value,
        
//     }    
//      let notes = localStorage.getItem("notes")    

//     if(notes == null){
//         notesObj = [];
//     }else{
//         notesObj = JSON.parse(notes);
//     }
//     notesObj.push(all);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     all.value = "";
//     console.log(all);
//     showNotes();
// })

// function showNotes() {
//     let notes = localStorage.getItem("notes");
//     if(notes == null){
//         notesObj = [];
//     }else{
//         notesObj = JSON.parse(notes);
//     }
//     let html = "";
//     // notesObj.toString();
//     notesObj.forEach(function(element) {
//         html += `
//                  <div class="entryCard">
//                      <div class="box1">
//                          <p> ${element[1]}</p>
//                      </div>
//                      <div class="box2">
//                          <p></p>
//                      </div>
//                      <div class="box3">
//                          <p id="dateOutput"></p>
//                      </div>
//                      <div class="box4">
//                          <p></p>
//                      </div>
//                      <div class="box5">
//                          <p></p>
//                      </div>
//                      <div class="box6">
//                          <button onclick="deleteNote(this.id)">Delete</button>
//                      </div>
//                  </div>
//         `
//     });
//     let noteElm = document.getElementById('notes');
//     if(notesObj.length != 0) {
//         noteElm.innerHTML = html;
//     }else{
//         noteElm.innerHTML = `Nothing to show`;
//     }
// }

















// to send the minus entry data to localStorage

// const addEntryMinus = e => {
//     let minusFormData = {
//         addNameminus: document.getElementById("addName-minus").value,
//         addAmtminus: document.getElementById("addAmt-minus").value,
//         addTxtminus: document.getElementById("addTxt-minus").value,
//         addDateminus: document.getElementById("addDate-minus").value
//     }
//     localStorage.setItem('minusFormData',JSON.stringify(minusFormData));
//     console.log(localStorage.getItem('minusFormData'));
//     e.preventDefault();
// }


// // to get output from localStorage


// function dispData() {
//     // console.log(JSON.parse(localStorage.getItem('minusFormData')));
//     if(localStorage.getItem('minusFormData')){
//         let { addNameminus, addAmtminus, addTxtminus, addDateminus } = JSON.parse(localStorage.getItem('minusFormData'));
//     var output = document.getElementById("output");
//     output.innerHTML = `
//         <div class="entryCard">
//             <div class="box1">
//                 <p> ${addDateminus}</p>
//             </div>
//             <div class="box2">
//                 <p>${addTxtminus}</p>
//             </div>
//             <div class="box3">
//                 <p id="dateOutput">${addNameminus}</p>
//             </div>
//             <div class="box4">
//                 <p>- ${addAmtminus}</p>
//             </div>
//             <div class="box5">
//                 <p></p>
//             </div>
//             <div class="box6">
//                 <button>Delete</button>
//             </div>
//         </div>
//     `
//     }
// }
// dispData();






























// // if user adds a entry, add it to localStorage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener('click', function(e){
//     let addTxt = document.getElementById("addTxt");
//     let notes = localStorage.getItem("notes");
//     if (notes == null){
//         notesObj = [];
//     }else{
//         notesObj = JSON.parse(notes);
//     }
//     notesObj.push(addTxt.value);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     addTxt.value = "";
//     showNotes();
// })

// // Function to show elements from localStorage

// function showNotes() {
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     let html = "";
//     notesObj.forEach(function (element, index) {
//         html += `
//         <div class="entryCard">
//                     <div class="box1">
//                         <p></p>
//                     </div>
//                     <div class="box2">
//                         <p> ${element}</p>
//                     </div>
//                     <div class="box3">
//                         <p id="dateOutput"></p>
//                     </div>
//                     <div class="box4">
//                         <p></p>
//                     </div>
//                     <div class="box5">
//                         <p></p>
//                     </div>
//                     <div class="box6">
//                         <button id="${index}" onclick="deleteNote(this.id)">Delete</button>
//                     </div>
//                 </div>
//         `;
//     });
//     let notesElm = document.getElementById("notes");
//     if(notesObj.length != 0){
//         notesElm.innerHTML = html;
//     }else{
//         notesElm.innerHTML = `Nothing to show! Use "ADD ENTRY" above to add Entries`;
//     }
// }



// // function to delete a Note

// function deleteNote(index){

//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
    
//     notesObj.splice(index, 1);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     showNotes();
// }

