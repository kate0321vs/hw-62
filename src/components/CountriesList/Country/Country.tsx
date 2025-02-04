
interface Props {
  name: string;
  onClickCountry: React.MouseEventHandler;
}

const Country: React.FC<Props> = ({name, onClickCountry}) => {
  return (
      <a href="#"
         className="list-group-item list-group-item-primary list-group-item-action"
         onClick={onClickCountry}>
        {name}
      </a>
  );
};

export default Country;