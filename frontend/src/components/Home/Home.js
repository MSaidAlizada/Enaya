// import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-color: #f8f9fa;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 40px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const Home = () => {
    return (
        <StyledHome>
            <Title>Welcome to Enaya</Title>
            <Subtitle>Medical Archives</Subtitle>
            <div>
                <Button>Log In</Button>
                <Button>Sign Up</Button>
            </div>
        </StyledHome>
    );
};

export default Home;