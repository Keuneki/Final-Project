const Element = ({ element }) => {
    return (
      <div>
        <img src={element.image} alt={element.name} />
        <h3>{element.name}</h3>
      </div>
    );
  };
  
  export default Element;
  