import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BsFillFileEarmarkLock2Fill } from 'react-icons/bs';
import { LessonsListBox } from '../styled';
import { ReactPlayerComp } from '../ReactPlayerComp/ReactPlayerComp';

export const LessonsList = ({ list }) => {
  const items = list.map(({ id, title, status, link }, idx) => {
    return (
      <Accordion key={id} disabled={status === 'locked' ? true : false}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <div>
            {status === 'locked' && <BsFillFileEarmarkLock2Fill />}
            <span>
              Lesson {idx + 1} : {title}
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {/* <ReactPlayerComp id={id} link={link} width="100%" height="100%" /> */}
        </AccordionDetails>
      </Accordion>
    );
  });
  return <LessonsListBox>{items}</LessonsListBox>;
};
