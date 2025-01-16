let nameInput = document.getElementById('name-input')

document.getElementById('kirim').addEventListener("click", function() {
    const nama = nameInput.value

    if (usergreeting == "") {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong"
    } else {
        document.getElementById('usergreeting').innerHTML = nama
    }

    
})