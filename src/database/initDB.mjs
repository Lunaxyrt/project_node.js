import sqlite3 from 'sqlite3'
sqlite3.verbose()

const db = new sqlite3.Database('./database.db')

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT,
            email TEXT UNIQUE
        )
    `)
})

console.log("Database initialized")
db.close()
