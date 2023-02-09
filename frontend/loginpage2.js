let arr = [];
let map = new Map();
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault()

  let Name = document.getElementById("nameField").value;
  let email = document.getElementById("mailField").value;
  let password = document.getElementById("passField").value;
  let display = document.getElementById('tablein');

  //validation
  if (email.indexOf('@') <= 0) {
    alert('Please enter valid email');
    email.focus();
    return false;
  }

  if (passField.value.length < 5) {
    alert('Please enter atleast 5 characters in password');
    password.focus();
    return false;
  }
  else if (map.has(email)) {
    alert("existing email")
  }

  let user = {
    name: Name,
    email: email,
    password: password,
  };
  //console.log(user);

  map.set(email, password);
  //console.log(map);
  arr.push(user);

  let datadisplay = "";
  for (let i = 0; i < arr.length; i++) {
    datadisplay += "<tr> <td>" + arr[i].Name + "</td>";
    datadisplay += "<td>" + arr[i].email + "</td> </tr>";

  }

  display.innerHTML = datadisplay;

  //triggerAPI();
  datagiven(user);
});

function triggerAPI() {
  $(document).ready(function () { 
    $.ajax({
      url: "http://localhost:3001/fetch",
      type: "GET",
      success: function (result) {
        console.log(result);
      },

      error: function (error) {
        console.log(error);
      }
    })
    console.log(user);

  })
}

function datagiven(user){
  $.ajax({
    url : "http://localhost:3001/insert",
    type : "POST",
    data : user,

    success: function(data){
      console.log('success', data);
    },
    error: function(error){
      console.log(error);
    }

  })
}

// Sign In part

document.getElementById("login2").addEventListener("click", function (event) {
  event.preventDefault()
  let email2 = document.getElementById("mailField2").value;
  let password2 = document.getElementById("passField2").value;
  // console.log(email2);
  // console.log(password2);

  let result = false;

  for (let i = 0; i < arr.length; i++) {
    if (email2 === arr[i].email && password2 === arr[i].password) {
      result = true;
    }
  }
  if (result == true) {
    alert("Successfully logged in");
  } else {
    alert("Invalid credentials");
  }

});

// console.log(arr);