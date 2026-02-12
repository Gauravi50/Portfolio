var tablinks = document.getElementsByClassName("tab-links");
var tabcontainers = document.getElementsByClassName("tab-container");

function opentab(tabname, event){
    for (let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for (let tabcontainer of tabcontainers){
        tabcontainer.classList.remove("active-tab");
    }

    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

    

const scriptURL= 'https://script.google.com/macros/s/AKfycby3bkQYLkprGvq2-jWl7e8eix0_id4mlFKH7q-SSZ3ekjNZtvk8YjmWsxN3om9RVcuoAg/exec'

const form = document.forms ['submit to google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method:'POST', body: new FormData(form)})

.then(response => {
    msg.innerHTML = "Message set successfully"
    setTimeout(function(){
        msg.innerHTML= ""
     
    },5000)
    form.reset()
})

.catch(error => console.error('Error!', error.message))

})
