function initForm() {
    const form = document.querySelector(".feedback-form");

    const STORAGE_KEY = "feedback-form-state";

    let formData = {
        email: "",
        message: "",
    };

    function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
        return;
    }

    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
    }

    function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }

    form.addEventListener("input", function(event) {
    const name = event.target.name;
    const value = event.target.value.trim();

    formData[name] = value;

    saveFormData();
    });

    form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);

    formData = {
        email: "",
        message: "",
    };

    form.reset();
    });

    loadFormData();
}

initForm();