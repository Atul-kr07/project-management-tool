# 📌 Project Management Tool  

A **modern web application** built with **React and Vite** to help you **manage projects and tasks efficiently**.  
This tool is designed to **streamline workflow**, offering features like **task tracking, project overviews, detailed reports, and customizable settings**.  

---

## 🚀 Features  

👉 **Project Overview** – View all projects at a glance.  
👉 **Task Management** – Create, assign, and track tasks.  
👉 **Task Status** – Mark tasks as *To Do, In Progress, or Completed*.  
👉 **Quick Actions** – Easily add tasks and projects.  
👉 **Dark/Light Mode Toggle** – Switch themes dynamically.  
👉 **Search & Filters** – Quickly find projects and tasks.  
👉 **Graphical Reports** – Visual representation of project progress.  

---

## 🛠️ Tech Stack  

- **Frontend**: React (Vite) + Bootstrap  
- **State Management**: Context API  
- **Routing**: React Router DOM  
- **Backend**: Express.js (MERN Stack)  
- **Database**: MongoDB  

---

## ⚙️ Installation & Setup  

Follow these steps to **install and run both frontend & backend** in one go.  

### 🔹 Step 1: Clone the Repository  
```sh
# Clone the repository
git clone https://github.com/your-username/project-management-tool.git  
cd project-management-tool  
```

### 🔹 Step 2: Setup Frontend  
```sh
# Install frontend dependencies
npm install  

# Start the frontend development server
npm run dev  
# Open http://localhost:5173 in your browser  
```

### 🔹 Step 3: Setup Backend  
```sh
# Navigate to backend folder
cd backend  

# Install backend dependencies
npm install  

# Create an .env file for environment variables
echo "PORT=5000\nMONGO_URI=your_mongodb_connection_string\nJWT_SECRET=your_secret_key" > .env  

# Start the backend server
npm run server  
# API will run at http://localhost:5000  
```

---

## 🔧 Usage Guide  

1. **Visit** `http://localhost:5173` to access the web app.  
2. **Create a new project** and start adding tasks.  
3. **Track progress** using task statuses and graphical reports.  
4. **Use search & filters** for easy navigation.  
5. **Toggle between light/dark mode** for better visibility.  

---

## 📉 API Endpoints  

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/projects` | GET | Fetch all projects |
| `/api/projects` | POST | Create a new project |
| `/api/tasks` | GET | Fetch all tasks |
| `/api/tasks` | POST | Create a new task |
| `/api/tasks/:id` | PUT | Update a task |
| `/api/tasks/:id` | DELETE | Delete a task |

---



---

## 👨‍💻 Author  

Developed by **Atul Kumar**. Connect with me on **[GitHub](https://github.com/Atul-kr007)**.  

