window.onload = init;

async function init() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user && user.emailVerified) {
      document.querySelector("#currentEmail").innerHTML = user.email
      loadConversations(user.email);
      conversationsChange(user.email)
    } else {
      alert("Please signin");
      open("./index.html", "_self");
    }
  });
}

let renderChat = (data, email) => {
  let dom = document.querySelector(".chat-content-container");
  let chat_name = document.querySelector("#chat_name");
  let chat_ID = document.querySelector("#currentID");

  chat_name.innerHTML = data.chatName;
  chat_ID.innerHTML = data.id;

  dom.innerHTML = "";
  for (let i = 0; i < data.messages.length; i++) {
    let chat_class = "chat-content";
    if (data.messages[i].owner == email) {
      chat_class = "chat-content owner";
    }
    let html = `<div class="${chat_class}">
    <span>${data.messages[i].content}</span>
  </div>`;

    dom.innerHTML += html;
  }
};

let renderListFriends = (data, email) => {
  let dom = document.querySelector("#list_friends");
  dom.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let html = `<div id="c${data[i].id}" class="list-group-item list-group-item-action lh-tight">
    <div>
      <img src="https://img.icons8.com/material-outlined/48/000000/user-male-circle.png">
      <span>${data[i].chatName}</span>
    </div>

    <div class="time">
      <span>${data[i].createAt}</span>
    </div>
  </div>`;
    dom.innerHTML += html;
  }

  for (let i of data) {
    let user = document.getElementById(`c${i.id}`);
    user.onclick = () => {
      renderChat(i, email);
    };
  }
};

let form = document.querySelector("#sent_message");
form.onsubmit = (e) => {
  e.preventDefault();

  let message = form.m.value;
  let id = document.querySelector("#currentID").textContent;
  let email = document.querySelector("#currentEmail").textContent;

  updateMessage(message,id,email)

  form.m.value = ""
};

let updateMessage = async (content, id, email) => {
  if (id) {
    let m = {
      content: content,
      owner: email,
    };

    await firebase
      .firestore()
      .collection("chat")
      .doc(id)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion(m),
      });
  } else {
    alert("something wrong");
  }
};

let conversationsChange = async (email) =>{
  firebase.firestore().collection("chat").where("users", "array-contains", email)
  .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
              // console.log("them moi: ", change.doc.data());
          }
          if (change.type === "modified") {

            renderChat(change.doc.data(), email)
          }
          if (change.type === "removed") {
              // console.log("Removed city: ", change.doc.data());
          }
      });
  });
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
  renderChat(conversations[0], currentUser);
  renderListFriends(conversations, currentUser);
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
