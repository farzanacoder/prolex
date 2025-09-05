'use client'
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaAngleDown } from "react-icons/fa6";

export default function FaQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };



  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="hd">
              Frequently asked <span>Questions</span>
            </h2>
            <br />


                  <Accordion defaultExpanded expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">01 Which license do I need?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Uniquely leverage others distinctive infomediaries rather than leveraged supply chains. Continually seize distributed collaboration and idea-sharing whereas user.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            </Accordion>


                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">02 How do I get access to a theme?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower.
              </AccordionDetails>
            </Accordion>

                  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">03 How do I see previous orders?</Typography>
              </AccordionSummary>
              <AccordionDetails>
              Uniquely leverage others distinctive infomediaries rather than leveraged supply chains. Continually seize distributed collaboration and idea-sharing whereas user.
              </AccordionDetails>
            </Accordion>


                  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                <Typography component="span">04 How can set notification?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Rapidiously incentivize virtual e-commerce and exceptional e-tailers. Progressively network focused catalysts for change without orthogonal benefits. Dramatically empower.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
