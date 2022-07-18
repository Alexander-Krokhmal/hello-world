//Methodes of Object

//Use function

let firstPart = "Let";
let userInfo = {
    name: "Bangalor",
    age: 37,
    "somthing not usual": "wtf",
    [firstPart + " the sunshine begin!"]: "Yeeeee!",
    adress: {
        city: "Neverland",
        street: "Unusual Happy",
    },    //важно, должна стоять запятая

    showInfo: function () {
        console.log(`${userInfo.name}, ${userInfo.age} age. Address is t.${userInfo.adress.city}, st.${userInfo.adress.street}`);
    }
    
    // Another way to wrote:

    // showInfo() {
    //     console.log(`${userInfo.name}, ${userInfo.age} age. Address is t.${userInfo.adress.city}, st.${userInfo.adress.street}`);
    // }
}


userInfo.showInfo();


//Use "this"

let userInfo2 = {
    name: "Bangalor2",
    age: 372,
    "somthing not usual": "wtf",
    [firstPart + " the sunshine begin!"]: "Yeeeee!",
    adress: {
        city: "Neverland2",
        street: "Unusual Happy2",
    },    //важно, должна стоять запятая


    showInfo() {
        // First option
        // console.log(`${this.name}, ${this.age} age. Address is t.${this.adress.city}, st.${this.adress.street}`);
    
        //Second option (use new var and function inside)
        let show = () => console.log(`${this.name}, ${this.age} age. Address is t.${this.adress.city}, st.${this.adress.street}`);

        show();
    }
}

userInfo2.showInfo ();

// Такой вариант сработает только при оператиоре "this",
//если будет имя переменной, оно обнулится вместе с ней

let user = userInfo2;  // копируем переменную
userInfo2 = null;    // обнуляем 1-ю переменную
user.showInfo();