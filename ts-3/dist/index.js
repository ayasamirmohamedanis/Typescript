"use strict";
class user {
    static getCount() {
        console.log(`${this.created} objects created`);
    }
    constructor(username) {
        this.username = username;
        user.created++;
    }
}
user.created = 0;
let u1 = new user("Elzero");
let u2 = new user("Web");
let u3 = new user("School");
user.getCount();
//# sourceMappingURL=index.js.map