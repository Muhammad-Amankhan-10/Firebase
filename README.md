
## Features

- **Firebase Authentication**: Implements user registration and login functionality using Firebase Auth.
- **Modular Structure**: Authentication functions are encapsulated and reusable across different components.
- **Dynamic Event Listeners**: Event listeners are dynamically set up for both registration and login buttons.

## How It Works

1. **Firebase Initialization (`firebase-config.js`)**: 
   - This file contains the Firebase configuration object and initializes the Firebase app. It exports the Firebase app instance which is used in other modules.
   
2. **Authentication Logic (`auth.js`)**: 
   - This file contains a `handleAuth` function that can be used for both registering and logging in a user. Based on the action passed (`'register'` or `'login'`), the appropriate Firebase authentication method is called.

3. **Main Application (`main.js`)**: 
   - The main script imports the Firebase initialization and authentication logic, then sets up event listeners for the registration and login buttons.
   - When a button is clicked, the script reads the email and password inputs and calls the `handleAuth` function with the corresponding action (`register` or `login`).

4. **UI (`index.html`)**: 
   - Simple HTML structure with input fields for the user's email and password, and buttons for registration and login. It includes event listeners set up through the `main.js` file.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- A code editor (e.g., [VS Code](https://code.visualstudio.com/))
- A local web server or [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for serving the files locally.

### Steps

1. **Clone the repository** (or download the project files).

   ```bash
   git clone https://github.com/your-username/firebase-auth-example.git
   cd firebase-auth-example
