import React from 'react';
import {useAppSelector} from "../../Hooks";
import styled from 'styled-components';


const Container = styled.div`
  font-family: 'Abel', sans-serif;
  padding: 15px 30px;

`;
const PostCase = styled.div`
border: 1px solid green;
  padding: 10px;

`;
const PostTitle = styled.h4`


`;
const PostContent = styled.div`

  

`;
const PostAuthor = styled.h5`


`;
const PostDate = styled.div`


`;










const News = () => {
 const { news } = useAppSelector((s) => s.newsReducer)
    return (
        <div>
            {
                news.map((item)=> (
                <Container key={item.id}>
                    <PostCase>
                        <PostTitle>{item.title}</PostTitle>
                        <PostContent>{item.content}</PostContent>
                        <PostAuthor>{item.author}</PostAuthor>
                        <PostDate></PostDate>
                    </PostCase>
                </Container>
                ))
            }
        </div>
    );
};

export default News;