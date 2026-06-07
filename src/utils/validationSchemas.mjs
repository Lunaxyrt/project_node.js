export function validateRegistration(data) {
    const errors = {};

<<<<<<< HEAD
=======
    // username
>>>>>>> 9081d7c8c23f3f456dd1c5553a812d9931b1885a
    if (!data.username || data.username.trim().length < 5) {
        errors.username = "Username має бути мінімум 5 символи";
    }

<<<<<<< HEAD
=======
    // password
>>>>>>> 9081d7c8c23f3f456dd1c5553a812d9931b1885a
    if (!data.password || data.password.length < 8) {
        errors.password = "Пароль має бути мінімум 8 символів";
    }

<<<<<<< HEAD
=======
    // confirmPassword
>>>>>>> 9081d7c8c23f3f456dd1c5553a812d9931b1885a
    if (data.password !== data.confirmPassword) {
        errors.confirmPassword = "Паролі не співпадають";
    }

<<<<<<< HEAD
=======
    // email
>>>>>>> 9081d7c8c23f3f456dd1c5553a812d9931b1885a
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailPattern.test(data.email)) {
        errors.email = "Некоректний email";
    }

<<<<<<< HEAD
=======
    // confirmEmail
>>>>>>> 9081d7c8c23f3f456dd1c5553a812d9931b1885a
    if (data.email !== data.confirmEmail) {
        errors.confirmEmail = "Email не співпадає";
    }

    return errors;
}
