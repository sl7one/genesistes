import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  padding: ${({ isDesktop }) => (isDesktop ? '30px 30px' : '20px 20px')};
  h1 {
    margin-bottom: 30px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? 'row' : 'column')};
  gap: 30px;
  background-color: ${({ color }) => color};
  padding: 20px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.4);

  a {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
`;
export const CoursesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ImgBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  max-width: 767px;
  border-radius: 10px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ImgLabel = styled.div`
  position: absolute;
  top: 10%;
  right: 7%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;

    animation: ${rotate} 10s linear infinite;
  }
`;

export const Rating = styled.p`
  position: absolute;
  font-weight: 600;
  color: white;
  z-index: 1;
`;

export const Information = styled.div`
  width: 100%;
  a {
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid orange;
    padding: 5px 5px;
    border-radius: 8px;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  display: flex;
`;

export const Date = styled.p`
  padding: 5px;
  border-radius: 5px;
  background-color: orange;
  border: 2px solid white;
`;

export const Hours = styled.p`
   padding: 5px;
    background-color: white;
    border-radius: 5px;
    margin-left: 10px;
    border: 2px solid white;

  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  font-size: 20px;
`;

export const Description = styled.p`
  margin-top: 20px;
`;

export const Lessons = styled.p`
  display: flex;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    background-color: orange;
    padding: 10px;
    border: 2px solid white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-weight: 600px;
    margin-right: 10px;
  }
`;

export const LessonsListBox = styled.div`
  margin-top: 30px;
`;

export const BackLink = styled.div`
  a {
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 30px;
    background-color: orange;
    border: 2px solid black;
    padding: 5px 5px;
    border-radius: 8px;
    margin-bottom: 30px;
  }
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
