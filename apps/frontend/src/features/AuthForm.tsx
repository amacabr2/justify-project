import React from "react";
import * as Yup from "yup";
import {Form} from "react-final-form";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {computeFormValidation} from "../utils/form-validation";
import {Field} from "../components";
import {useAuth} from "../auth";

type FormData = {email: string | null};

const schema = Yup.object({
    email: Yup.string().required(),
}).required();

const AuthForm = () => {
    const history = useHistory();
    const {logIn} = useAuth();

    const onSubmit = async (data: FormData) => {
        if (data?.email) {
            logIn(data.email, () => {
                return history.push('/justify');
            });
        }
    };

    return (
        <Form
            onSubmit={onSubmit}
            validate={computeFormValidation(schema)}
        >
            {({ form, handleSubmit, submitting, pristine, errors }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Field
                        id="email"
                        name="email"
                        placeholder="Mettez votre email"
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
                    </div>
                </form>
            )}
        </Form>
    );
};

export {AuthForm};
