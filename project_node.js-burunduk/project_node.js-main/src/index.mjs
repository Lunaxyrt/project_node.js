import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})

const errors = validateLogin({ email, password });

if (Object.keys(errors).length > 0) {
  console.log("Validation failed:", errors);
} else {
  console.log("Validation passed");
}
