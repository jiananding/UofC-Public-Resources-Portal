import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
  return (
    <React.Fragment>
        <div class="scheduleContainer MuiGrid-root">
              <div class="time start-800">8:00</div>
              <div class="time start-830">8:30</div>
              <div class="time start-900">9:00</div>
              <div class="time start-930">9:30</div>
              <div class="time start-1000">10:00</div>
              <div class="time start-1030">10:30</div>
              <div class="time start-1100">11:00</div>
              <div class="time start-1130">11:30</div>
              <div class="time start-1200">12:00</div>
              <div class="time start-1230">12:30</div>
              <div class="time start-1300">13:00</div>
              <div class="time start-1330">13:30</div>
              <div class="time start-1400">14:00</div>
              <div class="time start-1430">14:30</div>
              <div class="time start-1500">15:00</div>
              <div class="time start-1530">15:30</div>
              <div class="time start-1600">16:00</div>
              <div class="time start-1630">16:30</div>
              <div class="time start-1700">17:00</div>
              <div class="time start-1730">17:30</div>
              <div class="time start-1800">18:00</div>
              <div class="time start-1830">18:30</div>
              <div class="time start-1900">19:00</div>
              <div class="time start-1930">19:30</div>
              <div class="time start-2000">20:00</div>
              <div class="time start-2030">20:30</div>
              <div class="time start-2100">21:00</div>
              <div class="time start-2130">21:30</div>
              <div class="event stage-saturn start-800 end-930 length-4">Arrival and registration <span>Registration Area</span></div>
              <div class="event stage-earth start-1000 end-1000 length-4">Welcome <span>Earth Stage</span></div>
              <div class="event stage-earth start-1030 end-1030 length-4">Speaker One <span>Earth Stage</span></div>
              <div class="event stage-earth start-1100 end-1100 length-4">Speaker Two <span>Earth Stage</span></div>
              <div class="event stage-earth start-1130 end-1130 length-4">Speaker Three <span>Earth Stage</span></div>
              <div class="event stage-mercury start-1200 end-1600 length-1">Speaker Five <span>Mercury Stage</span></div>
              <div class="event stage-venus start-1200 end-1600 length-1">Speaker Six <span>Venus Stage</span></div>
              <div class="event stage-mars start-1200 end-1600 length-1">Speaker Seven <span>Mars Stage</span></div>
              <div class="event stage-saturn start-1200 end-1300 length-1">Lunch <span>Saturn Stage</span></div>
              <div class="event stage-earth start-1630 end-1630 length-4">Speaker Eigth <span>Earth Stage</span></div>
              <div class="event stage-earth start-1700 end-1700 length-4">Speaker Nine <span>Earth Stage</span></div>
              <div class="event stage-saturn start-1730 end-1730 length-4">Break <span>Saturn Stage</span></div>
              <div class="event stage-earth start-1800 end-1900 length-1">Speaker Ten <span>Earth Stage</span></div>
              <div class="event stage-mercury start-1800 end-1900 length-1">Speaker Eleven <span>Mercury Stage</span></div>
              <div class="event stage-jupiter start-1800 end-1900 length-2">Speaker Twelve <span>Jupiter Stage</span></div>
              <div class="event stage-venus start-1930 end-2130 length-2">Speaker Thirteen <span>Venus Stage</span></div>
              <div class="event stage-saturn start-1930 end-2130 length-2">Drinks <span>Saturn Stage</span></div>
        </div>
    </React.Fragment>
  );
}

Title.propTypes = {
  children: PropTypes.node
};