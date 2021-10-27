import { objectType } from "nexus";
import { Participation as ParticipationModel } from "@prisma/client";
import { User } from "../user";
import { Split } from "..";

export const Participation = objectType({
  name: "Participation",
  definition: (t) => {
    t.id("id");

    t.field("user", {
      type: User,
      resolve: async (parent, __, ctx) => {
        const { userId } = parent as ParticipationModel;
        return await ctx.prisma.user.findUnique({
          where: { id: userId },
        });
      },
    });

    t.field("split", {
      type: Split,
      resolve: async (parent, __, ctx) => {
        const { splitId } = parent as ParticipationModel;
        return await ctx.prisma.split.findUnique({
          where: { id: splitId },
        });
      },
    });
  },
});
