import icons from '../../img/icons.svg';

export const Icon = () => {
  return (
    <svg width={52} height={56} fill={'orange'}>
      <use href={icons + '#icon-star'}></use>
    </svg>
  );
};
