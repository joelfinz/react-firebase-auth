import React from 'react';
import app from './fbase';
import { Card, Tab, Grid, Form, Radio, List, Button } from 'semantic-ui-react';



const tabpanes = [
    {
        menuItem: 'GOAL',
        render: () => <Tab.Pane attached={false}><Goalcontent /></Tab.Pane>
    },
    {
        menuItem: 'ACTIVITY',
        render: () => <Tab.Pane attached={false}>Activity tab</Tab.Pane>
    },
    {
        menuItem: 'PROFILE',
        render: () => <Tab.Pane attached={false}>Profile tab</Tab.Pane>
    },
    {
        menuItem: 'SELECT COACH',
        render: () => <Tab.Pane attached={false}>Select coach tab</Tab.Pane>
    },
]

const Goalcontent = () => {
    const onSubmit = async (event) => {
        event.preventDefault()
        const goal = event.target.elements.goal.value
        console.log(goal)
        const db = app.firestore();
        db.collection("users").doc().set({ goal: goal }, { merge: true })
            .then(() => {
                console.log("Success");
                alert("record inserted in db")
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Grid columns={2} divided={true}>
                <Grid.Row>
                    <Grid.Column textAlign='left'>
                        <div style={{ paddingTop: '50px', paddingBottom: '100px' }}>
                            <h1>Goal</h1>
                        Select your Primary Goal. What do you want to accomplish in the nex few months?
                        </div>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <div style={{ padding: '50px' }}>
                            <Form onSubmit={onSubmit}>
                                <Form.Field>
                                    <List relaxed>
                                        <List.Item>
                                            <Radio label="Get leaner" name="goal" value="Get leaner" radio={true} />
                                        </List.Item>
                                        <List.Item>
                                            <Radio label="Get active again" name="goal" value="Get active again" radio={true} />
                                        </List.Item>
                                        <List.Item>
                                            <Radio label="Reduce pain or injury" name="goal" value="Reduce pain or injury" radio={true} />
                                        </List.Item>
                                        <List.Item>
                                            <Radio label="Improve cardio or speed" name="goal" value="Improve cardio or speed" radio={true} />
                                        </List.Item>
                                        <List.Item>
                                            <Radio label="Improve sports performance" name="goal" value="Improve sports performance" radio={true} />
                                        </List.Item>
                                    </List><br />
                                    <Button type='submit' size='large'>Submit</Button>
                                </Form.Field>
                            </Form>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}


const Home = () => {

    return (
        <>
            <Card raised={true} fluid={true}>
                <Card.Content>
                    <Tab menu={{ borderless: true, tabular: false }} panes={tabpanes} />
                </Card.Content>
            </Card>
            <Button color='red' floated='right' size='tiny' compact onClick={() => app.auth().signOut()}>Sign out</Button>
        </>
    )
}



export default Home;