# 

## Introduction

Welcome to our full-stack application, featuring a GoLang backend server for user authentication and data management, along with a React frontend for intuitive user interaction. This application seamlessly integrates backend APIs with a frontend interface, providing users with a robust and secure experience.

## Features

### Backend Server

- User Authentication: Provides endpoints for user registration, login, and authentication.
- Data Management: Manages user accounts and post data, seamlessly integrated with PostgreSQL database.
- Scalability: Designed to handle large-scale applications with high performance and scalability.

### React Frontend

- User Interface: Offers an intuitive and user-friendly interface for interacting with the backend APIs.
- Responsive Design: Adapts to various screen sizes, ensuring accessibility across different devices.
- Real-time Updates: Updates data in real-time, providing users with a dynamic experience.

## Installation

1. Clone the backend repository:

```bash
git clone https://github.com/Tanmay-312/Login-Page_GO-React_Tailwind_Postgresql.git
```

2. Install dependencies, both commands in 2 different terminals, one of client folder, other of server folder:

```bash
cd ./client
npm install
```

```bash
cd ./server
go mod tidy
```

3. Set up PostgreSQL database:

- Create a PostgreSQL database named `stocksdb`.
- Set up the database connection configuration in the `main.go` file.

4. Run the server, both commands in 2 different terminals, one of client folder, other of server folder:

```bash
cd ./client
npm start
```

```bash
cd ./server
go run main.go
```

## Usage

- Register a new user: Access the registration page and provide username and password.
- Login: Access the login page and provide username and password to authenticate.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
