import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
  const { id } = useParams();

  console.log({ id });

  const [movie, setMovie] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          //save the movie data
        }
      });
  }, [id]);

  console.log("This is Movie", movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="NO" />
          </Background>
          <ImgTitle>
            <img src={movie.titleImg} alt="no" />
          </ImgTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="no" />
              <spa>Play</spa>
            </PlayButton>

            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="no" />
              <spa>Trailer</spa>
            </TrailerButton>

            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="no" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.Subtitle}</SubTitle>
          <Description>
            <p>{movie.description}</p>
          </Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  margin-top: 60px;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  height: 56px;
  background: rgb (249, 249, 249);
  display: flex;
  border: none;
  align-items: center;
  letter-spacing: 1.8;
  cursor: pointer;

  &:hover {
    background: rgba(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  height: 44px;
  width: 44px;
  margin-right: 16px;
  displey: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;

  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 500%;
`;
