document
  .getElementById("confirmationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;

    let responseMessage = "";
    if (attendance === "Hadir") {
      responseMessage = `Terima kasih, ${name}. Kami sangat senang Anda akan hadir! 🎊`;
    } else if (attendance === "Tidak Hadir") {
      responseMessage = `Terima kasih, ${name}. Kami berharap dapat bertemu di kesempatan lain.`;
    }

    const responseBox = document.getElementById("responseMessage");
    responseBox.textContent = responseMessage;
    responseBox.style.animation = "fadeIn 1.5s ease-in-out";
  });
