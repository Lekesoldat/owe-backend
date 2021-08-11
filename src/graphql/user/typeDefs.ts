import { objectType } from "nexus";

export const AccessToken = objectType({
  name: "AccessToken",
  definition: (t) => t.string("accessToken"),
});

export const User = objectType({
  name: "User",
  definition: (t) => {
    t.id("id");
    t.string("email");
    t.string("name");
  },
});
