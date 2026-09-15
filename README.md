# TradeTrack - AI-Powered Trading Journal & Performance Analytics

A modern, premium SaaS platform for traders to record, analyze, and improve their trading performance.

## Features

✅ **Trading Journal** - Record every trade with detailed metrics
✅ **Advanced Analytics** - Win rate, profit factor, Sharpe ratio, and more
✅ **Strategy Analysis** - Compare strategy performance
✅ **Trading Psychology** - Track emotions and correlations
✅ **AI Insights** - AI-generated trading observations
✅ **Chart Uploads** - Attach screenshots to trades
✅ **Trading Calendar** - Visualize daily P&L and performance
✅ **Responsive Dashboard** - Beautiful, real-time analytics
✅ **Dark/Light Mode** - Premium theme support
✅ **Secure Authentication** - Supabase integration

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Charts**: Recharts
- **Backend/Auth**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS + CSS-in-JS animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (for backend)

### Installation

```bash
# Clone the repository
git clone https://github.com/Sumitbardolai/tradetrack-saas.git
cd tradetrack-saas

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Add your Supabase credentials to .env.local
```

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Running Locally

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Type checking
npm run type-check
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js 14 app directory
├── components/       # Reusable React components
├── lib/             # Utilities and helpers
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
├── styles/          # Global styles
└── config/          # Configuration files
```

## API Routes

All API endpoints are in `src/app/api/`:

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/trades` - Fetch all trades
- `POST /api/trades` - Create new trade
- `PUT /api/trades/[id]` - Update trade
- `DELETE /api/trades/[id]` - Delete trade
- `GET /api/analytics` - Get analytics data
- `GET /api/strategies` - Fetch strategies
- `POST /api/insights` - Generate AI insights

## Database Schema

### Users Table
- id (UUID)
- email (string, unique)
- password_hash (string)
- full_name (string)
- avatar_url (string)
- theme (dark/light)
- created_at (timestamp)

### Trades Table
- id (UUID)
- user_id (UUID, FK)
- entry_price (decimal)
- exit_price (decimal)
- position_size (decimal)
- stop_loss (decimal)
- take_profit (decimal)
- strategy (string)
- market (string)
- timeframe (string)
- direction (long/short)
- profit_loss (decimal)
- emotion (string)
- notes (text)
- screenshot_url (string)
- created_at (timestamp)
- updated_at (timestamp)

### Strategies Table
- id (UUID)
- user_id (UUID, FK)
- name (string)
- description (text)
- win_rate (decimal)
- profit_factor (decimal)
- expectancy (decimal)
- created_at (timestamp)

### Psychology Table
- id (UUID)
- trade_id (UUID, FK)
- emotion (string)
- intensity (1-5)
- notes (text)

## Features Implemented

### Landing Page
- Sticky navigation bar
- Hero section with dashboard preview
- Problem section highlighting trader pain points
- Features showcase with visual cards
- Dashboard preview section
- How it works section
- Performance analytics showcase
- AI Insights section
- Pricing tiers
- Testimonials
- Security & Privacy section
- FAQ
- Final CTA
- Footer with comprehensive links

### Authentication
- User registration
- User login
- Session management
- Protected routes

### Dashboard
- Portfolio overview
- Equity curve
- P&L tracking
- Win rate metrics
- Risk metrics
- Recent trades list
- Strategy performance
- Responsive layout

### Trade Management
- Add new trades
- Edit existing trades
- Delete trades
- Search and filter trades
- Upload trade screenshots
- Add emotions and notes

### Analytics
- Advanced metrics calculation
- Charts and visualizations
- Strategy comparison
- Emotion correlation
- Daily P&L calendar
- Export capabilities

### AI Insights
- Pattern detection
- Performance analysis
- Behavioral insights
- Educational observations

## Security

- ✅ Secure authentication with Supabase
- ✅ Encrypted data transmission (HTTPS)
- ✅ Protected API routes
- ✅ Row-level security in database
- ✅ Input validation and sanitization
- ✅ CORS configuration
- ✅ Rate limiting (to be implemented)

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy on Vercel
# Connect your GitHub repo at https://vercel.com
```

### Self-hosted

```bash
npm run build
npm start
```

## Roadmap

- [ ] Advanced AI insights with machine learning
- [ ] Trade import from brokers (API integrations)
- [ ] Mobile app (React Native)
- [ ] Community features
- [ ] Advanced reporting
- [ ] Risk management tools
- [ ] Backtesting integration
- [ ] Live trading metrics
- [ ] Multi-account support

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License - See LICENSE file for details

## Support

For support, email support@tradetrack.app or open an issue on GitHub.

## Disclaimer

**Trading Disclaimer**: Trading involves substantial risk. This platform is designed for journaling, analytics, and educational purposes and does not provide personalized financial advice or guarantee trading profits. Past performance does not indicate future results. Always conduct your own research and consult with a financial advisor before making trading decisions.

**AI Insights Disclaimer**: All AI-generated insights are for educational and informational purposes only and are not financial advice.

---

Built with ❤️ by TradeTrack Team
