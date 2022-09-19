import React, {FC} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import { useFormik} from "formik";
import * as Yup from "yup";
import {INewsItemType} from "../../redux/NewsSlice/types";
import {addNews} from "../../redux/NewsSlice/NewsSlice";
import {AppDispatch} from "../../App";
import {useAppSelector} from "../../Hooks";


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
const TitleCase = styled.div`
  margin: 15px 0;
`;

const TitleInput = styled.input`
  padding: 7px 0 7px 4px;
  width: 30%;
`;

const InputDesc = styled.p`
  color: gray;
  margin: 5px 0;
`;

const AuthorCase = styled.div`
  margin: 15px 0;
`;

const AuthorInput = styled.input`
  padding: 7px 0 7px 4px;
  width: 30%;
`;

const NewsCase = styled.div`
  margin: 15px 0;
`;

const NewsInput = styled.textarea`
  padding: 7px 0;
  width: 30%;
  height: 200px;
  text-align: center;
`;

const Form = styled.form`
`;

const Button = styled.button`
  padding: 15px 40px;
  background-color: #20c220;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
`;


const AddNews:FC<{}> = () => {
const dispatch = useDispatch<AppDispatch>()
const {users} = useAppSelector(s =>s.usersReducer )
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            title: '',
            content: '',
            author: '',
            createdAt: 0,
            view: 0,
            likes: 0,
            dislikes: 0,
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
        onSubmit: (values: INewsItemType) => {
            dispatch(addNews(values))
            formik.resetForm()
            // toast.success('User added')
        }})

 return (
        <Form onSubmit={formik.handleSubmit}>
        <Container>
            <Title> Add a new post </Title>
            <InputCollection>
                <TitleCase>
                    <InputDesc>News title</InputDesc>
                    <TitleInput placeholder="Title"
                                value={formik.values.title}
                                id='title'
                                name="title"
                                type="text"
                                onChange={formik.handleChange}/>
                </TitleCase>
                <AuthorCase>
                    <select>
                    <InputDesc> Author
                    </InputDesc>
                    <option>None</option>
                    {
                        users.map(user =>
                            <option value={user.id} key={user.id}>{user.name}{user.surname}</option>
                        )
                    }
                    </select>
                    <AuthorInput placeholder="Please select the author"
                                 value={formik.values.author}
                                 id='author'
                                 name="author"
                                 type="text"
                                 onChange={formik.handleChange}

                    />

                </AuthorCase>
                <NewsCase>
                    <InputDesc>News text</InputDesc>
                    <NewsInput placeholder="Please write your news"
                               value={formik.values.content}
                               id='content'
                               name="content"
                               onChange={formik.handleChange}/>
                </NewsCase>
            </InputCollection>
            <Button type="submit">Create news</Button>
      </Container>
        </Form>
    );
};

export default AddNews;