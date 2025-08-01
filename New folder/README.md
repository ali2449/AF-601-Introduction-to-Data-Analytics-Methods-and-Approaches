# Course Tutorial Website

A modern, responsive tutorial website designed for educational courses. This website provides a comprehensive learning platform with interactive modules, resources, and contact features.

## 🌟 Features

- **Modern Design**: Clean, professional interface with beautiful gradients and animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling and mobile-friendly hamburger menu
- **Course Modules**: Structured learning content with progress tracking
- **Resource Center**: Access to course materials, videos, and support
- **Contact Form**: Interactive contact form with validation
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading with optimized assets

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Start editing** the content to match your course requirements

### Customization

#### Updating Content

1. **Course Information**: Edit the hero section in `index.html`
2. **Modules**: Modify the modules section with your specific course content
3. **Resources**: Update resource links and descriptions
4. **Contact Information**: Change contact details in the contact section

#### Styling

1. **Colors**: Update CSS custom properties in `styles.css`
2. **Fonts**: Change the Google Fonts import in `index.html`
3. **Layout**: Modify grid layouts and spacing in `styles.css`

## 🌐 GitHub Pages Deployment

### Method 1: Automatic Deployment

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Select Source**: Choose "Deploy from a branch"
5. **Select Branch**: Choose `main` or `master`
6. **Select Folder**: Choose `/ (root)`
7. **Click Save**

Your website will be available at: `https://yourusername.github.io/repository-name`

### Method 2: Using GitHub CLI

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Create repository on GitHub
gh repo create course-tutorial --public

# Push to GitHub
git push -u origin main

# Enable GitHub Pages
gh repo edit --enable-pages
```

### Method 3: Manual Setup

1. **Create repository** on GitHub
2. **Clone locally**:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   cd repository-name
   ```

3. **Add files** and push:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Enable Pages** in repository settings

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (single column layout)

## 🎨 Customization Guide

### Changing Colors

Update the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #667eea;
    --accent-color: #764ba2;
    --text-color: #333;
    --background-color: #ffffff;
}
```

### Adding New Modules

1. **Copy the module card structure** in `index.html`
2. **Update content** with your module information
3. **Add corresponding styles** if needed

### Adding New Resources

1. **Copy the resource card structure** in `index.html`
2. **Update icon** using Font Awesome classes
3. **Add link** to your resource

## 🔧 Technical Features

### JavaScript Functionality

- **Mobile Navigation**: Hamburger menu toggle
- **Smooth Scrolling**: Navigation link behavior
- **Form Validation**: Contact form with email validation
- **Notifications**: Interactive notification system
- **Animations**: Scroll-triggered animations
- **Accessibility**: Keyboard navigation and focus management

### CSS Features

- **CSS Grid**: Modern layout system
- **Flexbox**: Flexible component layouts
- **CSS Animations**: Smooth transitions and effects
- **Media Queries**: Responsive breakpoints
- **CSS Variables**: Easy customization

## 📚 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help with:

- **Deployment**: Check GitHub Pages documentation
- **Customization**: Review the customization guide above
- **Issues**: Create an issue in the repository

## 🔄 Updates

### Version 1.0.0
- Initial release
- Responsive design
- Interactive features
- Accessibility compliance

---

**Happy Teaching!** 🎓

This tutorial website is designed to make learning engaging and accessible for all students. 