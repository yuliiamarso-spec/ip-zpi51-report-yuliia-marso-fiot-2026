function labTask10Class(){ 

    class Calculator {
        constructor() {
            this.result  = 0;
        }

        number(value) {
            this.result = this.result = value;
            console.log("Після number:", this.result);
            return this;
        }

        add(value) {
            this.result = this.result + value;
            console.log("Після add:", this.result);
            return this;

        }

        subtract(value) {
            this.result = this.result - value;
            console.log("Після subtract:", this.result);
            return this;
        }

        multiply(value) {
            this.result = this.result * value;
            console.log("Після multiply:", this.result);
            return this;
        }

        divide(value) {
            this.result = this.result / value;
            console.log("Після divide:", this.result);
            if (value === 0) {
                throw new Error("Ділення на нуль неможливе");
}
            
            return this;
        }

        getResult() {
            return this.result;;
        }

    }
 
    const calc = new Calculator();

    const result = calc
    .number(10)
    .add(5)
    .subtract(3)
    .multiply(4)
    .divide(2)
    .getResult();

    console.log(result);
}