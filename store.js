import { Web3Storage } from 'https://cdn.jsdelivr.net/npm/web3.storage/dist/bundle.esm.min.js'
const accessToken = sessionStorage.getItem('accessToken');
// console.log(mode);

function getAccessToken() {

  //Access Token For decentralised storage
  return accessToken;

}

export function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}

function getFiles() {
  //Accessing Input Files
  const fileInput = document.querySelector('input[type="file"]')
  return fileInput.files
}

document.getElementById("submit").onclick = async function storeFiles() {
  alert("Submit Button Clicked");
  const name=document.getElementById('name');
  const files = getFiles();
  const client = makeStorageClient()
  const cid = await client.put(files,{name:name.value})
  window.alert('File stored with cid: '+cid);
  document.upload.reset();
};