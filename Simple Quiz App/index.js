var user = localStorage.getItem('user')
if(user){
    var parsedUser = JSON.parse(user)
    document.getElementById("welcome-message").innerHTML = `Hello ${parsedUser.name}`
    document.getElementById("logout-button").classList.remove("hidden")
}
else{
    document.getElementById("welcome-message").innerHTML = `Hello, Please <a href="/Login/login.html" id="login-text">login</a> <br> <a href="/Contact me/contact_me.html" id="contact">Contact Me</a>`
}
document.getElementById("logout-button").addEventListener('click',function(){
    localStorage.removeItem("user")
    window.location.href = "./login.html"
})