import {z} from "zod";

export const LoginSchema = z.object({
    email: z.string(),
    password: z.string(),
})

export const LoginRequestSchema = z.object({
    body: LoginSchema
});

export const RegisterSchema = z.object({
    email: z.string(),
    password: z.string(),
    name: z.string().nullish(),
    confirmPassword: z.string()
});

export const RegisterRequestSchema = z.object({
    body: RegisterSchema
});
