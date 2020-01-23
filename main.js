//spot check 1

// const Family = function () {
//     const members = []

//     const birth = function (name) {
//         members.push(name)
//         console.log(members)
//     }

//     return birth
// }

// const giveBirth = Family()
// giveBirth("Clarissa")
// giveBirth("Mayana")

//spot check 2
// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }
// const m = mathOperations()
// m.add(13, 29)
// m.mult(1.75, 24)
// m.mult(7, m.div(36, 6))

//....

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()


//ex 1


// const StringFormatter = function () {
//     const capitalizeFirst = function (a) {
//         return (a[0].toUpperCase() + a.substr(1).toLowerCase())
//     }
//     const skewerCase = function (a) {
//         return (a.replace(" ","-"))
//     }
//     return{
//         capitalizeFirst,skewerCase
//     }
// }

// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box")) //should print blue-box

//ex 2

// const Bank = function () {

//     let _money = 500
//     const depositCash = function (cash) {
//         _money += cash
//     }
//     const checkBalance =function(){
//         console.log(_money)
//     }

//     return{
//         deposit:depositCash,showBalance:checkBalance
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

//ex 3

const youTubeUrl="https://www.youtube.com/watch?v="

const SongsManager = function () {
    const _songs = {}
    const addSong= function(name,url){
        _songs[name]=url.substring(url.indexOf("=")+1)
    }
    const getSong= function(name){
        console.log(youTubeUrl+_songs[name])
    }
    const getSongs= function(){
        console.log(_songs)
    }
    return{
        addSong,getSong,getSongs
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSongs()
