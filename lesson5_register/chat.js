window.onload = init;

async function init() {
    firebase.auth().onAuthStateChanged((user)=>{
        if(user && user.emailVerified){
            loadConversations(user.email);
        }else{
            alert("Please signin")
            open("./index.html", "_self");
        }
    })
}

// CRUD

// create,
// update,`
// delete


let signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      open("./index.html", "_self");
    })
    .catch((error) => {
      sweetAlert("error", error.message);
    });
};

let loadConversations = async (email) => {
  let currentUser = email.trim();
  let result = await firebase
    .firestore()
    .collection("chat")
    .where("users", "array-contains", currentUser)
    .get();

  let conversations = getDataFromDocs(result.docs);
  console.log(conversations);
};

const sweetAlert = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: icon,
    title: title,
  });
};

let getDataFromDoc = (doc) => {
  let data = doc.data();
  data.id = doc.id;
  return data;
};

let getDataFromDocs = (docs) => {
  let result = [];
  for (let doc of docs) {
    let data = getDataFromDoc(doc);
    result.push(data);
  }
  return result;
};
