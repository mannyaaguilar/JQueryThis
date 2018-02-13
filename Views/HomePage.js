function createHomePage(){
    $("body").empty();
    $("body").append(
        '<form>' +
        '<input type="text" id="userName">' +
        '<input type="number" id="userSalary">' +
        '</form>' +

        '<button id="submitBtn">Create Employee</button>' +
        '<button id="nxtBtn">Next Page</button>' +

        '<p id="totalSalary"></p>' +
        '<div id="container"></div>'
    );
}

function createEmployeeNode(){
    //Get contents from text box
    var name = $("#userName").val();
    var salary = $("#userSalary").val();
    //clear out text boxes
    $("#userName").val("");
    $("#userSalary").val("");

    //["Scott", "1600000", "Ted", "1"]
    var newEmployee = {};
    newEmployee.name = name;
    newEmployee.salary = salary;
    employeeArray.push(newEmployee);
    console.log(employeeArray);

    //Create the container to write the info to
    $("#container").append("<div></div>");
    //DOM Traversal (Walking the DOM)
    var el = $("#container").children().last();
    el.append("<p>" + name + "</p>");
    el.append("<p>" + salary + "</p>");
    el.append("<button class='deleteBtn'>Delete</button>");
}