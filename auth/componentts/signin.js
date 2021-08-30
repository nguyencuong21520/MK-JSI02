import { InputGroup } from "./inputGroup.js";
import { Register } from "./register.js";
import { setScreen } from "../app.js";
class Login {
  $container;
  $title;
  $inputGroupemail;
  $inputGroupPassword;
  $form;

  $linkToRegister;

  $btnSubmit;
  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("center", "h-screen", "f-column");

    this.$title = document.createElement("h3");
    this.$title.innerHTML = "Sign In";

    this.$inputGroupemail = new InputGroup("email", "Email", "email");
    this.$inputGroupPassword = new InputGroup(
      "password",
      "Password",
      "password"
    );

    this.$form = document.createElement("form");

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Login";

    this.$linkToRegister = document.createElement("p");
    this.$linkToRegister.innerHTML = "Already have an account?";
    this.$linkToRegister.classList.add("btn_link");
    this.$linkToRegister.addEventListener("click", this.moveToRegister);
  }

  moveToRegister = () => {

    const register = new Register();
    setScreen(register)
  };

  render() {
    this.$form.appendChild(this.$inputGroupemail.render());
    this.$form.appendChild(this.$inputGroupPassword.render());
    this.$form.appendChild(this.$btnSubmit);

    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$form);
    this.$container.appendChild(this.$linkToRegister);

    return this.$container;
  }
}

export { Login };
