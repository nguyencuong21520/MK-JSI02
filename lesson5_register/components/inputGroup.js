class InputGroup {
    $container;
    $input;
    $label;
    $errMsg;

    constructor(type, label, name, placeholder){
        this.$container = document.createElement("div");
        this.$container.classList.add("input_group");

        this.$input = document.createElement("input");
        this.$input.type = type;
        this.$input.name = name;
        this.$input.required = true;
        this.$input.placeholder = placeholder;

        this.$label = document.createElement("label");
        this.$label.innerHTML = label;

        this.$errMsg = document.createElement("div")
        this.$errMsg.classList.add("error-msg")
    }
    getInputValue() {
        return this.$input.value.trim();
    }
    setError(mess){
        if(mess){
            this.$errMsg.innerHTML = mess
            this.$container.classList.add("has-error")
        }else{
            this.$errMsg.innerHTML = ""
            this.$container.classList.remove("has-error")
        }
    }
    render(){
        this.$label.appendChild(this.$input);
        this.$container.appendChild(this.$label)
        this.$container.appendChild(this.$errMsg)

        return this.$container
    }
}

export { InputGroup }