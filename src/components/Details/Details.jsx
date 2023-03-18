import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

export const Details = ({ path }) => {
  return (
    <NavLink to={`/${path}`}>
      Details <BsArrowRight size={30} color={'black'} />
    </NavLink>
  );
};
