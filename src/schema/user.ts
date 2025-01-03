import {z} from "zod";

export type User = z.infer<typeof UserSchema>;
export const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
});
