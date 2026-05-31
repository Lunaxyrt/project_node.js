import sqlite3 from 'sqlite3'
sqlite3.verbose()

const db = new sqlite3.Database('./database/mydatabase.db')

export default db
