# Table of Contents

- [Prerequisites](#prerequisites)
- [Cloning the repository](#cloning-the-repository)
- [Installing dependencies](#installing-dependencies)
- [Setting up the environment](#setting-up-the-environment)
- [Running the development server](#running-the-development-server)

## Prerequisites

### Linux or Windows Subsystem for Linux (WSL)

- Consistent development environment across platforms
- Access to a wider range of tools and utilities
- Better performance for certain tasks

> While it is possible to work in windows, note that some tools like nvm (Node Version Manager) may not be as straightforward to install and use.

## Cloning the repository

`git clone git@github.com:abhishek-kumar2-TA/ta-template.git`

## Installing dependencies

`npm install`

## Setting up the environment

- Create a .env file in the root directory of your project.
- Add the following line to the .env file:<br/>
  `JWT_SECRET=JWT_SECRET`
- This will be used for local backend mock server.

## Running the development server

`npm start`

This will start frontend code on `http://localhost:3000/` and backend mock server on `http://localhost:3010/`
