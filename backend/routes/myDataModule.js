// myDataModule.js
let myData = null;

function setMyData(data) {
  myData = data;
}

function getMyData() {
  return myData;
}

module.exports = { setMyData, getMyData };