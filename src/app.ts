import express from 'express';
import userRoutes from './interfaces/http/routes/userRoutes';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

export default app;