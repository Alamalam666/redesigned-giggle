document.getElementById("videoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = "جاري تجهيز الفيديو... الرجاء الانتظار قليلاً.";
  setTimeout(() => {
    messageDiv.textContent = "تم استلام الطلب بنجاح! سيتم إرسال الفيديو قريباً.";
  }, 3000);
});