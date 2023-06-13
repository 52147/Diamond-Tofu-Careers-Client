# Diamond Tofu Career Site

- The Diamond Tofu Career Site is a web application built with two projects: "DiamondTofu Client" for the frontend using React, and "DiamondTofu Server" for the backend using Node.js. The application utilizes Firebase Admin SDK to access data in Firestore, and both the frontend and backend communicate with each other through a RESTful API for efficient data transfer.

- The client is hosted on Firebase Hosting, while the server is deployed using Firebase Cloud Functions. 
- This web application consists of two parts: the frontend, hosted at https://diamondtofucareer.com/, and the backend, deployed at https://us-central1-diamond-tofu-career.cloudfunctions.net/api.
## RESTful API
### POST /api/login
Authenticate a user with Google Sign-In and retrieve user information.    
Request Body
```
{
  "email": "xxx@.gmail.com"
  "uid": "google-authentication-token"
}
```
token (string): The Google authentication token obtained during the Google Sign-In process.   

Response Body: role of this user.   
```
{
  "role": "1"
}
```
### POST /api/form
Submit a job application form.

Request Body
```
{
  "id": 1,
  "firstN": "John",
  "lastN": "Doe",
  "title": "Position",
  "email": "john@example.com",
  "phone": "1234567890",
  "address": "123 Main St",
  "education": "Bachelor's Degree",
  "accomplish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "visa": "Yes",
  "link": "https://example.com",
  "resume": "base64-encoded-resume-data",
  "uid": "user-uid",
  "status": "Pending",
  "apply_time": "2023-06-12T12:00:00Z"
}

```
- id (number): The ID of the application.
- firstN (string): The first name of the applicant.
- lastN (string): The last name of the applicant.
- title (string): The position/title the applicant is applying for.
- email (string): The email address of the applicant.
- phone (string): The phone number of the applicant.
- address (string): The address of the applicant.
- education (string): The educational background of the applicant.
- accomplish (string): The accomplishments or qualifications of the applicant.
- visa (string): The visa status of the applicant.
- link (string): A link to the applicant's portfolio or relevant website.
- resume (string): The base64-encoded data of the applicant's resume.
- uid (string): The unique ID of the user.
- status (string): The status of the application (e.g., "Pending").
- apply_time (string): The timestamp when the application was submitted.

Response.   
Status Code: 200 (OK)
### GET /api/resumes
Retrieve form data.
Response
Status Code: 200 (OK)
Response Body:
All user form data.
```
{ 
  {
    "id": 1,
    "firstN": "John",
    "lastN": "Doe",
    "title": "Position",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "education": "Bachelor's Degree",
    "accomplish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "visa": "Yes",
    "link": "https://example.com",
    "resume": "base64-encoded-resume-data",
    "uid": "user-uid",
    "status": "Pending",
    "apply_time": "2023-06-12T12:00:00Z"
  },
  {
    "id": 2,
    "firstN": "John",
    "lastN": "Doe",
    "title": "Position",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "education": "Bachelor's Degree",
    "accomplish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "visa": "Yes",
    "link": "https://example.com",
    "resume": "base64-encoded-resume-data",
    "uid": "user-uid",
    "status": "Pending",
    "apply_time": "2023-06-12T12:00:00Z"
  },
  {
    "id": 3,
    "firstN": "John",
    "lastN": "Doe",
    "title": "Position",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "education": "Bachelor's Degree",
    "accomplish": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "visa": "Yes",
    "link": "https://example.com",
    "resume": "base64-encoded-resume-data",
    "uid": "user-uid",
    "status": "Pending",
    "apply_time": "2023-06-12T12:00:00Z"
  },
  ...
}
```
### GET /api/profile/status?uid={uid}
Retrieve application data including title, status, apply time of all this user applications.

Query Parameters
uid (string): The unique ID of the user.
Response
Status Code: 200 (OK)

Response Body:
```
{
  {
    "title": "Full Time Software Engineer",
    "status": "Pending",
    "apply_time": "2023-06-12T12:00:00Z"
  },
  {
  "title": "Internship Software Engineer",
  "status": "Pending",
  "apply_time": "2023-06-12T12:00:00Z"
  },
  {
  "title": "Full Time Project Manager",
  "status": "Pending",
  "apply_time": "2023-06-12T12:00:00Z"
  }
}

```
### GET /api/profile?uid={uid}
Retrieve a user's profile information.

