# nutri_synth - A mobile app, which generates custom meal plans using AI based on the ever-changing physiology of a person.

#### Description:

A mobile app, which generates custom meal plans using AI based on the ever-changing physiology of a person.

#### Features:

1. **Customizability:** Users can change custom options inserted by AI based on their personal details, medical information, weight target, fasting & meal preparation type.
2. **AI Integration:** Users receive meal plan instructions & image using the help of OpenAI API's.
3. **Interaction with AI:** Users can interact with AI by discussing their toughts about the current meal plan, and the AI can offer some changes.
4. **User Authentication:** To ensure data privacy, the app implements password hashing using bcrypt's security library for user authentication.
5. **Minimalistic Design:** The app's design focuses on simplicity and ease of use, providing users with a clean and intuitive interface to make the exercise logging process hassle-free.


#### Challenges Faced:

During development, one of the main challenges was to display data in different relations and properly link different datatables for displaying many diferrent topics, their comments and likes/dislikes. To overcome this, the project employed table joins in SQL to establish the necessary connections between the workout data and exercise details.


#### Technologies Used:

1. React-Native: The web application is built using React-Native, a front-end mobile framework in Javascript, to handle routing and HTTP requests.
2. PostgreSQL: This library is utilized to interact with the  database, allowing for efficient storage and retrieval of exercise and user data.
3. Bcrypt: Used for password hashing to securely store user credentials in the database.
4. JavaScript: To enhance the user experience, JavaScript is incorporated to generate interactive charts for visualizing workout progress.


#### Design Choices:

The design of the nutri_synth prioritizes simplicity and usability, as the main objective was to create a user-friendly and minimalistic meal planner.


#### Instructions:

To run nutri_synth, follow these steps:  

1. Ensure you have Node and React installed on your system.
2. Clone the project repository to your local machine.
3. Open a terminal and navigate to the project directory.
4. Go to client & server directories separatelly and run ``` npm install ``` to install the necesarry dependencies.
6. Set up the PostgreSQL database by running the provided commands in the data.sql file.
6. Set up the necesarry .env variables inside server/config folder (USERNAME, PASSWORD, HOST, DBPORT, DATABASE, PORT).
8. Access the application by using Expo on your device/simulator.

#### Additional Information:

nutri_synth was developed as part of a personal project to enhance programming skills while building a practical and useful application. The app is still a work in progress, and future updates may include more features, such as workout plan customization and social sharing capabilities. Feedback and suggestions are always welcome to improve the app further.
