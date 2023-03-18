import { Icon } from '../components/Icon/Icon';
import { format, parseISO } from 'date-fns';
import { pagination } from '../utils/pagination.js';

import {
  Container,
  CoursesList,
  Date,
  DateBox,
  DateWrapper,
  Description,
  Hours,
  Image,
  ImgBox,
  ImgLabel,
  Information,
  Lessons,
  ListItem,
  PaginationBox,
  Rating,
  Title,
} from '../components/styled';
import { useEffect, useState } from 'react';
import store from 'store';
import { API_GET_COURSES, API_GET_TOKEN } from '../utils/API';
import { SkillsList } from '../components/SkillsList/SkillsList';
import { greenPalitra } from '../utils/palitra';
import { Details } from '../components/Details/Details';
import { Pagination, Stack } from '@mui/material';
import { Loader } from '../components/Loader/Loader';
import { useMediaRules } from '../utils/mediaQueries';

export const Main = () => {
  const { isMobile, isDesktop } = useMediaRules();

  const [page, setPage] = useState(1);
  const [token, setToken] = useState(() => {
    const token = store.get('token');
    return !token ? '' : token;
  });
  const [courses, setCourses] = useState(() => {
    const courses = store.get('courses');
    return !courses ? [] : courses;
  });
  const [, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) return;
    async function getToken() {
      setIsLoading(true);
      try {
        const { token } = await API_GET_TOKEN();
        setToken(token);
        store.set('token', token);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getToken();
  }, [token]);

  useEffect(() => {
    async function getCourses() {
      setIsLoading(true);
      try {
        const { courses } = await API_GET_COURSES(token);
        setCourses(courses);
        store.set('courses', courses);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCourses();
  }, [token]);

  const handlePagination = ({ currentTarget }) => {
    const valueString = currentTarget.attributes['aria-label'].value;
    const [, , , val] = valueString.split(' ');
    setPage(+val);
  };

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  const { start, end } = pagination(courses, page);

  if (!courses.length) return;

  const items = courses
    .slice(start, end)
    .map(
      (
        { id, title, description, launchDate, rating, previewImageLink, lessonsCount, meta },
        idx
      ) => {
        return (
          <ListItem key={id} color={greenPalitra[idx]} isDesktop={isDesktop}>
            <ImgBox>
              <Image src={previewImageLink + '/cover.webp'} alt={title} />
              <ImgLabel>
                <Rating>{rating}</Rating>
                <Icon />
              </ImgLabel>
            </ImgBox>

            <Information>
              <DateBox>
                <DateWrapper>
                  <Date>{format(parseISO(launchDate), 'MMM dd yyyy')}</Date>
                  <Hours>{format(parseISO(launchDate), 'HH:mm')}</Hours>
                </DateWrapper>
                <Lessons>
                  <span>{lessonsCount}</span>
                  Lessons
                </Lessons>
              </DateBox>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Title>Skills</Title>
              <SkillsList list={meta.skills} />
              <Details path={id} />
            </Information>
          </ListItem>
        );
      }
    );

  return (
    <Container isDesktop={isDesktop}>
      <h1>GENESIS COURSES TEST</h1>
      <CoursesList>{items}</CoursesList>
      <PaginationBox>
        <Stack spacing={5}>
          <Pagination
            count={Math.ceil(courses.length / 10)}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handlePagination}
            size="large"
            hidePrevButton
            hideNextButton
          />
        </Stack>
      </PaginationBox>
    </Container>
  );
};
