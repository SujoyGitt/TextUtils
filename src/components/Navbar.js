import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
  return (
    <>
      <nav className={`navbar navbar-expand-sm navbar-${props.mode !== 'light'?'dark':'light'} bg-${props.mode}`}>
        <div className="container-fluid">
          <NavLink to='/' className="navbar-brand">{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  {props.abtext}
                </NavLink>
              </li>
            </ul>
            <div className='d-flex'>
              <div className='rounded bg-info mx-2' style={{height:'25px',width:'25px',cursor:'pointer'}} onClick={()=>{props.togglemode('info')}}></div>
              <div className='rounded bg-danger mx-2' style={{height:'25px',width:'25px',cursor:'pointer'}} onClick={()=>{props.togglemode('danger')}}></div>
              <div className='rounded bg-warning mx-2' style={{height:'25px',width:'25px',cursor:'pointer'}} onClick={()=>{props.togglemode('warning')}}></div>
            </div>
            <FormGroup>
            <FormControlLabel control={<IOSSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />} label="🔆 Success Mode" onClick={props.toggleModesucc}/>
            </FormGroup>
            <FormGroup><FormControlLabel control={ <Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary"/>}label="🔆 Primary Mode" onClick={props.toggleModepri}/></FormGroup>
            <FormGroup>
              <FormControlLabel 
                control={<Switch checked={checked} onChange={toggleChecked} onClick={props.toggleblackmode}/>}
              label='🔆 Change mode' className={`text-${props.mode === 'light'?'dark':'light'}`}/>
            </FormGroup>
            
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abtext: PropTypes.string,
};
Navbar.defaultProps = { title: "set tile here", abtext: "About" };
