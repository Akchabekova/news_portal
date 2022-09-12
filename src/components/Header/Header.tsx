import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Container = styled.div`
  font-family: 'Abel', sans-serif;
  padding: 15px 30px;
  border-bottom: 2px solid gray;
`;

const Navigation = styled.div`
  display: flex;
  font-size: 22px;
  line-height: 18px;
`;

const LinkItem= styled.div`
  margin-left: 10px;
  list-style: none;
`;


const Header = () => {
    return (
        <Container>
            <Navigation>
                <LinkItem>
                    <Link to="/">Home</Link>
                </LinkItem>
                <LinkItem>
                    <Link to="/users">Users</Link>
                </LinkItem>
                <LinkItem>
                    <Link to="/news">News</Link>
                </LinkItem>
                <LinkItem>
                    <Link to="/addnews">Add news</Link>
                </LinkItem>
            </Navigation>
        </Container>
    );
};

export default Header;