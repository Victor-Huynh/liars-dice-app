import { User } from "@clerk/nextjs/dist/api";
import { input } from "@material-tailwind/react";
import { string, z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// model User {
//     id          String   @id @default(cuid())
//     displayName String   @db.VarChar(25)
//     createdAt   DateTime @default(now())
//     content     String   @db.VarChar(255)
//     Game        Game[]
// }

const GameSchema = z.object({
  gameID: z.number(),
  gameName: z.string(),
  createdAt: z.date(),
  // host      User     @relation(fields: [hostID], references: [id])
  // hostID    String
});

export const lobbiesRouter = createTRPCRouter({
  getGame: publicProcedure
    .input(z.object({ gameID: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.game.findMany({
        where: {
          gameID: input.gameID,
        },
      });
    }),

  createGame: publicProcedure
    .input(GameSchema)
    .mutation(async ({ ctx, input }) => {
      const newGame = await ctx.prisma.game.create({
        data: {
          gameID: input.gameID,
          gameName: input.gameName,
          createdAt: input.createdAt,
        },
      });
    }),

  // getAllGames: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.game.findMany();
  // }
});
// I want to get users from my database here called getuserfromdb
// this should return a user object if it matches the id passed in
// if it doesn't match the id passed in it should return an error
//   getUserFromID: publicProcedure
//     .input(z.object({ id: z.string() }))
//     .query(({ ctx, input }) => {
//       return ctx.prisma.user.findMany({
//         where: {
//           id: input.id,
//         },
//       });
//     }),

// createNewUserProfile: publicProcedure.input(z.object({userID: z.string()})).mutation(({ ctx, input }) => {
//   return ctx.prisma.user.create({
//     User: {
//       id: input.userID
//     }
//   })
// })
// });

// hello: publicProcedure
//   .input(z.object({ text: z.string() }))
//   .query(({ input }) => {
//     return {
//       greeting: `Hello ${input.text}`,
//     };
//   }),
// getAll: publicProcedure.query(({ ctx }) => {
//   return ctx.prisma.post.findMany();
// }),
