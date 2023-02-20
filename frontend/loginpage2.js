let arr = [];
let map = new Map();

function imageDisplay(){
  document.getElementById('image').style.display="block";
  document.getElementById('signUp').style.display = "none";
  document.getElementById('deletedata').style.display = "none";
  document.getElementById('update_user').style.display = "none";
  document.getElementById('signin_div').style.display = "none";
  document.getElementsByClassName('myTable')[0].style.display="none";
}

function signUpDisplay(){
  document.getElementById('image').style.display="none";
  document.getElementById('signUp').style.display = "block";
  document.getElementById('deletedata').style.display = "none";
  document.getElementById('update_user').style.display = "none";
  document.getElementById('signin_div').style.display = "none";
  document.getElementsByClassName('myTable')[0].style.display="none";
}

function signInDisplay(){
  document.getElementById('image').style.display="none";
  document.getElementById('signUp').style.display = "none";
  document.getElementById('deletedata').style.display = "none";
  document.getElementById('update_user').style.display = "none";
  document.getElementById('signin_div').style.display = "block";
  document.getElementsByClassName('myTable')[0].style.display="none";
}

function deleteDataDisplay(){
  document.getElementById('image').style.display="none";
  document.getElementById('signUp').style.display = "none";
  document.getElementById('deletedata').style.display = "block";
  document.getElementById('update_user').style.display = "none";
  document.getElementById('signin_div').style.display = "none";
  document.getElementsByClassName('myTable')[0].style.display="none";
}

function updateDataDisplay(){
  document.getElementById('image').style.display="none";
  document.getElementById('signUp').style.display = "none";
  document.getElementById('deletedata').style.display = "none";
  document.getElementById('update_user').style.display = "block";
  document.getElementById('signin_div').style.display = "none";
  document.getElementsByClassName('myTable')[0].style.display="none";

}

function showDataDisplay(){
  document.getElementById('image').style.display="none";
  document.getElementById('signUp').style.display = "none";
  document.getElementById('deletedata').style.display = "none";
  document.getElementById('update_user').style.display = "none";
  document.getElementById('signin_div').style.display = "none";
  document.getElementsByClassName('myTable')[0].style.display="block";
}

document.getElementById("submit-btn").addEventListener('click', toSubmit);
function toSubmit(event){
  event.preventDefault();
  console.log("Hello");
  let Name = document.getElementById("nameField").value;
  let email = document.getElementById("mailField").value;
  let password = document.getElementById("passField").value;


  //frontend validations
  // var regName = /^[A-Za-z]+$/;  //regex for name validation
  // if (Name === null || Name.match(regName)===null) {
  //    alert('Please enter valid name');
  //    return false;
  // }

  // if (email.indexOf('@') <= 0) {
  //   alert('Please enter valid email');
  //   email.focus();
  //   return false;
  // }

  // if (passField.value.length < 5) {
  //   alert('Please enter atleast 5 characters in password');
  //   password.focus();
  //   return false;
  // }
  // else if (map.has(email)) {
  //   alert("existing email")
  // }

  var user = {
    Name,
    email,
    password,
  };

  arr.push(user);

  datagiven(user);
}

//get api
document.getElementById('show-btn').addEventListener('click',triggerAPI);
function triggerAPI(e) {
  e.preventDefault();
  let printValues = [];
  $.ajax({
    url: "http://localhost:3001/fetch",
    type: "GET",
    success: function (result) {
      printValues = result;
      document.getElementsByClassName('myTable')[0].style.display = "block";
      // console.log(result);
      let str = printValues.length > 0 ?
        `<tr class = "header">
        <th> UserID</th>
        <th> Name</th>
        <th> Email</th></tr>`: "";
      printValues.forEach((data) => {
        str += `<tr>
        <td>${data.UserId}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        </tr>`;
      });
      console.log(str);
      const output = document.getElementsByClassName('myTable')[0];
      output.innerHTML = str;
    },

    error: function (error) {
      console.log(error);
    }
  })

}

//post api
function datagiven(user) {
  console.log(user)
  $.ajax({
    url: "http://localhost:3001/insert",
    type: "POST",
    data: user,

    success: function (data) {
    
      if(typeof data === "string"){
        alert(data);
      }
      else{
        console.log('success', data);
      }
      
    },
    error: function (error) {
      console.log(error);
    }
  })
}

//delete api
function deletedata() {
  const userId = (document.getElementById('deleteuserId').value);
  let obj = {
    userId
  };
  console.log(obj)
  $.ajax({
    url: "http://localhost:3001/delete",
    type: "DELETE",
    data: obj,

    success: function (data) {
      console.log('success', data);
      alert(data);
    },
    error: function (error) {
      console.log(error);
      alert(error);
    }
  })
}

//update api
function updatedata() {
  const userId = (document.getElementById('updateuserId').value);
  const name = (document.getElementById('nameField3').value);
  const email = (document.getElementById('mailField3').value);
  const password = (document.getElementById('passField3').value);

  let obj = {
    userId,
    name,
    email,
    password
  };
  console.log(obj);
  $.ajax({
    url: "http://localhost:3001/update",
    type: "POST",
    data: obj,

    success: function (data) {
      console.log('success', data);
      alert(data);
    },
    error: function (error) {
      console.log(error);
      alert(error);
    }
  })
}


// Sign In part

document.getElementById("login2").addEventListener("click", function (event) {
  event.preventDefault()
  let email2 = document.getElementById("mailField2").value;
  let password2 = document.getElementById("passField2").value;

let user = {
  email2,password2
}
//console.log(user);
    $.ajax({
      url: "http://localhost:3001/login",
      type: "POST",
      data: user,

      success: function (data) {
        if(typeof(data)==="string")
        alert(data);
        else{
          let displayData = `Name : ${data.recname} <br> Email: ${data.recemail} `
          document.getElementById('displaydata').innerHTML = displayData;
          deleteDataDisplay();
          updateDataDisplay();
        }
      },
      error: function (error) {
        console.log(error);
      }
    })
});

// console.log(arr);
