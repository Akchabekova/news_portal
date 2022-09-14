import * as React from 'react';
import {Field, useFormik,} from 'formik';
import styled from 'styled-components';
import { FC } from "react"
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import {addUsers, fetchUsers} from "../../redux/UserSlice/UserSlice";
import {IUsersItemType} from "../../redux/UserSlice/types";
import {createAsyncThunk} from "@reduxjs/toolkit";


const Container = styled.div`
  font-family: 'Abel', sans-serif;
  padding: 15px 30px;

`;
const Title = styled.h2`
  font-size: 26px;
  font-weight: 400;
`;
const InputCollection = styled.div`

`;
const InputDesc = styled.p`
  color: gray;
  margin: 5px 0;
`;
const Input = styled.input`
  padding: 7px 0 7px 4px;
  width: 30%;
`;

const NameCase = styled.div`
  margin: 15px 0;
`;
const SurnameCase = styled.div`
  margin: 15px 0;
`;
const Button = styled.button`
  padding: 15px 40px;
  background-color: #20c220;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
 const Form = styled.form`
 
 `;

export const Users:FC<{}> = () => {
// const initialValues: IUsersItemType = {
//     name: '',
//     surname: '',
//     createdAt: 0,
//     id: ''
// },
const dispatch = useDispatch()
  const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            createdAt: 0,
            id: ''
        },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required'),
        surname: Yup.string()
            .min(2, 'Too Short!')
            .max(12, 'Too Long!')
            .required('Required'),
    }),
        onSubmit: (values: IUsersItemType) => {
        alert(JSON.stringify(values))
            // dispatch(addUsers(values))
            console.log("1234")
        // formik.resetForm()
        // toast.success('User added')
    }})

  return (

      <Container>
          <Form onSubmit={formik.handleSubmit}>
              <Title>Add new user</Title>
              <InputCollection>
                  <NameCase>
                      <InputDesc>Name</InputDesc>
                      <Input placeholder="..."
                             value={formik.values.name}
                             id='name'
                             name="name"
                             type="text"
                             onChange={formik.handleChange}

                      />
                  </NameCase>
                  <SurnameCase>
                      <InputDesc>Surname</InputDesc>
                      <Input placeholder="..."
                             value={formik.values.surname}
                             id='surname'
                             name="surname"
                             type="text"
                             onChange={formik.handleChange}
                      />
                  </SurnameCase>
              </InputCollection>
              <Button type="submit" >Create user</Button>
          </Form>

 </Container>
    );
};

export default Users;