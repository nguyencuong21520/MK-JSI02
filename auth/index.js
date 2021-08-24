import {Register} from "./componentts/register.js";

const app = document.getElementById("app")

const register = new Register();
app.appendChild(register.render());