var input = document.getElementById("input")
var button = document.getElementById("Button")
var ul = document.getElementById("startList")

const inputLength = () =>{
    console.log ("HELLO THERE")
    console.log(input.value.length)
    return(input.value.length)

}
const createListItem = () => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

const addToListWithClick = (event) => {
    if (inputLength() > 0) {
        createListItem();
    }
    console.log("hello")
}


button.addEventListener('click',addToListWithClick)