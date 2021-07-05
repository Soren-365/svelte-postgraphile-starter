#!/usr/bin/env node
if (
  !(
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "development"
  )
) {
  console.error(
    "Error: .env variable NODE_ENV must be either 'production' or 'development' but is:",
    process.env.NODE_ENV
  );
  throw Error("checkEnv.ts Error");
} else if (
  !(
    process.env.POSTGRESQL_PASS)
) {
  console.error(
    "Error: please set a postgres password for local database in .env: ex.:POSTGRESQL_PASS=cursuri_pass"
  );
  throw Error("checkEnv.ts Error");
} else {
  console.log(`the root .env file consistency was checked. You are in the ${process.env.NODE_ENV} environment mode `);
}
