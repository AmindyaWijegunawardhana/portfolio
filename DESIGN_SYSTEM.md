# Design System & Guidelines

## 🎨 Color Palette

### Primary Colors
```
Background: #0f172a (Dark Navy)
Dark: #111827
Lighter Dark: #1e293b
Text Primary: #ffffff
Text Secondary: #cbd5e1
```

### Neon Accents
```
Neon Blue: #0ea5e9
Neon Purple: #a855f7
Neon Cyan: #06b6d4
Neon Pink: #ec4899
```

### Glassmorphism
```
Glass Background: rgba(15, 23, 42, 0.7)
Glass Border: rgba(148, 163, 184, 0.1)
```

## 📝 Typography

### Font Family
- **Primary**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Alternative**: Preferred: 'Inter', 'Poppins', or 'JetBrains Mono'

### Font Sizes
```
Heading 1 (Hero): 48px - 128px
Heading 2 (Section): 32px - 64px
Heading 3: 24px - 32px
Body: 16px - 18px
Small: 12px - 14px
```

### Font Weights
```
Light: 300
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
Extrabold: 800
```

## 🎭 Component Specifications

### Buttons

#### Primary Button
- Background: Gradient (Blue → Purple)
- Padding: 16px 32px
- Border Radius: 12px
- Font: Bold 16px
- Hover: Glow effect, scale 1.05
- Active: Scale 0.95

#### Secondary Button
- Border: 2px Neon Cyan
- Background: Transparent
- Text: Neon Cyan
- Padding: 16px 32px
- Hover: Background color with text color invert
- Border Radius: 12px

### Cards

#### Project Card
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px gray-800
- Hover Border: Neon Blue
- Border Radius: 16px
- Padding: 24px
- Image Overlay: Gradient to-dark-950
- Transition: 300ms

#### Info Card
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px color-specific/20
- Border Radius: 12px
- Padding: 16px
- Hover: Border opacity 50%, transform translate-y(-5px)

### Forms

#### Input Fields
- Background: rgba(17, 24, 39, 0.5)
- Border: 1px gray-700
- Border Radius: 8px
- Padding: 12px 16px
- Focus: Border neon-blue, ring neon-blue
- Font Size: 16px
- Placeholder: gray-500

#### Textarea
- Min Height: 150px
- Resize: None
- Same styling as input

## ✨ Animation Guidelines

### Durations
```
Fast: 0.2s - 0.3s (micro-interactions)
Normal: 0.5s - 0.8s (transitions)
Slow: 1s - 2s (entrance animations)
```

### Easing Functions
```
Smooth: ease-in-out
Quick: ease-out
Bounce: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Common Animations

#### Fade In
```
opacity: 0 → 1
duration: 0.8s
```

#### Slide Up
```
opacity: 0, y: 20 → opacity: 1, y: 0
duration: 0.8s
```

#### Scale
```
scale: 0.8 → 1
duration: 0.5s
```

#### Float
```
y: 0 → -20 → 0
duration: 3s
repeat: infinite
```

#### Glow Pulse
```
box-shadow: opacity 1 → 0.5 → 1
duration: 2s
repeat: infinite
```

## 🎬 Micro-interactions

### Hover Effects

#### Button Hover
- Scale: 1.05
- Shadow: Glow effect (20-25px blur)
- Duration: 0.3s

#### Card Hover
- Scale: 1.02
- Shadow: Increase
- Y-transform: -5px
- Border: Show neon color

#### Link Hover
- Color: Change to neon-blue
- Underline: Expand width
- Duration: 0.3s

### Click Feedback

#### Button Click
- Scale: 0.95
- Duration: 0.1s

#### Smooth Scroll
- Behavior: smooth
- Duration: automatic based on distance

## 📐 Spacing System

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
```

## 📱 Responsive Breakpoints

```
Mobile: 320px - 639px
Tablet: 640px - 1023px
Desktop: 1024px+
Large Desktop: 1280px+

Tailwind Breakpoints:
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🌑 Dark Mode

- Uses Tailwind's dark mode
- Toggle button in Navigation
- Persisted in localStorage
- Smooth transitions between modes

## ♿ Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus states visible on all interactive elements
- Alt text for all images
- Semantic HTML structure
- ARIA labels where necessary
- Keyboard navigation support

## 🖼️ Asset Guidelines

### Images
- Optimize for web
- Use WebP where possible
- Responsive images with srcset
- Minimum width: 1200px for hero

### Icons
- Use React Icons library
- Size: 20px-32px standard
- Color: Inherit or contrast
- Weight: consistent

## 🎯 Design Tokens

### Shadow System
```
Shadow sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
Shadow md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Shadow lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
Shadow xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
Shadow 2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### Glow System
```
Glow blue: 0 0 25px rgba(14, 165, 233, 0.5)
Glow purple: 0 0 25px rgba(168, 85, 247, 0.5)
Glow cyan: 0 0 25px rgba(6, 182, 212, 0.5)
```

## 🔄 Transition Effects

### Page Transitions
- Fade in/out
- Duration: 0.5s
- Used for route changes

### Modal Transitions
- Scale from center: 0.9 → 1
- Opacity fade in: 0 → 1
- Duration: 0.3s

### Scroll Animations
- Elements fade and slide in on viewport entry
- Stagger: 0.1s between elements
- Use: whileInView with framer-motion

## 📊 Grid System

```
12-column grid
Gap: 24px (2xl), 16px (md), 8px (sm)
Max-width: 1280px
Padding: 16px-32px depending on screen
```

---

**Design System Version**: 1.0.0  
**Last Updated**: April 2024
