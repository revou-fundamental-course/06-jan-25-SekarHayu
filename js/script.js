window.onload = function() {
    // Tampilkan pop-up untuk meminta nama pengguna
    const userName = prompt("Welcome to Plump! What's your name?");
    if (userName) {
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.textContent = `Hi ${userName}, Welcome to Plump`;
    }
};

var slideIndex = 1;  
showDivs(slideIndex);  
  
function plusDivs(n) {  
    showDivs(slideIndex += n);  
}  
  
function showDivs(n) {  
    var i;  
    var x = document.getElementsByClassName("img-slideshow");  
    if (n > x.length) {slideIndex = 1}  
    if (n < 1) {slideIndex = x.length}  
    for (i = 0; i < x.length; i++) {  
        x[i].style.display = "none";  
    }  
    x[slideIndex - 1].style.display = "block";  
}  

setInterval(function() {  
    showDivs(slideIndex += 1);  
}, 5000); 


function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;

    // Validasi nama
    if (name == "") {
        alert("Nama harus diisi!");
        return false;
    }

    // Validasi tanggal lahir
    if (birthDate == "") {
        alert("Tanggal lahir harus diisi!");
        return false;
    }

    // Validasi jenis kelamin
    if (!gender) {
        alert("Pilih jenis kelamin!");
        return false;
    }

    // Validasi pesan
    if (messages == "") {
        alert("Pesan harus diisi!");
        return false;
    }

    // Jika semua validasi berhasil, tampilkan hasil di halaman
    setSenderUI(name, birthDate, gender, messages);
    return false;  // Mencegah form untuk mengirimkan data ke server
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}
