import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './Addusers.module.css'
import ErorModal from '../UI/ErorModal'

import Wrapper from '../Help/Wrapper'
const AddUser = (props) => {
    const nameInput = useRef()
    const ageInput = useRef()



    // const [enteredUsername, setEnteredUsername] = useState('')
    // const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()


    const addUserhandler = (e) => {
        e.preventDefault()

        const userNameInput = nameInput.current.value
        const userAgeInput = ageInput.current.value
        // kiểm tra điều kiện đầu vào
        if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Mời cụ nhập hộ con  đủ thông tin (Tên Và tuổi ạ ) !!!!!'
            })
            return;
        }
        if (+userAgeInput < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Nhập tuổi phải > 0 ok'
            })
            return
        }
        props.onAdduser(userNameInput, userAgeInput)

        nameInput.current.value = ''
        ageInput.current.value = ''
        // console.log(enteredAge, enteredUsername)
        // setEnteredUsername('')
        // setEnteredAge('')
    }

    // dòng này là dùng ueState
    // uername
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }
    // // Age
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }

    const errrHanlder = () => {
        setError(null)
    }
    return (
        <Wrapper>
            <Card className={classes.input}>
                <form onSubmit={addUserhandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username" type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInput}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age" type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInput}
                    />
                    <Button type="submit">Add Users</Button>
                </form>
            </Card>
            {error && <ErorModal
                Confirm={errrHanlder}
                title={error.title}
                message={error.message}
            />}
        </Wrapper>
    )
}

export default AddUser
// chung quy lại thì thằng  useRef thì n sẽ là lấy giá trị của ô input vào rồi sẽ k cần State