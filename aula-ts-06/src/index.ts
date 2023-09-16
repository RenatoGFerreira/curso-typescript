const user: {
    name: string,
    email: string,
    password: string,
    birth?: string | Date
} = {
    name: "nome",
    email: "email@email.com",
    password: "password",
    birth: new Date("2012-12-12")
}

const user2: {
    name: string,
    email: string,
    password: string,
    birth?: string | Date
} = {
    name: "nome",
    email: "email@email.com",
    password: "password",
    birth: new Date("2012-12-12")
}




function checkUserWithEMail(email: string): void{
    console.log(user)
}

checkUserWithEMail(user.email)