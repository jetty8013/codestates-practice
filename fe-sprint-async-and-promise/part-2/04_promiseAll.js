const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  const arr = []
  //map 
  return Promise.all([getDataFromFilePromise(user1Path),getDataFromFilePromise(user2Path)]).then((data) => {
    data.forEach(value =>{
      arr.push(JSON.parse(value))
    })
    return arr
  })
}

// readAllUsers()

module.exports = {
  readAllUsers
}