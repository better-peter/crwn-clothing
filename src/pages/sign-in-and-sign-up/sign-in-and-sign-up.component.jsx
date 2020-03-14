import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInAndOutContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndOutContainer>
    <SignIn />
    <SignUp />
  </SignInAndOutContainer>
);

export default SignInAndSignUpPage;
