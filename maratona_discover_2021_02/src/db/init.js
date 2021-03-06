// Database
//
// table:
// profile
//
// fields:
// name
// avatar
// "monthly-budget"
// "days-per-week"
// "hours-per-day"
// "vacation-per-year"
// "costs-per-hour"
//
// records:
// "Marcelo"
// "http://github.com/marcelosperalta.png"
// ...

// ************************************ //
//                EXECUTE               //
//                                      //
// cd src/db                            //
// node init.js                         //
//                                      //
// or                                   //
//                                      //
// npm run init-db                      //
//                                      //
// ************************************ //

const Database = require('./config')

const initDb = {

    async init() {

        // open database
        const db = await Database()

        await db.exec(` 
            CREATE TABLE profile (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                avatar TEXT,
                monthly_budget INT,
                days_per_week INT,
                hours_per_day INT,
                vacation_per_year INT,
                costs_per_hour INT
            )
        `);

        await db.exec(`
            CREATE TABLE jobs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                daily_hours INT,
                total_hours INT,
                created_at DATETIME
            )
        `);

        await db.run(`
            INSERT INTO profile (
                name,
                avatar,
                monthly_budget,
                days_per_week,
                hours_per_day,
                vacation_per_year,
                costs_per_hour
            ) VALUES (
                "Marcelo",
                "http://github.com/marcelosperalta.png",
                3000,
                5,
                5,
                4,
                75
            )
        `);

        await db.run(`
            INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                created_at
            ) VALUES (
                "Project 1",
                2,
                2,
                1618773898919
            )
        `);

        await db.run(`
            INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                created_at
            ) VALUES (
                "Project 2",
                3,
                47,
                1618773977594
            )
        `);

        // close Database
        await db.close()

    }

}

initDb.init()