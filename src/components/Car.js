const Car = (props) => {
  const images = props.image;
  const word = props.word;
  const word2 = props.word2;
  return (
    <div>
      <div className="carBorder">
        <img src={images} width={500} height={300} />
        <div>{word}</div>
        <div>{word2}</div>
      </div>
    </div>
  );
};
export default Car;
