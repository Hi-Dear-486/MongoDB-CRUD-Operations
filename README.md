<div align="center">
  <br />
    <a href="https://youtu.be/lEflo_sc82g?feature=shared" target="_blank">
      <img src="https://github.com/Hi-Dear-486/MongoDB-CRUD-Operations/blob/zeeshanBranch/mongodb-crud-operation.JPG" alt="Project Banner">
    </a>
  <br />

  <div>
   <img
  src="https://img.shields.io/badge/Next.js-0070F3?style=for-the-badge&logo=next.js&logoColor=white"
  alt="Next.js"
/>
    <img src="https://img.shields.io/badge/ShadCN-UI%20Components-red?style=for-the-badge&logo=react&logoColor=white" alt="ShadCN" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/React_Hook_Form-v7.44.2-blue?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
    <img src="https://img.shields.io/badge/Zod-Type%20Validation-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="Zod" />
    <img src="https://img.shields.io/badge/AG%20Grid-Data%20Table-blue?style=for-the-badge&logo=react&logoColor=white" alt="AG Grid" />
    <img src="https://img.shields.io/badge/-Express.js-lightgrey?style=for-the-badge&logo=express&logoColor=black" alt="express" />
    <img src="https://img.shields.io/badge/-MongoDB-green?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />

  </div>

  <h3 align="center">MongoDB-CRUD-Operations</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Execution Plan](#links)
7. 🚀 [More](#more)


## <a name="introduction">🤖 Introduction</a>

A Comprehensive Guide provides an in-depth overview of the four fundamental database operations—Create, Read, Update, and Delete. This guide covers syntax, best practices, and practical examples, enabling developers to efficiently manage and manipulate data in MongoDB, from basic commands to advanced techniques for scalable and robust applications.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **34k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- react-hook-form
- Zod
- TailwindCSS
- ShadCN
- Express js
- MongoDB

## <a name="features">🔋 Features</a>

👉 **Full-Stack Application**: Next.js aur Express.js ke through frontend aur backend ka integration.

👉 **Form Management**: React Hook Form aur Zod ke saath efficient aur validated data input.

👉 **Dynamic UI**: TailwindCSS aur ShadCN se responsive aur modern design.

👉 **Robust Data Table**: AG Grid ke saath powerful table operations.

👉 **Scalable Database**: MongoDB ke saath large datasets ko handle karne ki capability.

👉 **Validation & Security**: Zod aur middleware se secure aur reliable validation.

👉 **Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

👉 **Real-Time Functionality**: Fast API calls aur state updates for real-time experience.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- Yarn (JavaScript Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Hi-Dear-486/MongoDB-CRUD-Operations.git
cd ./
```

**Installation**

Install the project dependencies using yarn:

```bash
yarn install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
MONGO_URI = Enter MONGO_URI
PORT = Enter PORT
```

**Running the Project**

```bash
yarn  run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.mjs</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        62: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

```
</details>

<details>
<summary><code>app/globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

.gray {
  background-color: rgb(92, 98, 100);
}

.ag-header-cell-filter-button {
  background-color: white !important;
  color: gray !important;
  border-radius: 5px !important;
  padding: 5px 10px;
  cursor: pointer;
  border: 4px solid white;
}

.ag-header-cell-filter-button:hover {
  background-color: white !important;
}

```
</details>
<details>
<summary><code>lib/utils.js</code></summary>

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```
</details>

<details>
<summary><code>lib/schemas/registraionSchema.js</code></summary>

```javascript
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      {
        message:
          "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
      }
    ),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Phone number must be a valid international format.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z
    .string()
    .refine((val) => ["male", "female", "other"].includes(val), {
      message: "You need to select a notification type.",
    }),
});
```
</details>

<details>
<summary><code>lib/constants</code></summary>

```javascript
export const RADIO_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

// Column definitions
export const colDefs = [
  {
    field: "name",
    flex: 1,
    headerName: "Name",
    filter: true,
    floatingFilter: true,
    checkboxSelection: true,
  },
  {
    field: "email",
    flex: 1,
    headerName: "Email",
    filter: true,
    floatingFilter: true,
  },
  {
    field: "phone",
    flex: 1,
    headerName: "Phone Number",
    filter: true,
    floatingFilter: true,
    cellClassRules: {
      // apply green to electric cars
      "rag-green": (params) => params.value === "923497849159",
    },
  },
  {
    field: "dob",
    flex: 1,
    headerName: "Date of Birth",
    floatingFilter: true,
    valueFormatter: (item) => new Date(item.value).toLocaleDateString(),
  },
  {
    field: "gender",
    flex: 1,
    headerName: "Gender",
    filter: true,
    floatingFilter: true,
  },
];

```
</details>
<details>
<summary><code>Execution Plan</code></summary>

```javascript
Implementation Steps:
1 Initialize Project:
  Create a new Node.js project:
  npx create-next-app@latest ./

2 Install required dependencies:
yarn  add express mongoose
yarn add nodemon --dev

3 Project Setup:
🕸 Setup basic Express server.
🕸 Configure environment variables using .env file.

4 Connect to MongoDB:
🕸 Use mongoose.connect() to establish a connection with MongoDB.

5 Define Models:
🕸 Create a schema for the data you want to handle (e.g., users, posts, products).
🕸 Use Mongoose to define models.

😞 Its my mistake i am not using api/
😔 i am directly use resource

6 Implement Routes:
🕸 Create RESTful routes for each CRUD operation:
🕸 Create: POST /api/resource
🕸 Read: GET /api/resource, GET /api/resource/:id
🕸 Update: PUT /api/resource/:id
🕸 Delete: DELETE /api/resource/:id

7 Controllers:
🕸 Create controller functions to handle the business logic for each route

8 Test Endpoints:
🕸 Use tools like Postman or Thunder Client to test your API endpoints

9 Error Handling:
🕸 Implement proper error handling and validation for incoming data.

10 Run Server:
🕸 Use nodemon for development to restart the server automatically
```
</details>

## <a name="more">🚀 More</a>

**Advance your skills with Next.js 14**

Enjoyed creating this project? Dive deeper  for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://github.com/Hi-Dear-486/Movie-flix-App" target="_blank">
<img src="https://github.com/Hi-Dear-486/Movie-flix-App/blob/master/movie.JPG" alt="Project Banner">
</a>

<br />
<br />

#
