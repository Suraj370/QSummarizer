import { query } from "./_generated/server";
import { v } from "convex/values";

export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("user") // Query the users table created by Better Auth
      .filter((q) => q.eq(q.field("email"), args.email)) // Filter by email
      .first();
    return user;
  },
});