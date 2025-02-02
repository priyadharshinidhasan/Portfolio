// Smooth scrolling to sections
function navigateTo(section) {
  document.getElementById(section).scrollIntoView({ behavior: "smooth" });

  // Remove 'active' class from all links
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => link.classList.remove('active'));

  // Add 'active' class to the clicked link
  const activeLink = document.querySelector(`nav ul li a[href="#${section}"]`);
  if (activeLink) {
      activeLink.classList.add('active');
  }
}

// Function to download the resume file
function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf"; // Ensure this file is in your project folder
  link.download = "My_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Capture form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Save data to Local Storage (alternative: send to backend)
  let contactMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
  contactMessages.push({ name, email, message });
  localStorage.setItem("contactMessages", JSON.stringify(contactMessages));

  // Clear form fields
  document.getElementById("contact-form").reset();

  alert("Your message has been recorded successfully!");
});

// Function to download a sample CSV file
function downloadCSV() {
  const csvContent = "data:text/csv;charset=utf-8,Name,Description,Link\nProject1,Description1,https://project1.com\nProject2,Description2,https://project2.com";
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "projects.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
