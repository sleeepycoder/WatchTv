import React ,{useEffect}from "react";
import styled from "styled-components";
import {
  selectUserName,
  // selectUserPhoto,
  setUserLogin,
  setSignOut
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';

function Header() {

 
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  // const userPhoto = useSelector(selectUserPhoto);

useEffect(()=>{
auth.onAuthStateChanged(async(user)=>{

  if(user){
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }))
      navigate("/")
  }
})

},[])




  const signIn = () => {
  auth.signInWithPopup(provider).then((result) => {
console.log(result);

      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      )
      navigate("/");
    })
  }
  
  const  signOut =() => {
    auth.signOut().then(() => {
    dispatch(setSignOut());
    navigate("/login");
      })
  }





  return (
    <Container>
      <Nav>
        <Logo src="/images/logo.svg" />
        {!userName ? (
          <LoginContainer  >
            <Login onClick={signIn}> Login</Login>
          </LoginContainer>
        ) :  
          <>
            <NavMenu>
              <a href="/">
                <img src="/images/home-icon.svg" alt="no images" />
                <span>HOME</span>
              </a>
              <a href="/">
                <img src="/images/search-icon.svg" alt="no images" />
                <span>SEARCH</span>
              </a>
              <a href="/">
                <img src="/images/watchlist-icon.svg" alt="no images" />
                <span>WATCHLIST</span>
              </a>
              <a href="/">
                <img src="/images/original-icon.svg" alt="no images" />
                <span>ORIGINALS</span>
              </a>
              <a href="/">
                <img src="/images/movie-icon.svg" alt="no images" />
                <span>MOVIE</span>
              </a>
              <a href="/">
                <img src="/images/series-icon.svg" alt="no images" />
                <span>SERIES</span>
              </a>
            </NavMenu>
            <UserImg  onClick={signOut}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1R1vbjJquxCZce8yEncdFhoAk1d-bECwGlw&usqp=CAU"
              alt="Error"
            />
          </>
        }
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: #090b13;
`;

const Nav = styled.div`
  overflow-x: hidden;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: white;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transfrom: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
