import { InputGroup } from "./inputGroup.js";
import { Register } from "./register.js";
import { setScreen } from "../app.js";
import { Chat } from "./chat.js";
import { sweetAlert } from "./b.js";

class Login {
  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("center", "h-100", "f-column");

    this.title = document.createElement("h3");
    this.title.innerHTML = "Login";

    this.inputGroupEmail = new InputGroup(
      "email",
      "Email",
      "email",
      "Enter your email address"
    );
    this.inputGroupPassword = new InputGroup(
      "password",
      "Password",
      "password",
      "Enter your password"
    );

    this.form = document.createElement("form");
    this.form.addEventListener("submit", this.handleSubmit);

    this.btnSubmit = document.createElement("button");
    this.btnSubmit.type = "submit";
    this.btnSubmit.innerHTML = "Login";

    this.linkToRegister = document.createElement("p");
    this.linkToRegister.innerHTML = "You dont have an account?";
    this.linkToRegister.classList.add("btn_link");
    this.linkToRegister.addEventListener("click", this.moveToRegister);
  }
  moveToRegister = () => {
    const register = new Register();
    setScreen(register);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //validate the form
    const email = this.inputGroupEmail.getInputValue();
    const password = this.inputGroupPassword.getInputValue();

    this.inputGroupEmail.setError(null);
    this.inputGroupPassword.setError(null);

    if (!email) {
      this.inputGroupEmail.setError("Email is required");
    }
    if (password.length < 6) {
      this.inputGroupPassword.setError("password is required");
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        if(user.emailVerified){
         open("./chat.html", "_self")
        }else{
          sweetAlert('error', 'please verify email')
        }
      })
      .catch((error) => {
        var errorMessage = error.message;
        sweetAlert("error", errorMessage);
      });
  };

  render() {
    this.form.appendChild(this.inputGroupEmail.render());
    this.form.appendChild(this.inputGroupPassword.render());
    this.form.appendChild(this.btnSubmit);

    this.container.appendChild(this.title);
    this.container.appendChild(this.form);
    this.container.appendChild(this.linkToRegister);

    return this.container;
  }
}

export { Login };
