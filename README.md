# README

## Run PostgreSQL server

```sh
docker run -d --name postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=test public.ecr.aws/docker/library/postgres:12
```

## Generate a migration

```sh
npm run typeorm:ts:generate src/migrations/<任意の名前>
```

## Run a migration

```sh
npm run typeorm:ts:run
```

or 

```sh
npm run build
npm run typeorm:ci:run
```
