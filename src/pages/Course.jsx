import { useEffect, useState } from 'react';
import { API_GET_ONE_COURSE } from '../utils/API';
import store from 'store';
import { Link, useParams } from 'react-router-dom';
import {
  BackLink,
  Container,
  Date,
  DateBox,
  DateWrapper,
  Description,
  Hours,
  ImgBox,
  Information,
  ListItem,
  Title,
} from '../components/styled';
import { format, parseISO } from 'date-fns';
import { LessonsList } from '../components/LessonsList/LessonsList';
import { BsArrowLeft } from 'react-icons/bs';
// eslint-disable-next-line
import { ReactPlayerComp } from '../components/ReactPlayerComp/ReactPlayerComp';
import { Loader } from '../components/Loader/Loader';
import { useMediaRules } from '../utils/mediaQueries';

export const Course = () => {
  const { isDesktop } = useMediaRules();

  const { course: id } = useParams();

  const [course, setCourse] = useState(() => {
    const course = store.get('course');
    return !course ? [] : course;
  });

  const [, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getOneCourse() {
      setIsLoading(true);
      const token = store.get('token');

      try {
        const course = await API_GET_ONE_COURSE(token, id);
        setCourse(course);
        store.set('course', course);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getOneCourse();
  }, [id]);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  if (Object.keys(course).length === 0) return;

  const {
    // eslint-disable-next-line
    id: courseId,
    title,
    description,
    launchDate,
    lessons,
    // eslint-disable-next-line
    meta,
  } = course;

  return (
    <Container>
      <BackLink>
        <Link to="/">
          <BsArrowLeft size={30} /> Back
        </Link>
      </BackLink>
      <ListItem as="div" isDesktop={isDesktop}>
        <ImgBox>
          {/* <ReactPlayerComp
            id={courseId}
            link={meta.courseVideoPreview.link}
            controls="true"
            width="960"
            height="540"
          /> */}
        </ImgBox>

        <Information>
          <DateBox>
            <DateWrapper>
              <Date>{format(parseISO(launchDate), 'MMM dd yyyy')}</Date>
              <Hours>{format(parseISO(launchDate), 'HH:mm')}</Hours>
            </DateWrapper>
          </DateBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Information>
      </ListItem>
      <Title as="p">Total lessons {lessons.length}</Title>
      <LessonsList list={lessons} />
    </Container>
  );
};
