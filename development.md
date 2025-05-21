# Development Documentation for instantWebsiteAi

## Tech Stack

### Frontend
- **Framework**: Next.js 15.3.2+ (App Router)
- **Styling**: Tailwind CSS
- **Animation Libraries**:
  - GSAP (GreenSock Animation Platform) - For homepage animations
  - Three.js - For 3D elements in demo page
  - Framer Motion - For UI transitions and micro-interactions
  - Lottie - For loading animations

### State Management
- React Context API
- LocalStorage for persistence

### Assets & Resources
- Custom SVG icons
- Kenney Assets for demo characters/objects
- Local image storage (no external dependencies)

## Project Structure

```
instantWebsiteAi/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.js             # Homepage
│   │   ├── demo/               # Demo page
│   │   ├── pitch-deck/         # Pitch deck page
│   │   ├── why-us/             # Why us page
│   │   ├── showcase/           # Showcase page
│   │   ├── roadmap/            # Roadmap page
│   │   └── layout.js           # Root layout
│   ├── components/             # Reusable components
│   │   ├── ui/                 # UI components
│   │   ├── home/               # Homepage components
│   │   ├── demo/               # Demo page components
│   │   └── shared/             # Shared components
│   ├── lib/                    # Utility functions
│   ├── hooks/                  # Custom React hooks
│   ├── context/                # Context providers
│   └── styles/                 # Global styles
├── public/                     # Static assets
│   ├── images/                 # Image assets
│   ├── models/                 # 3D models
│   ├── animations/             # Lottie animations
│   └── favicon.ico             # Favicon
└── docs/                       # Documentation
    ├── research.md             # Market research
    ├── development.md          # Development guide
    └── todoList.md             # Development progress
```

## Development Roadmap

### Phase 1: MVP (Current)
- [x] Project setup with Next.js
- [ ] Homepage with interactive hero section
- [ ] Demo page with template preview
- [ ] Basic template library
- [ ] Admin panel mockup
- [ ] Subdomain preview simulation

### Phase 2: Enhanced Features
- [ ] Drag-and-drop editor
- [ ] Form builder integration
- [ ] Google Sheet backend support
- [ ] User authentication

### Phase 3: Advanced Features
- [ ] CMS-ready templates
- [ ] Real-time editing
- [ ] AI-assisted content generation
- [ ] Template marketplace

## Development Guidelines

### Code Style
- Use functional components with hooks
- Implement responsive design for all components
- Maintain accessibility standards (WCAG AA)
- Use semantic HTML elements

### Performance Optimization
- Lazy load images and components
- Optimize animations for performance
- Implement code splitting
- Use Next.js Image component for optimized images

### Animation Guidelines
- Use GSAP for complex animations
- Use Framer Motion for UI transitions
- Keep animations subtle and purposeful
- Ensure animations work on mobile devices

### Accessibility
- Maintain proper contrast ratios
- Include alt text for all images
- Ensure keyboard navigation
- Test with screen readers

## Usage Guide

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open http://localhost:3000

### Building for Production
1. Build the project: `npm run build`
2. Start the production server: `npm start`

### Adding New Templates
1. Create template in `/src/templates/[template-name]`
2. Add preview image in `/public/images/templates/`
3. Register template in template registry

## API Documentation

### Template Preview API
- `GET /api/preview?name=[business-name]&logo=[logo-url]`
- Returns a preview of the template with the business name and logo

### Template Library API
- `GET /api/templates`
- Returns a list of available templates

### Admin Panel API
- `POST /api/site/update`
- Updates site content (simulated in localStorage)

## Testing Strategy
- Component testing with Jest and React Testing Library
- E2E testing with Cypress
- Visual regression testing with Percy
- Performance testing with Lighthouse
