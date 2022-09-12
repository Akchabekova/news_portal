import React from 'react';
import styled from 'styled-components';


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

const NewsInput = styled.input`
  padding: 7px 0;
  width: 30%;
  height: 200px;
  text-align: center;
`;

const Button = styled.button`
  padding: 15px 40px;
  background-color: #20c220;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
`;


const AddNews = () => {
    return (
        <Container>
            <Title> Add a new post </Title>
            <InputCollection>
                <TitleCase>
                    <InputDesc>News title</InputDesc>
                    <TitleInput placeholder="Title"/>
                </TitleCase>
                <AuthorCase>
                    <InputDesc> Author</InputDesc>
                    <AuthorInput placeholder="Please select the author"/>
                </AuthorCase>
                <NewsCase>
                    <InputDesc>News text</InputDesc>
                    <NewsInput placeholder="Please write your post"/>
                </NewsCase>
            </InputCollection>
            <Button>Create news</Button>

        </Container>
    );
};

export default AddNews;