var penulisan_nama = prompt("Tuliskan nama Anda:", " ");
document.getElementById("nama-user").innerText=penulisan_nama;


document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    const name  = document.getElementById("name").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value || "Tidak dipilih";
    const phone  = document.getElementById("phone").value;
    const email  = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const resultHTML = `
    Nama : ${name} <br>
    Nomor Telepon : ${phone} <br>
    E-mail : ${email} <br>
    Pesan:<br> ${message} <br>
    `;
    
    document.getElementById("result").innerHTML=resultHTML;
});

   