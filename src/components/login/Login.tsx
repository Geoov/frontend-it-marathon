import React, { useState } from 'react'
import { Button, Card, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
// import { Store } from '../Store'
import { tokenState } from '../../reducers/tokenReducer'

import './Login.scss'

function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const token = useSelector<tokenState, tokenState['token']>(
        (state) => state.token
    )

    const dispatch = useDispatch()

    function sendLogin() {
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + '/authenticate',
            data: {
                username: username,
                password: password,
            },
        })
            .then((res) => res.data)
            .then((data) => {
                if (data.token != null) {
                    let token: string
                    token = data.token
                    dispatch({ type: 'SET_TOKEN', payload: token })

                    localStorage.setItem('token', token)
                }
            })
    }

    return (
        <div className="form-wrapper">
            <Card>
                <Typography variant="h4">Login</Typography>
                <br />
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Parolă"
                    variant="outlined"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <br />
                <Button variant="contained" color="primary" onClick={sendLogin}>
                    Conectare
                </Button>
            </Card>
        </div>
    )
}

export default App
