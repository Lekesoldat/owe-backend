import { objectType } from "nexus";

export const Unit = objectType({
  name: "Unit",
  definition: (t) => {
    t.id("id");
    t.string("name");
    t.float("price");
    t.int("amount");
  },
});
