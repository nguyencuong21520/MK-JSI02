import {InputGroup} from "./inputGroup.js"
class Register{
    $container;
    $title;

    $formRegister;

    $inputGroupEmail;
    $inputGroupPassword;
    $inputGroupConfirmPassword;
    $inputGroupDisplayName

    $btnSubmit

    constructor(){
        this.$container = document.createElement("div");
        this.$container.classList.add("center", "h-screen", "f-column")
        this.$title = document.createElement("h3");
        this.$title.innerHTML = "Register"

        this.$formRegister = document.createElement("form")
        this.$formRegister.addEventListener("submit",this.handleSubmit)

        this.$inputGroupDisplayName = new InputGroup("text", "Display Name", "name")
        this.$inputGroupEmail = new InputGroup("email", "Email", "email");
        this.$inputGroupPassword = new InputGroup("password", "Password", "password");
        this.$inputGroupConfirmPassword = new InputGroup("password", "Confirm Password", "cfpassword");

        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.type = "submit"
        this.$btnSubmit.innerHTML = "Register"
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        //validate form
        const email = this.$inputGroupEmail.getInputValue()
        const displayName = this.$inputGroupDisplayName.getInputValue()
        const password = this.$inputGroupPassword.getInputValue()
        const cfpassword = this.$inputGroupConfirmPassword.getInputValue()

        this.$inputGroupEmail.setError(null)
        this.$inputGroupConfirmPassword.setError(null)
        this.$inputGroupDisplayName.setError(null)
        this.$inputGroupPassword.setError(null)
        if(!email){
            this.$inputGroupEmail.setError("Email cannot be empty");
            return
        }
        if(!displayName){
            this.$inputGroupDisplayName.setError("Name cannot be empty");
            return
        }
        if(password.length < 6){
            this.$inputGroupPassword.setError("Password length must be greater than 6 characters");
            return
        }
        if(cfpassword != password){
            this.$inputGroupConfirmPassword.setError("confirm Password not matched")
            return
        }
        console.log("alo");
    }

    render(){
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render())
        this.$formRegister.appendChild(this.$inputGroupEmail.render())
        this.$formRegister.appendChild(this.$inputGroupPassword.render())
        this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render())
        this.$formRegister.appendChild(this.$btnSubmit)

        this.$container.appendChild(this.$title)
        this.$container.appendChild(this.$formRegister)

        return this.$container
    }

}

export {Register}