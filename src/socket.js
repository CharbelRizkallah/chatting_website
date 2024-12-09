
import { io } from 'socket.io-client'



const socket = io('http://localhost:5000')


const displayMessage = (message) => {
    const chatbox = document.getElementById('chat-box')
    const div = document.createElement("div")
    div.innerHTML = `<p class='p-1 bg-gray-100' > ${message} </p>`
    chatbox.appendChild(div)
  }

const sendMessage = (message) => {
    socket.emit('send-message', message)
}



socket.on('connect', () => {
    displayMessage("You are connected !")
})

socket.on('recieve-message', message => {
    displayMessage(message)
})



export { displayMessage, sendMessage }