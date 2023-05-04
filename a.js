
function getInput(){
  var userInput = document.getElementById("cid").value;
  console.log(userInput);

  sessionStorage.setItem('accessToken',userInput);
  // alert('stored');

}


document.getElementById("submit").onclick = async function retrieve() {
       getInput();

const mode = sessionStorage.getItem('accessToken');
console.log(mode); // 'dark'

     
      window.location.replace("/html/dashboard.html");

    return  ;
  }

