$(document).ready(function (){

var socket, curentUser;

function socktConnected(){
    console.log('socket connected');
}

function loginUser(event){
    if ($("#username") && $("username"))
}

function Init() {
    socket=io();
    socket.on("connect", socktConnected);
    socket.on('user-joined', userJoined);
    $(document).on("click", "input[action=loginUser]", loginUser);

}

Init();

});