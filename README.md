# Foodie Gurú

Corporate website developed for a restaurant consulting company based in Mexico.

## Live Demo

https://foodieguru.mx

## Overview

Foodie Gurú is a modern corporate website designed to showcase the company's services, expertise, and value proposition for restaurant owners and hospitality businesses.

The project includes a responsive frontend experience with interactive animations, dynamic sections, and a custom contact workflow that processes user submissions through a Node.js backend and integrates them into the company's CRM system.

## Features

- Fully responsive design.

- Multi-section navigation:
    - Home
    - Services
    - About Us
    - Contact
    - FAQ
    - Privacy Policy
    - Terms & Conditions

- Custom contact form connected to a Node.js backend.

- Lead data integration with Monday CRM.

- Scroll-triggered animations.

- Interactive content carousels.

- SEO optimization with React Helmet.

- SVG-based icons and graphic assets.

- Modular architecture for easier maintenance and scalability.

## Architecture

```text
User
 |
 v
React Frontend
 |
 v
Node.js Backend
 |
 v
Monday CRM
```

The contact workflow allows users to submit their information through the website while the backend processes and sends the data directly to the company's lead management system.

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS Modules

### Backend

- Node.js

### Integrations

- Monday CRM API

### Main Libraries

- React Router DOM
- React Helmet Async
- React Select
- React Phone Input 2
- SweetAlert2

## Project Structure

```text
src/
├── assets/
├── components/
├── hooks/
└── styles/
```

## Highlights

- Custom UI built without CSS frameworks.
- Mobile-first responsive design.
- Modular and maintainable codebase.
- Frontend and backend integration.
- CRM integration for lead management.
- Production-ready deployment for a real business client.

## Author

Mircomania
