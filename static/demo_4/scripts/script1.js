window.onload = function () {

    let myHeading = document.querySelector('h1');
    let myImage = document.querySelector('img');

    myHeading.textContent = 'Hello, my friends!';
    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/pic1.JPG') {
          myImage.setAttribute('src', 'images/pic3.JPG');
        } else {
          myImage.setAttribute('src', 'images/pic1.JPG');
        }
    }
    function setHeading(Lisa){
        let myHeading = document.querySelector('h1');
        myHeading.textContent = 'Hello!' + Lisa + '!';
    }
    function setUserName(){
        let myName = prompt('请输入你的名字');
        localStorage.setItem('name', myName);
        setHeading(myName);
    }
    let storedName = localStorage.getItem('name');
    if(!storedName){
        setUserName();
    } else{
        setHeading(storedName);
    }
    let myButton = document.querySelector('button');
    myButton.onclick = setUserName;
};