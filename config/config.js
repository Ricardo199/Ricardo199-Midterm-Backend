require('dotenv').config({ path: 'secrets.env' });
const connectionString = `mongodb+srv://ricardo1529:${process.env.ATLAS_DB_PASSWORD}@midterm.fuok2.mongodb.net/?retryWrites=true&w=majority&appName=Midterm`;
module.exports = {
    "ATLASDB": connectionString
};