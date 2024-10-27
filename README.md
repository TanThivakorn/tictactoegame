# TIC-TAC-TOE App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The app allows users to play Tic Tac Toe with bot and keeps track fo scores.

## Features

- **Tic Tac Toe Game**: Play a quick game of Tic Tac Toe on your browser.
- **Score Tracking**: Keeps track of player scores with win streak and get some bonus scores.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/TanThivakorn/tictactoegame.git
   cd tictactoegame
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup**:
   This project uses Google Login via OAuth 2.0. You’ll need to set up environment variables in a `.env.local` file before running the project.

    ### Google OAuth Setup

    1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project or select an existing one.
    2. Navigate to **APIs & Services** > **Credentials** and click on **Create Credentials** > **OAuth client ID**.
    3. Configure the OAuth consent screen, then select **Web application** as the Application type.
    4. Specify your **Authorized redirect URIs** (e.g., `http://localhost:3000/auth/callback` for local development).
    5. After creating, copy the **Client ID** and **Client Secret**.

    ### Setting Up the `.env.local` File

    Create a `.env.local` file in the project’s root directory and add the following values:

    ```plaintext
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

4. **Run the app**:
    ```bash
    npm run start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
