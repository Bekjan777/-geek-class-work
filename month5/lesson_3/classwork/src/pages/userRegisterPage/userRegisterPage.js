import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import {useDispatch} from "react-redux";
import {addUserAction} from "../../redux/actions";

const UserRegisterPage = () => {

    const dispatch = useDispatch()

    const [user, setUser] = React.useState({
        name: '',
        username: '',
        email: ''
    })

    const formValue = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }
    console.log(user)

    const addUser = (e) => {
        e.preventDefault()
        dispatch(addUserAction(user))
        console.log('submitted')
    }
    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={3}>
                        <Form.Group  className="mb-3" controlId="name">
                            <Form.Control
                                onChange={formValue}
                                type="text"
                                placeholder="name"
                                name="name"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                onChange={formValue}
                                placeholder="username"
                                name="username"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                onChange={formValue}
                                type="text"
                                placeholder="email"
                                name="email"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button  type="submit" variant="success" className="w-100">
                            register user
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default UserRegisterPage
