# Design Export Guide for KiraFx Website

## Taking High-Quality Screenshots

### Browser Setup for Clean Screenshots:
1. Use Chrome/Firefox in full-screen mode (F11)
2. Set browser width to 1440px (standard desktop)
3. Use browser dev tools to set exact viewport: 1440x900
4. Disable browser extensions that might interfere
5. Clear browser cache for crisp rendering

### Screenshot Each Section:
- **Header**: Fixed navigation with logo and menu
- **Hero Section**: Main banner with CTA and stats
- **Services Section**: 5 service cards in grid
- **Performance Section**: Charts and metrics
- **About Section**: Team/company info
- **Contact Section**: Contact form and info
- **Footer**: Links and company details

### Tools for Screenshots:
- **CleanShot X** (Mac) - Best for design work
- **Greenshot** (Windows) - Free and reliable  
- **LightShot** - Cross-platform
- **Browser extensions**: Full Page Screen Capture

## Design System Documentation

### Color Palette:
```css
/* Primary Gradients */
--gradient-main: linear-gradient(135deg, #000428 0%, #004e92 25%, #009ffd 50%, #00d2ff 75%, #ff0080 100%);
--gradient-dark: linear-gradient(135deg, #0c0c0c 0%, #1a0033 25%, #330066 50%, #6600cc 75%, #cc0066 100%);

/* Accent Colors */
--cyan: #00ffff, #22d3ee, #67e8f9
--purple: #a855f7, #c084fc, #d8b4fe  
--pink: #ec4899, #f472b6, #f9a8d4
--green: #10b981, #34d399, #6ee7b7

/* Glass Effects */
--glass-bg: rgba(255, 255, 255, 0.1)
--glass-border: rgba(255, 255, 255, 0.2)
--glass-shadow: 0 8px 32px rgba(0, 255, 255, 0.1)
```

### Typography Scale:
- **Headings**: Inter/System font, white (#ffffff)
- **Body text**: 16px base, white (#ffffff)  
- **Muted text**: #e5e7eb
- **Font weights**: 400 (normal), 500 (medium), 600 (semibold)

### Component Specifications:
- **Border radius**: 10px (--radius: 0.625rem)
- **Glassmorphism**: backdrop-blur(10px) + rgba backgrounds
- **Spacing system**: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- **Breakpoints**: sm: 640px, md: 768px, lg: 1024px, xl: 1280px