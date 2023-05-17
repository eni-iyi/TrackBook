

if(document.readyState==='loading') {
    document.addEventListener('DOMContentLoaded', render);

}else{
    render();
}


function render() {
    const getAddToSubmitBtn = document.getElementById('submit');
        getAddToSubmitBtn.addEventListener("click", addToSubmit);
}

// addToSubmit to move from the child to the parent div
function addToSubmit(){

    // to get all the data in the collection data
    const title = document.getElementById("title").value;

    // to get the author in the collectionData
    const author = document.getElementById("author").value;

    // to get isbn in the collectionData
    const isbn = document.getElementById("isbn").value;

    // console.log(title, author, isbn);

    // addToSubmit(title, author, isbn);

    // when there are no inputs, pop up required fields
    let required = document.getElementsByClassName("required")[0];

    if(title ==='' || author === '' || isbn ===''){
         required.style.display = "Block"
         function requiuredFunction(){
             required.style.display =""
         }
         setTimeout(requiuredFunction, 1000);
         return;
     }


   // getting the tbody element
    const table = document.querySelector("table");

    // create tr
    const tr = document.createElement("tr");
    // tr.classList.add("data-items");
    const dataItemsContent =` <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button>Remove</button></td>`

    tr.innerHTML = dataItemsContent;
    table.appendChild(tr);

//    removeing unwamted item from the table
    const removeDataSubmitBtn = table.getElementsByTagName("button");
    for(let i = 0; i < removeDataSubmitBtn.length; i++) {
        const dataItemsContent = removeDataSubmitBtn[i];
        dataItemsContent.addEventListener("click", removeDataItems);
    }

   

}

function removeDataItems(e){
    const removeBtn =e.target;
    const decision = confirm("Are you sure you want to remove?");
    console.log(decision, "decision");
    if(!decision) {
        return;
    }
    removeBtn.parentElement.parentElement.remove();
}



// *****************************************************

   

// const checkDarkMode = body.hasAttribute('class')
const bodyTag = document.querySelector('body')
const moon = document.getElementById('moon')

const darkMode = JSON.parse(localStorage.getItem('darkMode'))
console.log(darkMode) 


if(darkMode === 'true'){
    bodyTag.classList.add('darkMode')
    document.getElementsByClassName('moon')[0].classList.add('active')
}


moon.addEventListener('click', ()=>{
    bodyTag.classList.toggle('darkMode')
    document.getElementsByClassName('moon')[0].classList.toggle('active')

    updateState()
})

function updateState(){
    if(bodyTag.classList.contains('darkMode')){
        localStorage.setItem('darkMode', JSON.stringify('true'))
       }else{
        localStorage.setItem('darkMode', JSON.stringify('false'))
       }
}
