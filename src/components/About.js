import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function About(props) {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  let myStyle = {
    color:`${props.mode === 'dark' ? 'white':"rgb(59, 59, 59)" } `,
    backgroundColor: `${props.mode  === "dark" ? "rgba(0, 0, 0, 0.247)" : 'white'} ` ,
    borderBottom:`.5px solid ${props.mode  === "dark" ? "grey" : 'none'} `
  };
  return (
    <>
      <div className='container-fluid about'>
        <div className="col-10 col-sm-8 col-md-6 m-auto my-0">
          <h1 className="my-3 text-white">About Us</h1>
          <Accordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            style={myStyle}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              style={myStyle}
            >
              <Typography  >
                <strong>Analyze Your text</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={myStyle}>
              <Typography>
                Textutils give your a way to anlyze your text quickly and
                efficiently. Be it word count, character count or ,
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            style={myStyle}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              style={myStyle}
            >
              <Typography>
                <strong>Free to Use</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={myStyle}>
              <Typography>
                TextUtils is a free character counter tool that provides instant
                character count & word statistics for a given text. TextUtils
                reports the number of words and Charecters. Thus it is suitable
                for writing text with word/ character limit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            style={myStyle}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              style={myStyle}
            >
              <Typography>
                <strong>Browser Compatible</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={myStyle}>
              <Typography>
                This word counter software works in any web browers such as
                Chrome, Firefox, Internet , Internet Explorer , Safari,Opera. It
                suits to count characters in facebook, blog , books , excel
                document, pdf document ,essays, etc.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
export default About;
