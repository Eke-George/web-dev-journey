// .preventDefault()

// let div = document.getElementById("div").innerHTML = "<b>hello</b>"
// document.getElementById("div").style.color = "red"
// let p = document.getElementById("p").innerHTML = "hello"
// console.log(div)

// let div = document.createElement("div")
// div.innerHTML = "<b>hello</b>"
// document.body.append(div)
let password = 1234;
let accountBalance = 10000;
let counter = 1;
let sign_in = document.getElementById('signin-ui');
let Name = document.getElementById('name');
let transcation = document.getElementById('transcation-ui')
let incorrect = document.getElementById('incorrect-ui')
let banned = document.getElementById('banned-ui');
let transactionMessage = document.getElementById('transactionMessage-ui');
let exitMessage = document.getElementById('exit-ui');
let passwordInput = document.getElementById('password')//Password inputed by client
let title = document.querySelector(".title")
let regform = document.querySelector("#reg_form")
let Username = document.querySelector("#createusername")
let  amount= document.querySelector("#createamount")
let pin = document.querySelector("#createpassword")
let userarray=[]
let count = 0
let guy = true
let container = document.querySelector(".container")
let address = document.querySelector("#Address")
let tel = document.querySelector("#tel")
let bitrh = document.querySelector("#birth")
// randomusers.me/api
function reg() {
    
    guy = false
    regform.style.display = "block"
    container.style.display = "block"
    title.style.display = "block"
    sign_in.style.display = "none"
    transcation.style.display = "none"
    counter = 1
    Username.value=""
    pin.value=""
    amount.value=""
    tel.value = ""
    address.value = ""
    birth.value = ""
}
function collect(e) {
    e.preventDefault()
    let userobj ={
        name : Username.value,
        userpassword : pin.value,
        useramount : amount.value
    }
    userarray.push(userobj)
    // console.log(userarray[count].name)
    // count++
    
    regform.style.display = "none"
    title.style.display = "none"
    sign_in.style.display = "block"
    container.style.display = "none"
    
    if(sign_in.children[6] == undefined){
        div = document.createElement("div")
        div.innerHTML = '<button class="createacc" onclick="reg()">Create Account</button>'
        sign_in.appendChild(div)
        
    }
   
    
}


regform.addEventListener("submit", collect )
































sign_in.addEventListener('submit', ((e) =>{
    e.preventDefault();
    for(let i of userarray){
        // console.log(i.userpassword)
        count++
        if (passwordInput.value == password || (passwordInput.value == i.userpassword)){
            accountBalance = i.useramount
            transcation.style.display = 'block'
            sign_in.style.display = 'none'
            incorrect.style.display = 'none'
            passwordInput.value = ''
            
            exitMessage.style.display = 'none'
            counter = 1;

        
        }
        else if (passwordInput.value != password && counter < 4 && guy){
            incorrect.style.display = 'block'
            counter++
        }
        else if (passwordInput.value != password && counter >= 4 && guy){
            sign_in.style.display = 'none'
            incorrect.style.display = 'none'
            banned.style.display = 'block'
            counter++
        }

    }
    exitMessage.style.display = "none"

    

}))

transcation.addEventListener('submit' , ((e) =>{
    e.preventDefault();
        let inputElements = document.getElementsByName('transaction')
        
        for (let element of inputElements){
            if (element.checked){
               transcationFunction(element, element.id)
            }
            console.log(element)
        }
}))

function transcationFunction(element, transaction){ // Function for performing transaction
    if (transaction == 'checkBalance'){
        sign_in.style.display = 'none'
        transactionMessage.innerHTML = `<p>${Name.value}, your transcation was successful</p>
                                        <p>your Account Balance is ${accountBalance} Naira  </p>
                                        <p><b>Select A Transaction Above for another transaction</b></p>
                                            `
        element.checked = false
        
    }

    else if (transaction == 'withdraw'){
        sign_in.style.display = 'none'
        let withdraw = parseFloat(prompt('Enter Amount you want to withdraw'));
        if (withdraw <= accountBalance){
        accountBalance = accountBalance - withdraw;
        transactionMessage.innerHTML = `<p>${Name.value}, your transcation was successful</p>
                                        <p>your Account Balance is ${accountBalance} Naira  </p>
                                        <p><b>Select A Transaction Above for another transaction</b></p>
                                            `
        element.checked = false
        
        }
}



else if (transaction == 'deposit'){
    sign_in.style.display = 'none'
    let deposit = parseFloat(prompt('Enter Amount you want to deposit'));
    if (deposit <= 100000){
    accountBalance = parsefloat(accountBalance) + deposit;
    transactionMessage.innerHTML = `<p>${Name.value}, Your transcation was successful</p>
                                    <p>Your Account Balance is ${accountBalance} Naira  </p>
                                    <p><b>Select A Transaction Above for another transaction</b></p>
                                        `
    element.checked = false
    }
}

else if (transaction == 'sign-out'){
    sign_in.style.display = 'block'
    exitMessage.style.display = 'block'
    transcation.style.display = 'none'
    transactionMessage.style.display = 'none'
    element.checked = false
    Name.value= ""
}

}
function em(){
    exitMessage.style.display = "none"
}

