"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `hello ${name}, Age is ${age}, salary is ${salary}, test variable ${test}`;
    }
    return `no data to show`;
}
console.log(showDetails("aya", 26, 6000));
//# sourceMappingURL=index.js.map