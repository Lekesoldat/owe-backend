import { Consumption as ConsumptionModel } from "@prisma/client";
import { objectType } from "nexus";
import { Participation } from "../participation";
import { Unit } from "../unit";

export const Consumption = objectType({
  name: "Consumption",
  definition: (t) => {
    t.id("id");
    t.int("volume");
    t.float("price");

    t.field("unit", {
      type: Unit,
      resolve: async (parent, __, ctx) => {
        const { unitId } = parent as ConsumptionModel;
        return await ctx.prisma.unit.findUnique({
          where: { id: unitId },
        });
      },
    });

    // ? Do I want the entire participant? Or just the user 🤔
    t.field("participant", {
      type: Participation,
      resolve: async (parent, __, ctx) => {
        const { participantId } = parent as ConsumptionModel;
        return await ctx.prisma.participation.findUnique({
          where: { id: participantId },
        });
      },
    });
  },
});
