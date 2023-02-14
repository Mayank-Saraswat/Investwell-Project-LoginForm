const { serviceFetchData, serviceInsertData, serviceUpdateData, serviceDeleteData } = require('../Services/userServices');
const path = require("path");

const displayForm = (req, res) => {
  // console.log('show form');
  res.sendFile(path.join(__dirname, "..", "..", "/frontend/index.html"));
}

const controlFetchData = (req, res) => {
  // return serviceFetchData();
  console.log(req.headers);
  serviceFetchData(function (err, result) {
    res.send(result);
  })
}

const controlInsertData = (req, res) => {
  const newUser = req.body;
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

module.exports = {
  displayForm,
  controlFetchData,
  controlInsertData,
  controlDeleteData,
  controlUpdateData
}