import z from 'zod'

export const JSONSchema = z.string().refine((value) => {
    try {
        JSON.parse(value);
        return true;
    } catch (_) {
        return false;
    }
})
