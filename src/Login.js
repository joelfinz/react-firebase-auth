import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import app from './fbase';
import { AuthContext } from './Auth';
import { Card, CardContent, Form, Button } from 'semantic-ui-react';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        }, [history]
    )
    const { currUser } = useContext(AuthContext);
    if (currUser) {
        return <Redirect to="/" />
    }
    return (
        <>

            <Card raised={true}>
                <CardContent textAlign='left'>
                    <h1>Log in</h1>
                    <Form onSubmit={handleLogin}>
                        <Form.Field>
                            <label>Email</label>
                            <input name="email" type="email" placeholder="Email" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Password" />
                        </Form.Field>
                        <Button type="submit">Log in</Button><br /><br />
                        <center>
                            No account? <Link to="/signup">Sign Up</Link> now.
                        </center>
                    </Form>

                </CardContent>
            </Card>

        </>
    );
};

export default withRouter(Login);