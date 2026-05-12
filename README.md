# 📚 Student Management System (ASP.NET Core Web API)

A full-stack Student Management System built using **ASP.NET Core Web API**, **SQL Server**, and **JWT Authentication**, following a clean layered architecture.

---

## 🚀 Features

* 🔐 JWT Authentication (Login & Secure APIs)
* 📚 Student CRUD Operations
* 🧱 Layered Architecture (Controller → Service → Repository)
* ⚠️ Global Exception Handling Middleware
* 📊 Serilog Logging (File + Console)
* 🧾 DTO Pattern for clean data transfer
* 📖 Swagger API Documentation
* 🗄️ SQL Server Database Integration

---

## 🏗️ Tech Stack

* ASP.NET Core Web API (.NET 8)
* Entity Framework Core
* SQL Server
* JWT Authentication
* Serilog
* Swagger (OpenAPI)

---

## 📂 Project Structure

```
StudentManagement.API
│
├── Controllers
├── Services
├── Repositories
├── DTOs
├── Models
├── Data
├── Middleware
├── appsettings.json
└── Program.cs
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/StudentManagementSystem.git
cd StudentManagementSystem
```

---

### 2. Configure Database

Update connection string in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=StudentManagementDB;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

---

### 3. Run Database Migration

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

---

### 4. Run Project

```bash
dotnet run
```

---

### 5. Open Swagger

```
https://localhost:xxxx/swagger
```

---

## 🔐 Login Credentials

```
Username: admin
Password: admin123
```

---

## 📡 API Endpoints

### Auth

* POST /api/auth/login

### Students (JWT Protected)

* GET /api/student
* GET /api/student/{id}
* POST /api/student
* PUT /api/student/{id}
* DELETE /api/student/{id}

---

## 🧪 How to Test JWT

1. Call login API
2. Copy token
3. Click "Authorize" in Swagger
4. Paste:

```
Bearer YOUR_TOKEN
```

5. Access protected APIs

---

## 📦 Database

* SQL Server
* Tables:

  * Students
  * Users

---

## 🧠 Key Concepts Used

* Repository Pattern
* Service Layer
* Dependency Injection
* Middleware Pipeline
* JWT Authentication
* DTO Pattern
* Clean Architecture

---

## 👨‍💻 Author

Ruteek Jivanwal

---
