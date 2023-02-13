const {fetchData,insertData,updateData,deleteData} = require("../Repositories/userdb.js");
// const repo = require('../Repositories/userdb.js');

const serviceFetchData = (cb)=> {
    const subQuery = 'select * from userdata';
    // return fetchData(subQuery);
    fetchData(subQuery, function(err,res){
        cb(null, res);
    });
}

const serviceInsertData = (newUser) => {
    const subQuery = `INSERT INTO userdata(name, email, password) VALUES("${newUser.name}", "${newUser.email}", "${newUser.password}")` ;

    return insertData(subQuery);
}

const serviceUpdateData = (newData) =>{
   const subQuery = `update userdata set name = "${newData.name}", email = "${newData.email}", password = "${newData.password}" where UserId = ${newData.userId}`;
   return updateData(subQuery);
}

const serviceDeleteData = (id) => {
    const subQuery = `delete from userdata where UserId = ${id.userId}`;
    return deleteData(subQuery);
}

module.exports = {
    serviceFetchData,
    serviceInsertData,
    serviceUpdateData,
    serviceDeleteData
};

