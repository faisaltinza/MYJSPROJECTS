const image = document.getElementsByTagName('img')[0]
const quote = document.getElementById('text')
const userName = document.getElementById('username')


const users = [
    {
        username: 'Arjun Mehta',
        quota: "These are the best apples I’ve had in years. Crisp, sweet, and absolutely delicious.",
        img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: 'Rahul Verma',
        quota: "Finally found a fruit brand I can trust. Apple delivers consistent quality every single time.",
        img:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: 'Priya Nair',
        quota: "I order weekly from Apple and I’m never disappointed. Healthy, hygienic, and farm-fresh!",
        img:"https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

let idx = 0;
function updateTestimonial() {
    userName.innerText = users[idx].username
    quote.innerText = users[idx].quota
    image.src = users[idx].img
    idx++
    if (idx === users.length) {
    idx = 0
    }
    setTimeout(()=>{updateTestimonial()},2000)

}
const NewUser = {username:'Rowan Atkinosn',
    quota:'The apples from Apple are always fresh, juicy, and full of flavor. My kids love them!',
    img:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
users.push(NewUser)
updateTestimonial()





