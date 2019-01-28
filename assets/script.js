function valid(champ)
{
  var password = document.getElementById("password").value;
  var confirmPasswordb = document.getElementById("confirmPassword").value;

  if (password != confirmPassword) {
    document.getElementById("confirmPassword").style.borderColor="red";
      document.getElementById("password").style.borderColor="red";
  }
}
