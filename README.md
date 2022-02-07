# Easy Graphql Server Connected to PostgreSQL Databse

---

## Using: 
- [express](https://expressjs.com/)
- [postgraphile](https://www.graphile.org/postgraphile/)
- [postgresql](https://www.postgresql.org/)

## Notes

To make this even easier you can run the database in a [docker container](https://hub.docker.com/_/postgres) using the following commands

```bash

docker pull postgres
docker run -d --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres

```