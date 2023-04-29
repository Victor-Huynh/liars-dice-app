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

const UserSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  createdAt: z.date(),
  content: z.string(),
});

export const usersRouter = createTRPCRouter({
  getUser: publicProcedure.input(UserSchema).query(({ input }) => {
    return {
      greeting: `Hello ${input.displayName}, your ID is ${input.id}`,
    };
  }),

  // I want to get users from my database here called getuserfromdb
  // this should return a user object if it matches the id passed in
  // if it doesn't match the id passed in it should return an error
  getUserProfile: publicProcedure
    .input(z.object({ displayName: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findMany({
        where: {
          displayName: input.displayName,
        },
      });
    }),

  // createNewUserProfile: publicProcedure.input(z.object({userID: z.string()})).mutation(({ ctx, input }) => {
  //   return ctx.prisma.user.create({
  //     User: {
  //       id: input.userID
  //     }
  //   })
  // })
});

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
