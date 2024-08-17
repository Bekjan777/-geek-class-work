import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import {useDispatch} from "react-redux";
import {addUserAction} from "../../redux/actions";

const UserRegisterPage = () => {

    const dispatch = useDispatch()

    const [user, setUser] = React.useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const formValue = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    const addUser = (e) => {
        if(regEx.test(user.password) && user.password === user.confirm_password) {
            e.preventDefault()
            dispatch(addUserAction(user))
            console.log('submitted')
        } else{
            e.preventDefault()
            alert('Either password does not math requirements(Minimum eight characters, at least one letter and one number) or passwords are different')
            console.log('Either password does not math requirements(Minimum eight characters, at least one letter and one number) or passwords are different')
        }
    }

    const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={2}>
                        <Form.Group  className="mb-3" controlId="name">
                            <Form.Control
                                onChange={formValue}
                                type="text"
                                placeholder="name"
                                name="name"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                onChange={formValue}
                                placeholder="username"
                                name="username"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                onChange={formValue}
                                type="text"
                                placeholder="email"
                                name="email"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2}>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control
                                onChange={formValue}
                                type="password"
                                placeholder="password"
                                name="password"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2}>
                        <Form.Group className="mb-3" controlId="confirm_password">
                            <Form.Control
                                onChange={formValue}
                                type="password"
                                placeholder="confirm password"
                                name="confirm_password"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={2}>
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
