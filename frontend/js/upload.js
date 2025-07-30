const API_URL = "http://localhost:5000/api/docs/upload";
const token = localStorage.getItem("token");

if (!token) {
    console.log("No token found, redirecting to login page.");
  window.location = "../index.html";
}

const msg = document.getElementById("msg");
const uploadForm = document.getElementById("uploadForm");
const logoutBtn = document.getElementById("logoutBtn"); // Get Logout Button

// ✅ Handle file upload
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("file", document.getElementById("file").files[0]);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const data = await res.json();
    msg.innerText = data.message || data.error;

    if (data.message) {
      setTimeout(() => (window.location = "dashboard.html"), 1000);
    }
  } catch (error) {
    msg.innerText = "Upload failed. Please try again.";
    console.error("Error uploading file:", error);
  }
});

// ✅ Handle Logout
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    console.log("User logged out");
    window.location.href = "../index.html";
  });
}
