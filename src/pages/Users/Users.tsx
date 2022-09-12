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
`;


const Users = () => {
    return (
        <Container>
            <Title>Add new user</Title>
            <InputCollection>
                <NameCase>
                    <InputDesc>Name</InputDesc>
                    <Input placeholder="..."/>
                </NameCase>
                <SurnameCase>
                    <InputDesc>Surname</InputDesc>
                    <Input placeholder="..."/>
                </SurnameCase>
            </InputCollection>
            <Button>Create user</Button>
 </Container>
    );
};

export default Users;