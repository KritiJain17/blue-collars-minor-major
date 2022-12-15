import React from "react";
import "./styles.openJobList.css";
//import Box from '/Users/jain.kriti@zomato.com/Documents/blue-collars-minor-major-nc/src/components/atoms/box.atom.js'
import mockList from "/Users/jain.kriti@zomato.com/Documents/blue-collars-minor-major-nc/src/mock/mockdata.js";
const OpenJobsList = () => {
  const jobList = [...mockList];
  console.log(jobList);

  return (
    <div>
      <div className="jobList-tile-header">
        <div className="jobList-column">Id</div>
        {/* <div className="jobList-column">First Name</div>
        <div className="jobList-column">Last Name</div>
        <div className="jobList-column">Gender</div> */}
        <div className="jobList-column">Email</div>
        <div className="jobList-column">Apply here</div>
        {/* <div> {value.Profession} </div> */}
      </div>

      {jobList.map((value, index) => {
        return (
          <div className="jobList-tile">
            <div className="jobList-column"> {value.id} </div>
            {/* <div className="jobList-column"> {value.first_name} </div>
            <div className="jobList-column"> {value.last_name} </div>
            <div className="jobList-column"> {value.gender} </div> */}
            <div className="jobList-column"> {value.email} </div>
            <div className="jobList-column">
              {" "}
              <button className="apply-button">Apply</button>{" "}
            </div>

            {/* <div> {value.Profession} </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default OpenJobsList;
