import { useNavigate, useParams } from "react-router-dom";
import { retrieveTodoApi, updateTodoApi } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function TodoComponent() {

    const { id } = useParams();
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');

    const authContext = useAuth();
    const navigate = useNavigate();

    const username = authContext.username;

    useEffect(() => {
        retrieveTodo();
    }, [id]);

    function retrieveTodo() {
        retrieveTodoApi(username, id)
            .then(response => {
                const todo = response.data || {};
                setDescription(todo.description || '');
                setTargetDate(todo.targetDate || '');
            })
            .catch(error => console.log(error));
    }

    function onSubmit(values) {
        console.log(values);
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false,
        };

        updateTodoApi(username, id, todo)
            .then(response => {
                console.log(response);
                navigate('/listtodos');
            })
            .catch(error => console.log(error));
    }

    function validate(values) {
        let errors = {};

        if (values.description.length < 5) {
            errors.description = 'Enter at least 5 characters';
        }

        if (!values.targetDate) {
            errors.targetDate = 'Enter a valid date';
        }

        return errors;
    }

    return (
        <div>
            <h1>Edit Todo</h1>
            <Formik
                initialValues={{ description, targetDate }}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {props => (
                    <Form>
                        <ErrorMessage name="description" component="div" className="alert alert-warning" />
                        <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />

                        <fieldset className="form-group">
                            <label>Description</label>
                            <Field type="text" className="form-control" name="description" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Target Date</label>
                            <Field type="text" className="form-control" name="targetDate" />
                        </fieldset>
                        <div>
                            <button className="btn btn-success m-5" type="submit">Save</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}