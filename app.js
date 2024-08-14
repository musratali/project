
const signup = async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password);

 try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
   // await result.user.updateProfile({
   //    displayName: "User",
   //  })
   
   //  await result.user.sendEmailVerification()
    createusercollection(result.user)
   //  console.log(result);
    alert(`wellcom ${result.user.email}`)

 } catch (error) {
    console.log(error);
    alert(error.message)
    createusercollection(null)
 }
email.value = ""
email.password = ""
}


const Login = async (e) => {
    e.preventDefault()
    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;
    console.log(email, password);

 try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(result);
    alert(`user is successfully login ${result.user.email}`)
 } catch (error) {
   //  console.log(error);
    alert("error.message")
 }
email.value = ""
email.password = ""
}


const logout = () => {
// e.preventDefault()
   firebase.auth().signOut()
 
 const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         getuserinfoRealtime(user.uid)
         console.log(user);
         // ...
      }else{
         
         console.log(" Signout user successfully ");
         alert(" Signout user successfully")
         getuserinfoRealtime(null)

      }
   });

}
    
    


   






