const { serviceFetchData, serviceInsertData, serviceUpdateData, serviceDeleteData, serviceCheckData } = require('../Services/userServices');
const path = require("path");
var CryptoJS = require("crypto-js");


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
  console.log("Control update  :", newData);
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



  if (result.length == 0) {           //backend validations
    return res.send("No user found");
  }
  var bytes = CryptoJS.AES.decrypt(result[0].password, 'secret key 123');
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  if(originalText!==checkUserData.password2){
    return res.send("Invalid credentials");
  }
  
    let sendData = {
      recname: result[0].name,
      recemail: result[0].email
    }
    return res.send(sendData);
}

module.exports = {
  displayForm,
  controlFetchData,
  controlInsertData,
  controlDeleteData,
  controlUpdateData,
  controlCheckData
}