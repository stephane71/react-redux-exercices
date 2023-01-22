import { rest } from "msw";
import CITIES from "../assets/cities.json";

export const handlers = [
  rest.get("https://geo.api.gouv.fr/communes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CITIES));
  }),
];
