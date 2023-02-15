let arr = [];
let map = new Map();


let updateBtn = document.getElementById('updateBtn');

// updateBtn.addEventListener('click',(e)=>{
//   e.preventDefault();
//   document.getElementById('updatedata').style.display="block";
// })
updateBtn.addEventListener('click', () => {
  document.getElementById('updatedata').style.display = "block";
})
document.getElementById("updatedatabtn").addEventListener("click", (e) => {
  e.preventDefault();
  updatedata();
})


document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault()

  let Name = document.getElementById("nameField").value;
  let email = document.getElementById("mailField").value;
  let password = document.getElementById("passField").value;
  let display = document.getElementById('tablein');



  //validation
  var regName = /^[A-Za-z]+$/;  //regex for name validation
  if (Name === null || Name.match(regName)===null) {
     alert('Please enter valid name');
     return false;
  }

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
    datadisplay += "<tr> <td>" + arr[i].name + "</td>";
    datadisplay += "<td>" + arr[i].email + "</td> </tr>";

  }

  display.innerHTML = datadisplay;
  datagiven(user);
  deletedata(user);
  updatedata(user);
});

//get api
document.getElementById('show-btn').addEventListener('click',triggerAPI);
function triggerAPI() {

  let printValues = [];
  $.ajax({
    url: "http://localhost:3001/fetch",
    type: "GET",
    success: function (result) {
      printValues = result;
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
  $.ajax({
    url: "http://localhost:3001/insert",
    type: "POST",
    data: user,

    success: function (data) {
      console.log('success', data);
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
    },
    error: function (error) {
      console.log(error);
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
    },
    error: function (error) {
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
