# Lazrani - Luxury Brand Waitlist

A minimalist, elegant waitlist landing page for Lazrani luxury brand, featuring a sophisticated design with gold accents and interactive magic cursor effects. 

## < Features

- Elegant minimalist design with cream and gold color palette
- Interactive magic cursor with sparkle effects
- Email waitlist signup with validation
- Supabase integration for data storage
- Fully responsive design
- Smooth animations and transitions

## =� Deployment on Vercel

### Quick Deploy

1. Go to [Vercel](https://vercel.com/new)
2. Import this GitHub repository: `hara-auren/tavi-website`
3. Configure environment variables (see below)
4. Deploy!

### Environment Variables

Add these environment variables in Vercel's project settings:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## =� Local Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/hara-auren/tavi-website.git
cd tavi-website
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## =� Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel
- **UI Components**: Radix UI

## <� Design System

- **Primary Color**: Gold (#BAA476)
- **Background**: Cream (#F5F0EB)
- **Typography**: Playfair Display (headers), Inter (body)

## =� License

Private - All rights reserved