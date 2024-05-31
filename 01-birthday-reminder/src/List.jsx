import PropTypes from "prop-types";

const List = ({ name, age, image }) => {
  return (
    <div className="profile">
      <img src={image} alt={name} />
      <div className="profile-info">
        <h2>{name}</h2>
        <h3>{age} years</h3>
      </div>
    </div>
  );
};

//INFO:The props are usually required to be used correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components. Props validation is a tool that will help the developers to avoid future bugs and problems.
List.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default List;
