# Deployment Guide for Chartix Mentorship

## Environment Variables

Before deploying, ensure all environment variables are configured in your deployment platform:

### Required Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://ovausocbzwpktgepgggp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92YXVzb2Niendwa3RnZXBnZ2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwMDA5MjEsImV4cCI6MjA3NjU3NjkyMX0.mlCVbrcvo96hy6e88lhhjJ3H2I559j55h26_Tw6tdOU
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/ZpC3EYz3
NEXT_PUBLIC_WHISH_DETAILS=81 394 607 / Elian Chaaya
NEXT_PUBLIC_CRYPTO_WALLET=USDT-TRC20: TB98b4LLE8fJeSsxpmNWd979XY9FiB3KHN
```

## Deployment Platforms

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add all environment variables in the Vercel dashboard
3. Deploy

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy

## Build Configuration

The project uses Next.js 13.5.1 with the following configuration:

- ESLint enabled during builds
- TypeScript checking enabled
- SWC minification
- React Strict Mode
- Images unoptimized for static export compatibility

## External Dependencies

The project uses Spline 3D viewer loaded from unpkg.com. Ensure your deployment platform allows external script loading.

## Troubleshooting

### Build Failures

1. Check that all environment variables are set correctly
2. Verify Node.js version compatibility (recommended: Node 18+)
3. Clear build cache and retry
4. Check deployment logs for specific error messages

### Spline Viewer Not Loading

The app includes fallback error handling for Spline components. If the external script fails to load, a gradient background will display instead.

### Database Connection Issues

Verify Supabase credentials are correct and the database is accessible from your deployment environment.
