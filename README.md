# [rakin.today](https://rakin.today)

A modern, interactive personal portfolio website featuring a blog-like timeline, real-time status updates, multi-language support, and delightful animations.

## 📋 Project Overview

This is a static, single-page portfolio website built with vanilla HTML, CSS, and JavaScript. It serves as a personal homepage showcasing contact information, portfolio links, wallet addresses, and a timeline of events and milestones. The site features a modern design with smooth animations, dark/light mode support, and interactive elements.

## 🏗️ Project Structure

```
rakin.top-main/
│
├── index.html                 # Main HTML file - entry point
├── README.md                  # This file
├── CNAME                      # GitHub Pages custom domain config
├── cv.pdf                     # PDF resume
│
├── assets/
│   ├── css/
│   │   ├── normalize.css      # CSS reset/normalization
│   │   └── style.css          # Main stylesheet with all styling
│   │
│   ├── js/
│   │   ├── main.js            # Core JavaScript functionality
│   │   └── songs.js           # Song playlist data (exported, not used)
│   │
│   ├── fonts/
│   │   ├── hauss.ttf          # Custom font (TrueType)
│   │   └── hauss.woff         # Custom font (Web Open Font)
│   │
│   ├── jpg/
│   │   └── my-photo.jpg       # Profile photo (shown in banner)
│   │
│   └── svg/
│       └── copy.svg           # Copy icon for wallet addresses
│
├── favicon/                    # All favicon files for different platforms
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── android-chrome-*.png
│   └── ...
│
└── cv/
    └── index.html              # Separate CV page
```

## 🎯 How It Works

### Architecture

The website is a **client-side only** application with no backend dependencies:

1. **HTML Structure** (`index.html`): Defines the semantic structure and content
2. **CSS Styling** (`assets/css/style.css`): Handles all visual presentation, animations, and responsive design
3. **JavaScript Logic** (`assets/js/main.js`): Manages interactivity, language switching, status updates, and timeline rendering

### Key Features & Functionality

#### 1. **Real-Time Status System**
- Automatically updates based on time of day and day of week
- Statuses include: Sleeping, Busy, Available, Weekend, Holiday
- Updates every second via `setInterval`
- Blocks contact links during "Do Not Disturb" hours

#### 2. **Multi-Language Support**
- Supports 4 languages: English (EN), Finnish (FI), German (DE), Russian (RU)
- Language preference saved in `localStorage`
- All UI text dynamically translated via JavaScript
- Language switcher in top-right corner

#### 3. **Timeline/Blog Section**
- Displays events, milestones, and achievements chronologically
- Data stored in `timelineData` array in `main.js`
- Automatically sorted by date (newest first)
- Animated entry with staggered delays
- Color-coded tags: Event, Milestone, Achievement

#### 4. **Interactive Elements**

**Copy-to-Clipboard:**
- Wallet addresses are clickable
- Clicking copies address to clipboard
- Shows success/error popup notification

**Photo Banner:**
- Clicking on name opens full-screen photo modal
- Blurred backdrop effect
- Click outside to close

**Finnish Sauna Mode:**
- Click "Made in Finland" footer link
- Activates steam overlay effect
- Shows 🚿🔥 emoji in corner
- Text changes to "Sauna on päällä"
- Auto-dismisses after 5 seconds

#### 5. **Song Status**
- Randomly displays a song from the playlist
- Updates every 30 seconds
- Shows "Currently listening to: 🎵 [Song] by [Artist]"

#### 6. **Responsive Design**
- Mobile-first approach
- Adapts to different screen sizes
- Touch-friendly interactions

#### 7. **Dark/Light Mode**
- Automatically detects system preference
- Uses CSS custom properties (variables)
- Smooth transitions between modes

### Data Flow

```
User Interaction
    ↓
JavaScript Event Listeners
    ↓
Update DOM / localStorage
    ↓
CSS Animations & Transitions
    ↓
Visual Feedback
```

### Key JavaScript Functions

- `switchLanguage(lang)`: Updates all text to selected language
- `updateStatusMessage(lang)`: Determines current status based on time
- `renderTimeline()`: Generates timeline HTML from data array
- `updateSongStatus()`: Randomly selects and displays a song
- `showPopup(content, isError)`: Displays notification popup
- Copy-to-clipboard handlers for wallet addresses
- Sauna mode activation handler

## 🚀 Running Locally

### Option 1: Python HTTP Server (Recommended)

```bash
cd /Users/rakin/Desktop/rakin.top-main
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

### Option 2: Node.js http-server

```bash
npm install -g http-server
cd /Users/rakin/Desktop/rakin.top-main
http-server -p 8000
```

### Option 3: VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Option 4: Direct File Opening

Double-click `index.html` (some features may not work due to absolute paths)

## 📝 Customization Guide

### Adding Timeline Items

Edit `assets/js/main.js`, find the `timelineData` array:

```javascript
const timelineData = [
    {
        date: "2024-07-15",           // YYYY-MM-DD format
        title: "Your Event Title",
        description: "What happened...",
        tag: "Event",                  // "Event", "Milestone", or "Achievement"
        type: "event"
    },
    // Add more items...
];
```

### Changing Colors & Styling

Edit `assets/css/style.css`, modify CSS variables:

```css
:root {
  --accent: #6366f1;              /* Primary accent color */
  --accent-hover: #818cf8;        /* Hover state */
  --bg: #0a0a0a;                  /* Background */
  --text: #e0e0e0;                /* Text color */
  /* ... more variables */
}
```

### Adding New Languages

1. Add translation object to `translations` in `main.js`
2. Add `<option>` to language switcher in `index.html`
3. Update `switchLanguage()` function if needed

### Modifying Status Schedule

Edit the `schedule` object in `main.js`:

```javascript
const schedule = {
    ...range(1, 5, 7, {           // Monday-Friday
        ...range(9, 17, 24, {    // 9 AM - 5 PM
            message: BUSY,
            dnd: false,
        }),
        // Add more time ranges...
    }),
};
```

## 🎨 Design Features

- **Modern Card-Based Layout**: Content organized in cards with hover effects
- **Smooth Animations**: Fade-in, slide-up, pulse animations
- **Gradient Accents**: Purple/blue gradients for visual interest
- **Subtle Interactions**: Hover states, transitions, visual feedback
- **Typography**: Custom "Hauss" font with system font fallbacks

## 🔧 Technical Details

- **No Build Process**: Pure HTML/CSS/JS, no compilation needed
- **No Dependencies**: Zero external libraries (except Yandex Metrika analytics)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance**: Lightweight, fast loading, optimized animations
- **Accessibility**: Semantic HTML, keyboard navigation support

## 📊 Analytics

The site includes Yandex Metrika for analytics:
- Click tracking
- Link tracking
- Bounce rate tracking

## 🌐 Deployment

The site is configured for GitHub Pages:
- Custom domain via `CNAME` file
- Static file hosting
- Automatic HTTPS

## 📄 License

Personal project - All rights reserved.

---

**Made with ❤️ in Finland** 🇫🇮
