# DREVANET — Next.js Digital Agency

A responsive multi-page agency website built with Next.js 14, TypeScript, CSS 3D effects, Framer Motion and Lucide icons.

## Pages
- `/` Home, services preview, selected work, journal preview and floating WhatsApp link
- `/services` Services overview
- `/portfolio` Portfolio grid
- `/about` Agency story and principles
- `/contact` Contact form integrated with Web3Forms
- `/blog` Clickable blog index
- `/blog/[slug]` Static-generated article detail pages

## Run locally
1. Install Node.js 18.17+.
2. Extract this project and open a terminal in the project folder.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Add your Web3Forms access key and WhatsApp number in `.env.local`.
6. Run `npm run dev` and open `http://localhost:3000`.

## Web3Forms setup
1. Visit https://web3forms.com/ and create an access key for the email address where you want to receive enquiries.
2. Put it in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_real_key`.
3. Restart the development server after editing environment variables.
4. Test the form with a real message. Web3Forms handles delivery; this project does not store submissions in a database.

The contact form shows success or error feedback and validates required fields. Do not use the placeholder key in production.

## WhatsApp
Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to your WhatsApp number in international format with digits only, for example `2348012345678` for a Nigerian number. The floating button opens WhatsApp with a prefilled greeting.

## Before launch
- Replace `hello@drevanet.com` with your real contact email if different.
- Replace social profile links in `components/Footer.tsx`.
- Update sample concept projects and editorial copy in `lib/content.ts` with your real portfolio and articles.
- Images use remote Unsplash URLs for demonstration. Replace them with licensed brand imagery you own or are authorized to use.
- Set the production environment variables in your hosting dashboard.
- Run `npm run build` before deployment.

## Design notes
The hero orb, orbit rings and glass panels are built in CSS with 3D transforms. Framer Motion drives reveal-on-scroll effects. The layout includes reduced-motion support.
