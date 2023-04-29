import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { postsRouter } from "./routers/posts";
import { usersRouter } from "./routers/users";
import { lobbiesRouter } from "./routers/lobbies";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  posts: postsRouter,
  users: usersRouter,
  lobbies: lobbiesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
