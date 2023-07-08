const { createClient } = require('@supabase/supabase-js');

const DB_URL = process.env.DB_URL;
const DB_KEY = process.env.DB_KEY;

const database = createClient(DB_URL, DB_KEY);

module.exports = database;
