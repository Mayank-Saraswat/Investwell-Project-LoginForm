const { fetchData, insertData, updateData, deleteData, checkData } = require("../Repositories/userdb.js");

var CryptoJS = require("crypto-js");

const serviceFetchData = async () => {
    const subQuery = 'select * from userdata';
    const result = await fetchData(subQuery);
    return new Promise((resolve) => {

        // return fetchData(subQuery);

        // fetchData(subQuery).then((data)=> {
        //     resolve(data);
        // console.log(data); 
        // })

        //console.log(result);
        resolve(result);

    })
}

const serviceInsertData = (newUser) => {
    var ciphertext = CryptoJS.AES.encrypt(newUser.password, 'secret key 123').toString();  //password encryption

    const subQuery = `INSERT INTO userdata(name, email, password) VALUES("${newUser.Name}", "${newUser.email}", "${ciphertext}")`;

    return insertData(subQuery);
}

const serviceUpdateData = (newData) => {
    var ciphertext = CryptoJS.AES.encrypt(newData.password, 'secret key 123').toString();

    const subQuery = `update userdata set name = "${newData.name}", email = "${newData.email}", password = "${ciphertext}" where UserId = ${newData.userId}`;
    console.log("Service update func");
    return updateData(subQuery);
}

const serviceDeleteData = (id) => {
    const subQuery = `delete from userdata where UserId = ${id.userId}`;
    return deleteData(subQuery);
}

const serviceCheckData = async (newData) => {
    const subQuery = `select * from userdata where email="${newData.email2}"`;
    //console.log(newData);
    const result = await checkData(subQuery);
    return new Promise((resolve) => {
        resolve(result);

    })
}

module.exports = {
    serviceFetchData,
    serviceInsertData,
    serviceUpdateData,
    serviceDeleteData,
    serviceCheckData
};

