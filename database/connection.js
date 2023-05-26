const { Pool } = require('pg');
const supabaseLib = require('@supabase/supabase-js');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1945',
    database: 'firstapi',
    port: '5432'
})

const poolAws = new Pool({
    host: 'database-2.chw0jjnrseac.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'Sanipez.006767',
    database: 'postgres',
    port: '5432'
})

const supabase = supabaseLib.createClient(
    'https://vibwwlefadzutwtqmogc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYnd3bGVmYWR6dXR3dHFtb2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MDk5NDEsImV4cCI6MjAwMDM4NTk0MX0.2X-Skd9BlgLdUEsoi5Q_yCKF5n19qaQB8U5eZYOomI0',
  );

module.exports = {
    pool,
    poolAws,
    supabase
};