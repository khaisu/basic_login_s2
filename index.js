let dbUsers=[

    {
        username:"khairul",
        password:"1234",
        name:"Khairul",
        email:"khairul0425@gmail.com"
    },

    {
        username:"zaid",
        password:"1111",
        name:"Zaid",
        email:"zaid@gmail.com",
    },

    {
        username:"lan",
        password:"1234",
        name:"Fadzlan",
        email:"lan@gmail.com",
    }
]

function login(reqUsername, reqPassword)
{
let matchUser = dbUsers.find(user => user.username == reqUsername)

//console.log(matchUser)

if(!matchUser) return "User not found"
if(matchUser.password == reqPassword)
{
    return matchUser
}
else
{
    return" invalid"
}

}

function register(reqUsername,reqPassword,reqName,reqEmail)
{

    dbUsers.push({username:reqUsername,
        password : reqPassword,
        name : reqName,
        email:reqEmail})
}

//try to login
//login("khairul","123")
console.log(login("khairul","1234"))
//login("sufi","password")

register("sufi","1111","Sufi","Sufi@gmail.com")
console.log(login("sufi","1111"))