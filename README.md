# My personal npm - Lucas Fraga.

npm use for ulucasfraga.


## Context table

Index `README`.

  - [Setup](#setup)
  - [Installation](#installation)
  - [How to use](#how-to-use)
  - [Run Locally](#run-locally)
  - [Demo](#demo)
  - [Author](#author)
  - [Support](#support)
  - [License](#license)

### Setup

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

### Installation

> Please make sure that you are using NodeJS version v18.12.1

Assuming that you are using `nvm`, please run the commands inside this folder:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
```

In Windows, please install NodeJS using one of these options:

Via `NVM Windows` package: Dowload via [this link](https://github.com/coreybutler/nvm-windows). After that, run the commands:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
```

Via Chocolatey:

```bash
$ choco install nodejs.install -version v18.12.1
```

### How to use

Via npx:

```js
$ npx unistall ulucasfraga
$ npx i ulucasfraga
$ npx ulucasfraga
```

### Run locally

```js
$ npm start # prints the personal npm
```

or

```js
$ node ./bin/card.js # prints the personal npm
```

## Demo

![npx ulucasfraga](./docs/npx_ulucasfraga.gif)

## Author

**Lucas Fraga (ulucasfraga)**

- <https://twitter.com/ulucasfraga>
- <http://github.com/ulucasfraga>
- 

### Support

- Linkedin: <a href="https://www.linkedin.com/in/ulucasfraga/" target="_blank">**Lucas Fraga**</a>
- Email: ulucasfraga@gmail.com
-----------------------

### License

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2023 © <a href="https://github.com/ulucasfraga" target="_blank">@ulucasfraga</a>
