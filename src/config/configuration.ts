export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },
  brand: {
    name: 'GRAIA',
    tagline: 'AI with Empathy',
    description: 'Combining collective knowledge with personal, empathetic experiences',
    origin: 'From the Croatian word "graja" - a lively hum of voices becoming one',
    colors: {
      primary: '#0066CC',      // Blue - trust, competence, integrity
      secondary: '#FFFFFF',     // White - clarity, honesty
      accent: '#E63946',        // Red - boldness, passion, energy
    },
    values: [
      'Trust',
      'Optimism',
      'Innovation',
      'Accessibility',
      'Empathy',
    ],
    mission: 'Lowering AI adoption barriers through empathetic user experiences',
  },
});
