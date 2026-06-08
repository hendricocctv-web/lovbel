# Lovbel - Modern Love Connection App

A beautiful and modern web application for connecting people and building meaningful relationships.

## 🎨 Features

- **Smart Matching**: AI-powered algorithm to find compatible partners
- **User Profiles**: Create and customize your profile with interests and bio
- **Discovery**: Browse and like profiles of potential matches
- **Matches**: View all your matches and start conversations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient designs and smooth animations
- **User Authentication**: Login and sign-up functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hendricocctv-web/lovbel.git
cd lovbel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
lovbel/
├── src/
│   ├── components/
│   │   └── Layout.tsx          # Main layout with navigation
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── Login.tsx           # Login/Sign-up page
│   │   ├── Dashboard.tsx       # Profile discovery
│   │   └── Profile.tsx         # User profile management
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                      # Static assets
├── package.json                # Project dependencies
├── tailwind.config.js          # Tailwind CSS config
├── vite.config.ts              # Vite config
└── tsconfig.json               # TypeScript config
```

## 💻 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: React Hooks

## 🎯 Pages

### Home (`/`)
Landing page with features, benefits, and call-to-action buttons.

### Login (`/login`)
User authentication with login and sign-up forms. Demo mode enabled - use any email/password to test.

### Dashboard (`/dashboard`)
- Browse and discover profiles
- Like or skip profiles
- View your matches
- See activity statistics

### Profile (`/profile`)
- View and edit your profile information
- Manage interests
- View profile statistics
- Account settings

## 🔐 Demo Credentials

The app runs in **demo mode**. You can use any email and password to test:
- Email: `demo@example.com`
- Password: `password123`

Or create your own account during sign-up.

## 💡 Features Highlights

### Smart Profile Matching
- AI-powered matching based on interests
- Compatibility indicators
- Profile quality score

### Modern UI/UX
- Responsive grid layouts
- Smooth animations and transitions
- Gradient backgrounds
- Mobile-first design

### User Engagement
- Real-time match notifications
- Like/pass interaction system
- Match history and statistics
- Interest-based filtering

## 🎨 Customization

### Colors
Edit the Tailwind config in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#FF1493',    // Primary pink
      secondary: '#FF69B4',  // Secondary pink
    },
  },
}
```

### Content
Modify mock profiles in `src/pages/Dashboard.tsx` for different data.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Support

For support, open an issue on GitHub or contact the development team.

## 👨‍💻 Author

Created with ❤️ by hendricocctv-web

---

**Happy Matching! 💕**
