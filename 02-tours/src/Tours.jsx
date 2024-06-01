import Tour from "./Tour";
import PropTypes from "prop-types";

const Tours = ({ info }) => {
  console.log(info);

  return (
    <section className="all-tours">
      {info.map((data) => {
        return <Tour key={data.id} {...data} />;
      })}
    </section>
  );
};

Tours.propTypes = {
  info: PropTypes.array.isRequired,
};

export default Tours;
