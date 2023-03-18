import { orangePalitra } from '../../utils/palitra';
import { List, ListItem } from './styled';

export const SkillsList = ({ list }) => {
  const items = list.map((el, idx) => (
    <ListItem key={el} color={orangePalitra[idx]}>
      {el}
    </ListItem>
  ));
  return <List>{items}</List>;
};
