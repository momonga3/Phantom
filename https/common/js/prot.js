/* JS記法確認 */
const person = {
    myNumber: 1000,
    email: 'john.smith@dev.com',
    personalInfo: {
        firstName: 'John',
        lastName : 'Smith',
        age       : 30,
        /* ECMAScript6以前の記述方法 */
        fullName : function() {
            return this.firstName + " " + this.lastName;
        },
        /* ECMAScript6の記述方法 */
        fullName2(){
            return this.firstName + " " + this.lastName;
        }
    }
}
