// fethcing json data from json file

var counter1=1;
var counter2=1;
var counter3=1; 

fetch('employees.json')
.then(function(response){
    return response.json();
})
.then(function(employees){
    let placeholder1 = document.getElementById('user-data');
    let output1 = "";
    let placeholder2 = document.getElementById('senior-user-data');
    let output2 = "";
    let placeholder3 = document.getElementById('wfm-user-data');
    let output3 = "";
    for(let user of employees.users){ 
        output1 += `
            <tr>
                <th> ${counter1} </td>
                <td> ${user.firstName} </td>
                <td> ${user.lastName} </td>
                <td> User </td>
                <td><button onclick="delRowFunction(event)" type="button" class="del-btn btn btn-outline-danger btn-sm">Delete</button>
        `;
        placeholder1.innerHTML = output1;
        counter1++;
    }
    for(let user of employees.seniorUsers){ 
        output2 += `
            <tr>
                <th> ${counter2} </td>
                <td> ${user.firstName} </td>
                <td> ${user.lastName} </td>
                <td> User </td>
                <td><button onclick="delRowFunction(event)" type="button" class="del-btn btn btn-outline-danger btn-sm">Delete</button>
        `;
        placeholder2.innerHTML = output2;
        counter2++;
    }
    for(let user of employees.WFMProfessionals){ 
        output3 += `
            <tr>
                <th> ${counter3} </td>
                <td> ${user.firstName} </td>
                <td> ${user.lastName} </td>
                <td> User </td>
                <td><button onclick="delRowFunction(event)" type="button" class="del-btn btn btn-outline-danger btn-sm">Delete</button>
        `;
        placeholder3.innerHTML = output3;
        counter3++;
    }
})

//fetching json data ends

// User search code starts 
document.getElementById('search-user').addEventListener("keyup", (event)=> {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-user");
    filter = input.value.toUpperCase();
    table = document.getElementsByTagName("table");
    console.log('1111', table.length )
    for(let x = 0; x < table.length; x++){
    tr = table[x].getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  });
// search code ends

// delete table row data starts
function delRowFunction() {
    event.target.parentNode.parentNode.style.display="none";
}
// delete table row data ends

//add userr in a table starts
//validation 
let firstInput = document.querySelector("#first-name-input");
let lastInput = document.querySelector("#last-name-input");
let roleInput = document.querySelector("#role-select");
let button = document.querySelector("#add-user-btn");
button.disabled = true;
firstInput.addEventListener("change", stateHandle);
lastInput.addEventListener("change", stateHandle);
roleInput.addEventListener("change", stateHandle);
function stateHandle() {
    if (firstInput.value == '' || lastInput.value == '' || roleInput.value == '') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function addUserFun() {
    if(document.getElementById('role-select').value == '1') {
        let newTableRow = $('#user-data');
        let firstInputName = document.getElementById('first-name-input').value;
        let lastInputName = document.getElementById('last-name-input').value;
        console.log('hala madrid', firstInputName.value, lastInputName.value);
        newTableRow.append(`<tr><th> ${counter1} </td>
        <td> ${firstInputName} </td>
        <td> ${lastInputName} </td>
        <td> User </td>
        <td><button onclick="delRowFunction(event)" type="button" class="del-btn btn btn-outline-danger btn-sm">Delete</button>
        </tr>
        `)
        counter1++
    } 
    else if(document.getElementById('role-select').value == '2') {
        let newTableRow = $('#senior-user-data');
        let firstInputName = document.getElementById('first-name-input').value;
        let lastInputName = document.getElementById('last-name-input').value;
        console.log('hala madrid', firstInputName.value, lastInputName.value);
        newTableRow.append(`<tr><th> ${counter2} </td>
        <td> ${firstInputName} </td>
        <td> ${lastInputName} </td>
        <td> User </td>
        <td><button onclick="delRowFunction(event)" type="button" class="del-btn btn btn-outline-danger btn-sm">Delete</button>
        </tr>
        `)
        counter2++

    } 
    else if(document.getElementById('role-select').value == '3') {
        let newTableRow = $('#wfm-user-data');
        let firstInputName = document.getElementById('first-name-input').value;
        let lastInputName = document.getElementById('last-name-input').value;
        console.log('hala madrid', firstInputName.value, lastInputName.value);
        newTableRow.append(`<tr><th> ${counter3} </td>
        <td> ${firstInputName} </td>
        <td> ${lastInputName} </td>
        <td> User </td>
        <td><button onclick="delRowFunction(event)" type="button" class="del-btn btn btn-outline-danger btn-sm">Delete</button>
        </tr>
        `)
        counter3++
    }
}
//add userr in a table ends