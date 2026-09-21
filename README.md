# Apriqoz Vacations — Website V3

## Pages
- `/` Home
- `/about` About
- `/domestic` Domestic Holidays
- `/international` International Holidays
- `/services` Services
- `/contact` Contact

## V3 changes
- Proper multi-page React Router navigation.
- Separate About, Domestic, International, Services and Contact pages.
- Domestic page has rotating full-screen travel video: Kerala/green hills, Goa beach and Indian Himalayas.
- International page has rotating full-screen travel video: Bali, Thailand, Dubai and Bangkok.
- Larger WhatsApp, Instagram, Facebook and YouTube buttons positioned at the bottom-right.
- Apriqoz logo sizing adjusted so the full logo remains visible.
- WhatsApp quote flow retained.
- Indicative starting prices retained with disclaimer.
- No unnecessary search bar.

## Run
```bash
npm install
npm run dev
```

## Important video note
The hero videos are hosted by Pexels and are referenced remotely to keep this ZIP small. For the final production site, it is recommended to use your own/licensed video files under `public/videos/` and update the video URLs in `src/App.jsx`.
