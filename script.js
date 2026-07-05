const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const jobTitle = form.jobTitle.value.trim();
    const company = form.company.value.trim();
    const email = form.BusinessEmail.value.trim();
    const country = form.country.value;

    if (!firstName || !lastName || !jobTitle || !company || !email) {
        alert("Please fill in all required fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid business email.");
        return;
    }

    const formData = {
        firstName,
        lastName,
        jobTitle,
        company,
        email,
        country,
    };

    console.log("Registration Data:", formData);

    alert("Registration submitted successfully!");

    form.reset();
});