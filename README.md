<h1 align="center">Expense Tracker App (RN-PERN)</h1>

<div align="center">
  <a href="https://github.com/soumadip-dev">
    <img src="https://skillicons.dev/icons?i=react,typescript,tailwindcss,nodejs,express,postgres,redis,github" alt="Tech Stack" width="350" style="padding: 15px 0;">
  </a>
</div>

<h3 align="center">
  A cross-platform expense tracker app built with React Native (Expo) and Node.js. Track income & expenses, manage transactions, and monitor balance in real time.
</h3>

<p align="center"><strong>⚠️ Currently building…</strong></p>

---

## ⭐ Features (Planned)

- **User Authentication**: Signup and login using Clerk authentication.
- **Email Verification**: Secure 6-digit verification code before accessing the app.
- **5 Screens**: Signup, Login, Verify Email, Home, and Create Transaction.
- **Expense Tracker**: Add income or expenses and manage financial entries. _(planned)_
- **Live Balance Updates**: Current balance calculated dynamically. _(planned)_
- **Delete Transactions**: Remove old entries with a single tap. _(planned)_
- **Pull-to-Refresh**: Classic refresh gesture implemented from scratch. _(planned)_
- **Logout**: Easily switch accounts or sign out.
- **Rate Limiting**: Redis-based protection for API endpoints. _(planned)_
- **Backend**: Express RESTful API connected to Neon-hosted Postgres. _(planned)_
- **Cloud Deployment**: Fully hosted backend for mobile access. _(planned)_
- **Beginner Friendly**: No prior React Native experience required.
- **Free Tools**: 100% free stack for development and testing.

---

## 🛠️ Tech Stack

- **Frontend**: React Native, Expo, TypeScript, Tailwind CSS
- **Backend**: Node.js with Express – RESTful API
- **Database**: PostgreSQL hosted on Neon
- **Caching & Rate Limiting**: Redis
- **Authentication**: Clerk
- **Cloud Deployment**: Backend hosted online, accessible by mobile

---

<!--
## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Neon PostgreSQL database
- Redis server

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/soumadip-dev/ExpenseTracker-RN-PERN.git
   cd ExpenseTracker-RN-PERN
````

2. **Backend Setup**

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the `server` directory with:

   ```env
   PORT=8080
   DATABASE_URL=<YOUR_NEON_POSTGRES_URL>
   REDIS_URL=<YOUR_REDIS_URL>
   JWT_SECRET=<YOUR_SECRET_KEY>
   NODE_ENV=development
   ```

3. **Frontend Setup**

   ```bash
   cd ../client
   npm install
   ```

   Create a `.env` file in the `client` directory with:

   ```env
   VITE_BACKEND_URL=<YOUR_BACKEND_URL>
   CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
   ```

4. **Run the Application**

   - Backend (Terminal 1):

     ```bash
     cd server
     npm run dev
     ```

   - Frontend (Terminal 2):

     ```bash
     cd ../client
     expo start
     ```
-->
