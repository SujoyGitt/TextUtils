let Alert = (props) => {
  return (
    <div style={{height:'50px',background:'transparent'}} >
      {props.salert && (
      <div className={`alert alert-${props.salert.type} fade show col-10 col-md-8 col-lg-6 m-auto`}>
        <strong>{props.salert.type}</strong> : {props.salert.msg}
      </div>
      )}
    </div>
  );
};
export default Alert;
