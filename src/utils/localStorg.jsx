 localStorage.clear()
 const employees =  
 
[
    {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "firstName": "Ali",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Design Landing Page",
          "description": "Create a responsive landing page for the new campaign.",
          "date": "2024-11-16",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix Navbar Bug",
          "description": "Resolve the issue with the sticky navbar on scroll.",
          "date": "2024-11-14",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Prepare Presentation",
          "description": "Draft slides for the client meeting.",
          "date": "2024-11-20",
          "category": "Management"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstName": "Ahmed",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Test API Endpoints",
          "description": "Perform integration testing for the payment gateway.",
          "date": "2024-11-17",
          "category": "QA"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Optimize Database Queries",
          "description": "Refactor SQL queries for better performance.",
          "date": "2024-11-10",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "title": "Create Marketing Plan",
          "description": "Draft a detailed marketing strategy for Q4.",
          "date": "2024-11-15",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Team Meeting",
          "description": "Prepare agenda for the weekly team meeting.",
          "date": "2024-11-18",
          "category": "Management"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstName": "Ayesha",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Code Review",
          "description": "Review the pull requests in the project repository.",
          "date": "2024-11-16",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Write Documentation",
          "description": "Document the user flow and API integrations.",
          "date": "2024-11-19",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update CMS",
          "description": "Upgrade the content management system to the latest version.",
          "date": "2024-11-12",
          "category": "Development"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstName": "Fatima",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Plan Social Media Campaign",
          "description": "Outline posts and schedules for the December campaign.",
          "date": "2024-11-17",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Test UX Updates",
          "description": "Conduct usability tests for the new mobile UI.",
          "date": "2024-11-20",
          "category": "UX"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstName": "Hassan",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Customer Feedback Analysis",
          "description": "Analyze feedback from surveys and support tickets.",
          "date": "2024-11-16",
          "category": "Analysis"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Schedule Server Maintenance",
          "description": "Plan downtime for server updates and notify clients.",
          "date": "2024-11-15",
          "category": "IT"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "title": "Develop Chatbot",
          "description": "Create a chatbot for customer service inquiries.",
          "date": "2024-11-10",
          "category": "Development"
        }
      ],
      "taskCounts": {
        "active": 1,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      }
    }
  ]
  

const admin = [
    {
            "id": 1,
            "email": "admin@example.com",
            "password": "123"   
    }
]

// export  const setLocalStorage = ()=>{
//     console.log("setLocalStorage called");

//     localStorage.setItem('employees',JSON.stringify(employees))
//     localStorage.setItem('admin',JSON.stringify(admin))


// } 
export const setLocalStorage = () => {
    console.log("setLocalStorage called");

    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

    
};

export  const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))  
    const admin = JSON.parse(localStorage.getItem('admin'))  
    // console.log(JSON.parse(data))
   
    return {employees,admin}
    
 
};
// setLocalStorage();  // سیٹ کریں
// const data = getLocalStorage();  // ڈیٹا حاصل کریں
// console.log('Employees:', data.employees);
// console.log('Admin:', data.admin);
