import z from "zod";

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export type signupInput = z.infer<typeof signupInput>;

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});
export type SigninInput = z.infer<typeof signinInput>;

export const createblogInput = z.object({
  title: z.string(),
  content: z.string(),
});
export type CreateBlogInput = z.infer<typeof createblogInput>;

export const updateblogInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});
export type UpdateBlogInput = z.infer<typeof updateblogInput>;
