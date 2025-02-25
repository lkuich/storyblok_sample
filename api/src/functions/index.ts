import { Inngest } from 'inngest';

import migrateSomething from './migrateSomething';

export const inngest = new Inngest({
  id: process.env.INNGEST_ID!,
  isDev: process.env.INNGEST_DEV === "0",
});

export const functions = [migrateSomething];
