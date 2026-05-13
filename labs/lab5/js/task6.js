function labTask6Array(){ 

    function checkBrackets(str) {
        const brackets = [];

        for (const char of str) {
            if (char === "(" || char === "{" || char === "[") {
                brackets.push(char);
            }
            else if (char === ")" || char === "}" || char === "]") {
                const lastBracket = brackets.pop();

                if(
                    (char === ")" && lastBracket !== "(") ||
                    (char === "}" && lastBracket !== "{") ||
                    (char === "]" && lastBracket !== "[")
                ){
                    return false;
                }

            }  
        }
        return brackets.length === 0;
    }

    console.log(checkBrackets("function someFn() { return [1, 2]; }"));
    console.log(checkBrackets("function someFn[) { return (1, 2]; }"));
}