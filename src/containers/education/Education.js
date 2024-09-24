import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.educations.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
        <h1 className="education-heading">University</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
        <h1 className="education-heading">Certificate</h1>
        <div className="education-card-container">
          {educationInfo.certificates.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
        <h1 className="education-heading">Award</h1>
        <div className="education-card-container">
          {educationInfo.awards.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
