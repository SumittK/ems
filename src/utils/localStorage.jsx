const employees =  [
    {
      "id": 1,
      "email": "rahul.sharma@example.com",
      "password": "123",
      "tasks": [
        {
          "newTask": true,
          "Failed": false,
          "completed": false,
          "pending": true,
          "date": "2025-10-25",
          "category": "design",
          "description": "Create a new landing page UI"
        },
        {
          "newTask": false,
          "Failed": true,
          "completed": false,
          "pending": false,
          "date": "2025-10-20",
          "category": "development",
          "description": "Fix login API issue"
        },
        {
          "newTask": false,
          "Failed": false,
          "completed": true,
          "pending": false,
          "date": "2025-10-22",
          "category": "testing",
          "description": "Test user registration workflow"
        }
      ]
    },
    {
      "id": 2,
      "email": "neha.patel@example.com",
      "password": "123",
      "tasks": [
        {
          "newTask": true,
          "Failed": false,
          "completed": false,
          "pending": true,
          "date": "2025-10-24",
          "category": "development",
          "description": "Implement responsive navbar"
        },
        {
          "newTask": false,
          "Failed": false,
          "completed": true,
          "pending": false,
          "date": "2025-10-21",
          "category": "design",
          "description": "Update dashboard UI"
        }
      ]
    },
    {
      "id": 3,
      "email": "arjun.singh@example.com",
      "password": "123",
      "tasks": [
        {
          "newTask": true,
          "Failed": false,
          "completed": false,
          "pending": true,
          "date": "2025-10-23",
          "category": "testing",
          "description": "Regression test for payment module"
        },
        {
          "newTask": false,
          "Failed": true,
          "completed": false,
          "pending": false,
          "date": "2025-10-19",
          "category": "development",
          "description": "Fix broken links in app"
        },
        {
          "newTask": false,
          "Failed": false,
          "completed": true,
          "pending": false,
          "date": "2025-10-20",
          "category": "design",
          "description": "Redesign profile page"
        },
        {
          "newTask": false,
          "Failed": false,
          "completed": false,
          "pending": true,
          "date": "2025-10-22",
          "category": "management",
          "description": "Prepare weekly report"
        }
      ]
    },
    {
      "id": 4,
      "email": "priya.kapoor@example.com",
      "password": "123",
      "tasks": [
        {
          "newTask": true,
          "Failed": false,
          "completed": false,
          "pending": true,
          "date": "2025-10-24",
          "category": "design",
          "description": "Create icons for new features"
        },
        {
          "newTask": false,
          "Failed": true,
          "completed": false,
          "pending": false,
          "date": "2025-10-21",
          "category": "development",
          "description": "Resolve API integration issues"
        }
      ]
    },
    {
      "id": 5,
      "email": "amit.kumar@example.com",
      "password": "123",
      "tasks": [
        {
          "newTask": true,
          "Failed": false,
          "completed": false,
          "pending": true,
          "date": "2025-10-25",
          "category": "testing",
          "description": "Test search functionality"
        },
        {
          "newTask": false,
          "Failed": false,
          "completed": true,
          "pending": false,
          "date": "2025-10-22",
          "category": "design",
          "description": "Update color scheme for dashboard"
        },
        {
          "newTask": false,
          "Failed": false,
          "completed": false,
          "pending": true,
          "date": "2025-10-23",
          "category": "development",
          "description": "Add form validation for signup"
        }
      ]
    }
  ]


  

  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]

  export const setLocalStorage= ()=>{
     localStorage.setItem("employees" , JSON.stringify(employees));
     localStorage.setItem("admin" ,  JSON.stringify(admin));
  }

  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin")) ;

    return {employees , admin};
  }
  
  