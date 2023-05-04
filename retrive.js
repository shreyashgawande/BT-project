import { Web3Storage } from 'https://cdn.jsdelivr.net/npm/web3.storage/dist/bundle.esm.min.js'

const accessToken = sessionStorage.getItem('accessToken');
// console.log(mode);

function getAccessToken() {

  //Access Token For decentralised storage
  return accessToken;

}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}

function getValue() {
  //geting cid
  var cid = document.getElementById("cid").value;
  return cid;
}


document.getElementById("submit").onclick = async function retrieve() {

  //retrieving data files

  const cid = getValue()
  const client = makeStorageClient()
  const res = await client.get(cid)
  console.log(`Got a response! [${res.status}] ${res.statusText}`)
  if (!res.ok) {
    alert("File Doesn't exist, check your CID");
  }
  
  else {
    alert("File has been opened!");
    window.open("https://" + cid + ".ipfs.w3s.link", "_blank");
  }
}