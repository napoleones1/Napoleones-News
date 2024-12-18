document.getElementById("submitComment").addEventListener("click", function () {
    const commentBox = document.getElementById("commentBox");
    const feedbackMessage = document.getElementById("feedbackMessage");
  
    // Validasi apakah form kosong
    if (commentBox.value.trim() === "") {
      // Tampilkan pesan di bawah form dan popup
      feedbackMessage.style.color = "red";
      feedbackMessage.textContent = "Form tidak boleh kosong!";
      alert("Form tidak boleh kosong!"); // Popup alert
    } else {
      // Tampilkan pesan sukses di bawah form dan popup
      feedbackMessage.style.color = "green";
      feedbackMessage.textContent = "Komentar berhasil dikirim!";
      alert("Komentar berhasil dikirim!"); // Popup alert
      commentBox.value = ""; // Kosongkan textarea setelah berhasil
    }
  });
  