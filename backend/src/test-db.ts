import { pool } from "./lib/db";

async function test() {
  const res = await pool.query("SELECT NOW()");
  console.log("DB connected:", res.rows[0]); 
}

test();
