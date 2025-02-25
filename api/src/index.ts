import express from 'express';
import { serve } from 'inngest/express';

import rest from './rest'; 
import { inngest, functions } from './functions';

const app = express();

app.use(express.json());
app.use('/api/rest', rest);
app.use('/api/inngest', serve({ client: inngest, functions }));

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
