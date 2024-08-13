# Game Review

Developed a dynamic website using TypeScript and React, allowing users to view reviews of PC games. Integrated with Firebase for Firestore Database, Storage, Authentication and Hosting. Only the administrator can add, editing, deliting reviews. Game information includes the title, genre, review, and rating. The rating color can change based on the score. Users can search for games by title.

 - Language: TypeScript;
 - Libraries: React, zustand, styled-components, react-icons, smastrom/react-rating;
 - Utilities: uuid;

Running the Project:

1) Install Dependencies:
  -  `yarn`
2) Set Up Environment Variables:
 - Create a file named `.env.local` based on the `.env.local.example` file.
3) Configure Firebase Firestore:
 - Go to the Firebase Console and set up Firestore Database.
 - Ensure your Firestore rules are correctly configured to allow read and write access for testing.
4) Configure Firebase Authentication:
 - Enable Email/Password authentication in your Firebase project.
 - Add a test user account to your Firebase Authentication for testing purposes.
5) Set Up Firebase Storage:
 - Go to the Firebase Console and set up Firestore Storage.
 - Ensure your Firestore rules are correctly configured to allow read and write access for testing.
6) Start the Development Server:
 - `yarn dev`

Additional Notes
 - Authentication: Only administrators can manage reviews. Ensure you have the correct Firebase Authentication setup. Use the test user account you created in Firebase Authentication to test functionality.
 - Login Panel: To open the login panel, click on the bottom CRATER MOON icon.
