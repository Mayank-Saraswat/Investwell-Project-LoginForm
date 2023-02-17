const { serviceFetchData, serviceInsertData, serviceUpdateData, serviceDeleteData, serviceCheckData } = require('../Services/userServices');
const path = require("path");

const displayForm = (req, res) => {
  // console.log('show form');
  res.sendFile(path.join(__dirname, "..", "..", "/frontend/index.html"));
}

const controlFetchData = async (req, res) => {
  // return serviceFetchData();

  //console.log(req.headers);
  
  // serviceFetchData().then((data)=>{
  //   res.send(data);
  // })
  const result = await serviceFetchData();
  res.send(result);
}

const controlInsertData = (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  return serviceInsertData(newUser);
}

const controlUpdateData = (req, res) => {
  const newData = req.body;
  return serviceUpdateData(newData);
}

const controlDeleteData = (req, res) => {
  const id = req.body;
  console.log(id);
  return serviceDeleteData(id);
}

const controlCheckData = async (req, res) => {
  const checkUserData = req.body;
  const result = await serviceCheckData(req.body);
  //console.log("Control Result ",result)
  //console.log("Control userData",checkUserData);
  // console.log(result);
  if(result.length == 0){           //backend validations
    res.send("No user found");
  }
  else if(checkUserData.email2 === result[0].email && checkUserData.password2 === result[0].password){
    let sendData = {
      recname : result[0].name,
      recemail : result[0].email
    }
    res.send(sendData);
  }
  else if(checkUserData.email2 === result[0].email && checkUserData.password2 != result[0].password){
    res.send("Invalid credentials");
  }
}

module.exports = {
  displayForm,
  controlFetchData,
  controlInsertData,
  controlDeleteData,
  controlUpdateData,
  controlCheckData
}