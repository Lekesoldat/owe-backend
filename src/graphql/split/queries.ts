import { list, queryField } from "nexus";
import { Split } from "./typeDefs";

export const allSplits = queryField("allSplits", {
  type: list(Split),
  resolve: async (_, __, ctx) => await ctx.prisma.split.findMany(),
});
