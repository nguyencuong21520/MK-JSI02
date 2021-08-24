import {InputGroup} from "./inputGroup.js"
class Register {
    $container;
    $formRegister
    $title;

    $inputGroupDisplayName;
    $inputGroupemail;
    $inputGroupPassword;
    $inputGroupCfpassword;

    $btnSubmit
    constructor(){
        this.$container = document.createElement("div");
        this.$container.classList.add("center","h-100", "f-column")

        this.$title = document.createElement("h3")
        this.$title.innerHTML = "Register"

        this.$formRegister = document.createElement("form")
        this.$formRegister.addEventListener("submit",this.handleSubmit)

        this.$inputGroupDisplayName = new InputGroup("text", "Display Name", "name", "Enter your name");
        this.$inputGroupemail = new InputGroup("email", "Email", "email", "Enter your email address");
        this.$inputGroupPassword = new InputGroup("password", "Password", "password", "Enter your password");
        this.$inputGroupCfpassword = new InputGroup("password", "Confirm password", "cfpassword", "Confirm password");

        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.type = "submit"
        this.$btnSubmit.innerHTML = "Register"
    }
    handleSubmit = (e)=>{
        e.preventDefault();

        //validate the form
        const email = this.$inputGroupemail.getInputValue()
        const password = this.$inputGroupPassword.getInputValue()
        const name = this.$inputGroupDisplayName.getInputValue()
        const cfpassword = this.$inputGroupCfpassword.getInputValue()

        this.$inputGroupDisplayName.setError(null)
        this.$inputGroupCfpassword.setError(null)
        this.$inputGroupPassword.setError(null)
        this.$inputGroupemail.setError(null)

        if(!email){
            this.$inputGroupemail.setError("Email is required")
        }
        if(!name){
            this.$inputGroupDisplayName.setError("Name is required")
        }
        if(password.length < 6){
            this.$inputGroupPassword.setError("Password length must be at least 6 characters")
        }
        if(cfpassword != password){
            this.$inputGroupCfpassword.setError("Comfirm password not matched ")
        }
        console.log("success");
    }
    render(){
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render())
        this.$formRegister.appendChild(this.$inputGroupemail.render())
        this.$formRegister.appendChild(this.$inputGroupPassword.render())
        this.$formRegister.appendChild(this.$inputGroupCfpassword.render())
        this.$formRegister.appendChild(this.$btnSubmit)

        this.$container.appendChild(this.$title)
        this.$container.appendChild(this.$formRegister)

        return this.$container
    }
}

export { Register }