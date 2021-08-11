import { Split as SplitModel } from "@prisma/client";
import { list, objectType } from "nexus";
import { Unit } from "../unit";

export const Split = objectType({
  name: "Split",
  definition: (t) => {
    t.id("id");
    t.string("name");

    t.field("units", {
      type: list(Unit),
      resolve: (parent, __, ctx) => {
        const { id } = parent as SplitModel;
        return ctx.prisma.unit.findMany({
          where: { splitId: id },
        });
      },
    });
  },
});
