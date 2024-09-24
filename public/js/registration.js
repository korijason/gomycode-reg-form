const BASE_URL = "http://localhost:5000";
const regForm = document.getElementById("reg-form");
function handleRegistration() {
  regForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const user = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      password: formData.get("password"),
      gender: formData.get("gender"),
    };
    //console.log({user})
    if (user.password != formData.get("confirmPassword"))
      return alert("Passwords not matching");
    try {
      const res = await fetch(BASE_URL + "/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
      });
      if (!res.ok) return alert("an error has occurred");
      alert("registered succesfully");
      regForm.reset();
    } catch (error) {
      alert("error " + error.message);
    }
  });
}

//handleRegistration();
//alert("Hello");
document.addEventListener("DOMContentLoaded", handleRegistration);
