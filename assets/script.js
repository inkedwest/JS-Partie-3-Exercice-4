function valid(champ)
{
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password != confirmPassword) {
    document.getElementById("confirmPassword").style.borderColor="red";
      document.getElementById("password").style.borderColor="red";
  }else{
    document.getElementById("confirmPassword").style.borderColor="green";
      document.getElementById("password").style.borderColor="green";
  }
}
