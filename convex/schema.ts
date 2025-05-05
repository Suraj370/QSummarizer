import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  sessions: defineTable({
    userId: v.id("users"),
    sessionToken: v.string(),
    expiresAt: v.number(),
  }).index("by_session_token", ["sessionToken"]),
  accounts: defineTable({
    userId: v.id("users"),
    provider: v.string(),
    providerAccountId: v.string(),
  }).index("by_provider", ["provider", "providerAccountId"]),
  verification: defineTable({
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
    type: v.string(), // e.g., "email_verification", "password_reset"
  }).index("by_token", ["token"]),
});