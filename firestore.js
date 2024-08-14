
const userDetails = document.querySelector(".userdetails")
const editsprofile = document.getElementById("editsprofile");
function createusercollection(user){

    firebase.firestore().collection("users")
    .doc(user.uid)
    .set({
        uid:user.uid,
        name:user.displayName,
        email:user.email,
        phone:"",
        specialty:"",
        portfolioUrl:"",
        experience: "",

    })
}

async function getuserinfoRealtime(userID){

    if (userID) {
        const userdocRef = await firebase.firestore()
        .collection("users")
        .doc(userID)
         userdocRef.onSnapshot((doc) => {
            if(doc.exists){
                const userinfo = doc.data();
                if(userinfo){
                    userDetails.innerHTML = `
                    <h3>${userinfo.name}</h3>
                    <h3>${userinfo.email}</h3>
                    <h3>${userinfo.phone}</h3>
                    <h3>${userinfo.specialty}</h3>
                    <h3>${userinfo.portfolioUrl}</h3>
                    <h3>${userinfo.experience}</h3>
                    
                    `

                     editsprofile["name"].value = userinfo.name
                     editsprofile["profileEmail"].value = userinfo.email
                     editsprofile["phone"].value = userinfo.phone
                     editsprofile["specialty"].value = userinfo.specialty
                     editsprofile["portfolioUrl"].value = userinfo.portfolioUrl
                     editsprofile["experience"].value = userinfo.experience

               
            }
            }
        
        })


 
    } else {
        userDetails.innerHTML = `
        <h3>please login</h3>
        `
    }

}

function userupdate(e){
e.preventDefault()
const userDocRef = firebase
.firestore()
.collection("users")
.doc(firebase.auth().currentUser.uid);

 userDocRef.update({
    name: editsprofile["name"].value,
    email : editsprofile["profileEmail"].value,
    phone : editsprofile["phone"].value,
    specialty : editsprofile["specialty"].value,
    portfolioUrl : editsprofile["portfolioUrl"].value,
    experience : editsprofile["experience"].value, 
   
    

 }) 

    
} 

