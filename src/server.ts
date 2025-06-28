import app from './app';
import { connectMongo } from './infrastructure/database/mongo';

const PORT = process.env.PORT || 3000;

connectMongo().then(() => {
  app.listen(PORT, () => console.log('Server on port', PORT));
});