const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here 

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav_list').classList.toggle('active');});