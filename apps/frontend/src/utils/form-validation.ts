import { setIn } from "final-form";
// @ts-ignore
import { Schema } from "yup";

export const computeFormValidation = (schema: Schema<any>) => (
    values: Object
): Promise<Object> =>
    schema
        .validate(values, { abortEarly: false })
        .then(() => {})
        .catch((e: any) =>
            e.inner.reduce(
                (errors: any, error: any) => setIn(errors, error.path, error.message),
                {}
            )
        );
