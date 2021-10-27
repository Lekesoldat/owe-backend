import { list, queryField } from "nexus";
import { Unit } from "./index";

export const allUnits = queryField("allUnits", {
  type: list(Unit),
  resolve: async (_, __, ctx) => await ctx.prisma.unit.findMany(),
});
