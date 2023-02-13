const connection = require('../Connection/db');

const fetchData = (sqlQuery,cb) =>{
  connection.query(sqlQuery, (err, result)=>{
  if(err){
    return console.log(err);
  }
  return cb(null, result);
  // else{
  //   console.log('Data fetched', result);
  // }
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

module.exports ={
    fetchData,
    insertData,
    updateData,
    deleteData
}


