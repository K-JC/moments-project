import { rest } from "msw";

const baseURL = "https://rest-framework-1160aadccddd.herokuapp.com/";

export const handlers = [
    rest.get(`$(baseURL)dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
        "pk": 2,
        "username": "kelly",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 2,
        "profile_image": "https://res.cloudinary.com/dugjc92qc/image/upload/v1/media/../default_profile_welou2"
    })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];