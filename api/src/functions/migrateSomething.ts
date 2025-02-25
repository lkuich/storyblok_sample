import { NonRetriableError } from 'inngest';

import { inngest } from './';

const migrateSomething = inngest.createFunction(
  { id: "migrateSomething" },
  { event: "migrations/example" },
  async ({ event, step }) => {
    try {
      // Do something long running..
    } catch (error) {
      throw new NonRetriableError("Failed to migrate something, don't try again", error);
    }
  }
);

export default migrateSomething;