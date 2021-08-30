import { setScreen } from "./app.js";
import { Login } from "./componentts/signin.js";
import { Chat } from "./componentts/chat.js";



const login = new Login();
setScreen(login);

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     const chat = new Chat();
//     setScreen(chat);
//   }else{}
// });
