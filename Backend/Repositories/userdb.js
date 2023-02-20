const connection = require('../Connection/db');

const fetchData = async (sqlQuery) =>{
  return new Promise ((resolve) => {
  connection.query(sqlQuery, (err, result)=>{
  if(err){
    return console.log(err);
  }
   resolve(result);
  
  // return cb(null, result);

  // else{
  //   console.log('Data fetched', result);
  // }
    })
  })
}

const insertData = (sqlQuery) =>{
    return connection.query(sqlQuery, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('Data inserted!!');
    }
    })
}

const updateData = (sqlQuery) =>{
  console.log("Update data func");
    return connection.query(sqlQuery, (err, result)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('Data updated', result);
  }
    })
}

const deleteData = (sqlQuery) =>{
    return connection.query(sqlQuery, (err, result)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('Data deleted', result);
  }
    })
}

const checkData = async (sqlQuery) =>{
  return new Promise ((resolve) => {
  connection.query(sqlQuery, (err, result)=>{
  if(err){
    return console.log(err);
  }
  console.log(result);
   resolve(result);
    })
  })
}

module.exports ={
    fetchData,
    insertData,
    updateData,
    deleteData,
    checkData
}