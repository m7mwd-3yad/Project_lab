const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

// التحكم في الانتقال بين النماذج (Sign In / Sign Up)
signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

// منع الإرسال الافتراضي للنموذج
firstForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value;
    const email = document.getElementById("email-signup").value;
    const password = document.getElementById("password-signup").value;
    
    console.log("Sign Up Form Submitted", { user, email, password });
});

secondForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email-signin").value;
    const password = document.getElementById("password-signin").value;
    
    console.log("Sign In Form Submitted", { email, password });
});
