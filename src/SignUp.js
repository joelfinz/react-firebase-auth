import React, { useCallback } from 'react';
import { withRouter } from "react-router";
import app from "./fbase";
import { Card, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);
    return (
        <>
            <Card raised={true}>
                <Card.Content textAlign='left'>
                    <h1>Sign Up</h1>
                    <Form onSubmit={handleSignUp}>
                        <Form.Field>
                            <label>Email</label>
                            <input name="email" type="email" placeholder="Your email" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Your password" />
                        </Form.Field>
                        <Button type="submit">Sign Up</Button>
                    </Form><br />
                    <center>
                        Already have an account? <Link to='/login'>Log in</Link> then.
                    </center>
                </Card.Content>
            </Card>
        </>
    );
};

export default withRouter(SignUp);