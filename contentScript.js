console.log("contentscript running");
chrome.runtime.onMessage.addListener(gotMeesage);
function gotMeesage(msg,sender,senderResponse){
  console.log(msg.text,sender,senderResponse)
  if(msg.text==="hello"){
    const para=document.getElementsByTagName("p");
for(let elm of para){
  elm.style.backgroundColor="red"
}  }

}