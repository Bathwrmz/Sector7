# Crystal Vanguard - FFXIV Free Company Website

A professional, Final Fantasy-themed website for recruiting and showcasing your Free Company with over 40 members.

## 🌟 Features

- **Professional Gaming Aesthetic**: Dark theme with gold accents inspired by Final Fantasy XIV
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll effects and interactive elements
- **Complete Sections**:
  - Hero section with call-to-action
  - About Us with statistics
  - Latest Achievements showcase
  - Image Gallery with hover effects
  - Contact form for applications
  - Discord integration
  - Professional footer

## 📁 Project Structure

```
workspace/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # Complete styling system
│   ├── js/
│   │   └── main.js        # Interactive features
│   └── images/            # Place for custom images
└── README.md              # This file
```

## 🚀 Quick Start

### Option 1: Local Development Server

1. Clone or download this repository
2. Navigate to the project directory
3. Start a local server:

```bash
# Using Python 3
python -m http.server 8050

# Using Python 2
python -m SimpleHTTPServer 8050

# Using Node.js (if you have http-server installed)
npx http-server -p 8050
```

4. Open your browser and visit: `http://localhost:8050`

### Option 2: Direct File Opening

Simply open `index.html` in any modern web browser.

## 🎨 Customization Guide

### Update Free Company Information

1. **Banner & Name**: Edit in `index.html`:
   ```html
   <div class="fc-banner">
       <h1>Crystal Vanguard</h1>  <!-- Change FC name -->
       <div class="tagline">Fortune Favors the Bold</div>  <!-- Change tagline -->
   </div>
   ```

2. **About Section**: Update the text content in the About Us section

3. **Statistics**: Modify the numbers in `.about-stats`:
   ```html
   <div class="stat-box">
       <span class="number">40+</span>  <!-- Update member count -->
       <span class="label">Active Members</span>
   </div>
   ```

4. **Achievements**: Update or add achievement cards in the Achievements section

5. **Gallery**: Replace image URLs with your own screenshots:
   ```html
   <img src="your-image-url.jpg" alt="Description">
   ```

6. **Contact Information**: Update contact details and Discord link:
   ```html
   <a href="https://discord.gg/YOUR-DISCORD-INVITE" class="discord-button">
   ```

### Color Customization

Edit the CSS variables in `assets/css/styles.css`:
```css
:root {
    --primary-dark: #1a1a2e;      /* Main background */
    --accent-gold: #d4af37;       /* Gold accents */
    --text-light: #e8e8e8;        /* Text color */
    /* Modify other colors as needed */
}
```

### Adding Custom Images

1. Place your images in the `assets/images/` folder
2. Update image paths in `index.html`:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

## 🎮 Key Features Explained

### Header & Navigation
- Sticky header with your FC banner
- Smooth scrolling navigation
- Responsive mobile menu

### Hero Section
- Eye-catching welcome message
- Call-to-action button for recruitment
- Professional background with overlay

### About Section
- Two-column layout with text and image
- Animated statistics counters
- Professional presentation of your FC

### Achievements Section
- Grid layout for achievement cards
- Hover effects and animations
- Easy to update with new accomplishments

### Gallery Section
- Responsive image grid
- Hover captions
- Perfect for showcasing screenshots

### Contact Section
- Professional contact information
- Application form (requires backend integration)
- Discord integration button

### Interactive Features (JavaScript)
- Smooth scrolling navigation
- Scroll-triggered animations
- Active navigation highlighting
- Form handling (frontend only)
- Counter animations for statistics

## 📱 Responsive Design

The website automatically adapts to:
- **Desktop**: Full layout with all features
- **Tablet**: Optimized spacing and navigation
- **Mobile**: Single-column layout with touch-friendly interface

## 🔧 Technical Details

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern features including Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive features without dependencies
- **No External Dependencies**: Everything is self-contained

## 🌐 Deployment Options

### GitHub Pages
1. Push the repository to GitHub
2. Enable GitHub Pages in repository settings
3. Select the main branch as source
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be live instantly
3. Custom domain available

### Vercel
1. Connect your GitHub repository
2. Vercel will deploy automatically
3. Preview and production URLs provided

### Traditional Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Your site will be live

## 📝 Form Integration

The contact form currently shows an alert on submission. To make it functional:

1. **Option 1: Email Service** - Use services like Formspree or Netlify Forms
2. **Option 2: Backend** - Connect to a server with PHP, Node.js, or Python
3. **Option 3: Discord Webhook** - Send applications directly to your Discord

Example Formspree integration:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## 🎨 Design Inspiration

The design is inspired by Final Fantasy XIV's UI with:
- Dark blue/purple color scheme
- Gold accents for importance
- Clean, readable typography
- Professional gaming aesthetic

## 📄 Legal Notice

Remember to include Square Enix's copyright notice in your footer (already included):
```
FINAL FANTASY XIV © Square Enix Co., Ltd. All Rights Reserved.
```

## 🤝 Support

If you need help with:
- Customizing colors or layout
- Adding new sections
- Integrating with your Discord
- Setting up form functionality

Feel free to reach out or modify the code to suit your needs!

## 📊 Performance

- **Fast Loading**: Minimal external dependencies
- **Optimized Images**: Use compressed images for better performance
- **CSS Optimization**: Efficient styles with proper organization
- **JavaScript**: Lightweight and efficient

## 🎯 Best Practices

1. **Images**: Use compressed images (WebP format recommended)
2. **Alt Text**: Always include descriptive alt text for accessibility
3. **Links**: Test all links regularly
4. **Mobile**: Test on various screen sizes
5. **Browser**: Test in Chrome, Firefox, Safari, and Edge

---

**Crystal Vanguard Website** - Created with ❤️ for FFXIV Free Companies

*Fortune Favors the Bold!*