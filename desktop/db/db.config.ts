import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, 'todolist.db');

const db = new Database(dbPath);
// db.prepare('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)').run();
db.pragma('journal_mode = WAL');

console.log('✅ SQLite connected:', dbPath);

// db.prepare('INSERT INTO users (name) VALUES (?)').run('Aina');
// const users = db.prepare('SELECT * FROM users').all();

// console.log(users);