Query Parameters
uid (string): The unique ID of the user.
Response
Status Code: 200 (OK)
Response Body:
```
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "location": "Boston, MA",
  "resume": "https://example.com/resume.pdf",
  ...
}

```
## DiamondTofu Client
The DiamondTofu Client is the frontend project of the Diamond Tofu Career Site. It is developed using React, a popular JavaScript library for building user interfaces. The client project provides a user-friendly interface for job seekers to explore job listings, submit applications, and interact with the career site.

## Key Features
- Job Listings: The client project displays job listings fetched from the backend server. It presents job details such as title, description, and requirements in an organized and visually appealing manner.

- Application Submission: Job seekers can fill out an application form provided by the client project and submit their applications. The client ensures a seamless experience for applicants by validating form inputs and handling submission requests.

- User Interface: The client project emphasizes usability and responsiveness, allowing users to easily navigate the career site on various devices and screen sizes.

## DiamondTofu Server
The DiamondTofu Server is the backend project of the Diamond Tofu Career Site. It is built with Node.js, a JavaScript runtime for executing server-side applications. The server project handles data storage, retrieval, and management, leveraging the Firebase Admin SDK to interact with the Firestore database.
## Key Features
- RESTful API: The server project exposes a RESTful API that enables communication between the client and server. It follows REST principles, providing endpoints for job listings, application submission, and application management.

- Database Operations: The server project utilizes the Firebase Admin SDK to perform secure and scalable CRUD operations on the Firestore database. This includes creating job listings, storing submitted applications, and managing application data.

- Application Management: The server project includes functionality for administrators to efficiently manage job applications. This includes reviewing applications, shortlisting candidates, and providing feedback.

## Deploy Locally
To deploy and use the Diamond Tofu Career Site locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/52147/Diamond-Tofu-Careers-Client.git
git clone https://github.com/52147/Diamond-Tofu-Careers-Server.git
```
2. Install dependencies for both the client and server projects:
```
npm install
```
3. Install the Firebase Admin SDK package:
```
npm install firebase-admin --save
```
This command will download and install the Firebase Admin SDK package, enabling you to interact with Firebase services from the server-side code.
4. Run the client and server projects concurrently:
```
npm start
```
The Diamond Tofu Career Site should now be accessible at http://localhost:3000.

## Hosting
### DiamondTofu Client
The DiamondTofu Client is hosted on Firebase Hosting, which provides a fast and reliable platform for deploying static web content. Hosting on Firebase allows for easy scalability, automatic SSL certificates, and global content delivery through the Firebase Content Delivery Network (CDN).

To deploy the client project to Firebase Hosting, follow these steps:

1. Build the Diamond Tofu Career client project:
```
npm run build
```

2. Deploy to Firebase Hosting:
```
firebase deploy --only hosting
```
After a successful deployment, the DiamondTofu Client will be accessible via the provided Firebase Hosting URL. https://diamondtofucareer.com/
### DiamondTofu Server
The DiamondTofu Server is hosted using Firebase Cloud Functions, which allows for deploying serverless functions that can be triggered by HTTP requests. Hosting the server as a function enables automatic scaling, simplified server management, and cost optimization based on usage.

To deploy the server project using Firebase Cloud Functions, follow these steps:
```
firebase deploy --only functions
```
## Conclusion
The Diamond Tofu Career Site is a comprehensive web application that enhances the hiring process for Diamond Tofu. By combining the DiamondTofu Client and DiamondTofu Server projects, we have created an efficient and user-friendly platform for job seekers and administrators alike. The React-based frontend and Node.js-based backend, along with the integration of Firebase Admin SDK and RESTful API, contribute to a seamless experience and efficient data management.

We are excited to have you experience the Diamond Tofu Career Site. Please visit https://diamondtofucareer.com/ to explore job opportunities and submit applications. The backend, deployed at https://us-central1-diamond-tofu-career.cloudfunctions.net/api, ensures a seamless and reliable experience. Should you have any questions or require assistance, please feel free to reach out to us.

Thank you for choosing the Diamond Tofu Career Site!

For more information about the project or any inquiries, please feel free to contact me at debrah@bu.edu.
