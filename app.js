var employeeArray = [];

$(document).ready(function(){
        init();
});

//start the application
function init(){
    createHomePage();
    enable();

}
//start all the event listeners
function enable(){

    //********BAD CODE(DRAW A LINE IN THE SAND)***************
    // $("#submitBtn").click("click", function(){
    //
    // }) does not allow for Dynamic Content creation
    //*******************BAD CODE*****************************

   $("#submitBtn").on("click", function(){
       createEmployeeNode();
       //'this' changes content, depending on where it is in the code(local to where it is in the code).
       //'this' inside an event listener is the element that caused the event to happen
       //jquery supercharges elements
   });

    $("#nxtBtn").on("click", function() {
        createSecondPage();
    });

   $("#container").on("click", ".deleteBtn", function (){
       console.log("Woof");
       console.log(this);//Regular html element
       console.log($(this));//supercharged element
       $(this).parent().children().remove();
       //$(this).parent().remove();
       //$(this).parent().children().first().remove();

       //console.log($(this).siblings());
   });
}








