<<<<<<< HEAD
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.mjs";
import initDB from "./database/db.mjs";

const app = express();
const PORT = 3000;

// Allow frontend (127.0.0.1:5500) to access backend (localhost:3000)
app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

initDB();
=======
import express from 'express'
import db from './db.mjs'
import initDB from './src/database/initDB.mjs'

initDB()

const app = express()
app.use(express.json())

app.post('/register', (req, res) => {
    const { username, password, email } = req.body

    db.run(
        `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`,
        [username, password, email],
        function (err) {
            if (err) {
                return res.status(400).json({ error: err.message })
            }
            res.json({ success: true, id: this.lastID })
        }
    )
})

app.listen(3000, () => console.log('Server running'))
>>>>>>> 9081d7c8c23f3f456dd1c5553a812d9931b1885a
