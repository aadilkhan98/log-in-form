let passwordInput = document.getElementById("password-input");
let lockIcon = document.getElementById("icon");
let toggle = true;
function passwordtoggle(){
  if(toggle){ 
    passwordInput.setAttribute("type","text");
    lockIcon.innerHTML = `<i class="fa fa-unlock-alt" aria-hidden="true"></i>`;
      toggle = false;
   }else{
    passwordInput.setAttribute("type","password");
    lockIcon.innerHTML =`<i class="fa fa-lock" aria-hidden="true"></i>`;
               toggle = true;
               }
 
}
