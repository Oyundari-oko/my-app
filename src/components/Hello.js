const Name = (props) => {
  const names = props.Name;
  const ages = props.ages;
  return (
    <div>
      <div>{names}</div>
      <div>{ages}</div>
    </div>
  );
};
export default Name;
