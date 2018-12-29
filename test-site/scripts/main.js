var myImg = document.querySelector('img');
    myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');
    if( mySrc ==='images/\karpaga-vinayagar-1.jpg')
        myImg.setAttribute('src','images/\karpaga-vinayagar-2.jpg');
    else
        myImg.setAttribute('src','images/\karpaga-vinayagar-1.jpg');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello! Computer';


function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

function setUserName(){
    var myName = prompt('please enter your name');
    if(storageAvailable('localStorage')){
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to darshan, ' + myName;
    }else{
    alert('no local store');
    }
}

myButton.onclick = function(){
    setUserName();
}