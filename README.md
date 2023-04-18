

## Description

The project is example for jwt and refresh token.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test Route
### [Vercel Url](https://nestjs-jwt-with-refresh.vercel.app)

| Method     | URI                               | Request                                                  | Response                        |
|------------|------------------------------------------------|-----------------------------------------------|----------------------------------|
| `POST`     | `login`                        | `{ username:"john", password:"doe",remember_me: true or false }` | `{ access_token: "eyJhbGc...", refresh_token: it depends on remember_me}`
| `GET` | `user`                        | `HEADER -> Authorization -> "Bearer access_token"`   | `{ username: "john" }`
| `POST` | `refresh-token`                   | ` {refresh_token: "eyJhbGciOiJIUz....."} `    |  `{ access_token: "eyJhb..."}`



Project is [MIT licensed](LICENSE).
