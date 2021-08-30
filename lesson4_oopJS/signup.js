class InputForm {
    constructor(type, label, placeholder){
        this.$container = document.createElement('div')

        this.$label = document.createElement('label')
        this.$label.innerHTML = label
        this.$label.style.color = "red"

        this.$input = document.createElement('input')
        this.$input.type = type
        this.$input.placeholder = placeholder
    }
    render(){
        this.$container.appendChild(this.$label)
        this.$container.appendChild(this.$input)

        return this.$container
    }
}

export {InputForm}
