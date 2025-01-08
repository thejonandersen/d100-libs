import z from 'zod'

export const JSONSchema = z.custom<string>((value) => {
    try {
        JSON.parse(value);
        return true;
    } catch (_) {
        return false;
    }
});

export const NumberInputSchema = z.preprocess(
    (val) => Number(val),
    z.number()
)
