//JS To-Do-Application
//Create an array list to store the activities typed out by the user
var listOfActivities=[];

//Create a DOM variable todolist to get the to-do-activities from HTML form
var input =document.getElementById("input");

//Create DOM variable todolist ul tag 
var toDoList =document.getElementById("todolist");

//Using onclick function to run the click function when button is clicked
document.getElementById("button").onclick=click;

//Adding an activity
function click(){

    //Pushing 
    listOfActivities.push(input.value);
    console.log(listOfActivities);

    //Empty string so the list-items don't stick together
    input.value="";

    //function to show the list items after updating
    showList();
}    

function showList(){
    toDoList.innerHTML="";
    listOfActivities.forEach(function(current_value,index){

        toDoList.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>edit</a>"+
        "<a onclick='deleteItem("+index+")'>&times |</a></li>")
    })
}

function editItem(index){
    var newValue=prompt("Please enter you value");

    listOfActivities.splice(index,1,newValue);

    showList();
}

function deleteItem(index){
    listOfActivities.splice(index,1);

    showList();
}