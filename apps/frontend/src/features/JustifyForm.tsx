import React, {useState} from "react";
import * as Yup from "yup";
import { Form } from "react-final-form";
import {Button} from "react-bootstrap";
import {computeFormValidation} from "../utils/form-validation";
import {Field} from "../components";
import {FormApi} from "final-form";

type FormData = { text: string | null };

const schema = Yup.object({
    text: Yup.string().required(),
}).required();

const JustifyForm: React.FC = () => {
    const [justifyText, setJustifyText] = useState<string[]>([]);

    const onSubmit = async (data: FormData) => {
        await fetch('/api/justify', {
            method: "POST",
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(({justify}) => setJustifyText(justify));
    };

    const onClear = (form: FormApi<FormData>) => {
        form.reset();
        setJustifyText([]);
    }

    return (
        <>
            <Form
                onSubmit={onSubmit}
                validate={computeFormValidation(schema)}>
                {({ form, handleSubmit, submitting, pristine, errors }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Field
                            id="text"
                            name="text"
                            placeholder="Mettez votre texte"
                            component="textarea"
                        />
                        <div className="mt-3">
                            <Button
                                onClick={handleSubmit}
                                disabled={
                                    submitting ||
                                    pristine ||
                                    (errors && Object.keys(errors).length > 0)
                                }
                            >
                                Valider
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => onClear(form)}
                            >
                                Effacer
                            </Button>
                        </div>
                    </form>
                )}
            </Form>

            {!!justifyText.length && (
                <div className="mt-5 text-justify p-3 bg-info text-white rounded">
                    {justifyText.map((line: string) => (
                        <span className="d-block">{line}</span>
                    ))}
                </div>
            )}
        </>
    );
}

export {JustifyForm};
