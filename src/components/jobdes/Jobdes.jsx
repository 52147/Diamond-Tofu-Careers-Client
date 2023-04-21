import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Jobdes = ({ setTitle,  title}) => {
  
  console.log(setTitle);
  let jobTitle = "";
  let jobDescription = "";
  let jobDuration = "";
  let jobQualifications = "";
  let salary = "";

  if (setTitle === "internship-software-engineer") {
    jobTitle = "Internship Software Engineer";
    salary = "Unpaid";
    jobDescription = (
      <ul>
        <li>
          • Participate in the development of software applications and systems
          under the direction of a project manager.
        </li>
        <li>
          • Write code in one or more programming languages, such as Java,
          Python, C++, etc. Test and debug software to ensure its quality and
          reliability.
        </li>
        <li>
          • Collaborate with cross-functional teams to understand requirements
          and provide solutions.
        </li>
        <li>
          • Participate in code reviews and contribute to the development of
          best practices and standards.
        </li>
        <li>
          • Attend conferences and presentations to stay abreast of project
          progress and provide updates on work.
        </li>
        <li>
          • Learn new technologies and programming languages to continuously
          improve your skills and knowledge.
        </li>
        <li>
          • Note: Responsibilities may vary depending on the company, project,
          and level of experience.
        </li>
      </ul>
    );
    jobQualifications = (
      <ul>
        <li>
          • Currently pursuing a Bachelor's or Master's degree in Computer
          Science, Software Engineering, or a related field.
        </li>
        <li>
          • Strong knowledge of one or more programming languages such as Java,
          Python, C++, etc.
        </li>
        <li>
          • Good understanding of data structures, algorithms, and software
          development principles.
        </li>
        <li>
          • Experience with software development tools such as Git, JIRA, etc.
          is a plus.
        </li>
        <li>
          • Ability to work effectively in a team and communicate ideas clearly.
        </li>
        <li>
          • Ability to learn quickly and adapt to new technologies and
          programming languages.
        </li>
        <li>• Strong problem-solving skills and attention to detail.</li>
        <li>• Passion for technology and software development.</li>
      </ul>
    );
    jobDuration = "3-6 months";
  } else if (setTitle === "internship-data-scientist") {
    jobTitle = "Internship Data Scientist";
    salary = "Unpaid";
    jobDescription = (
      <ul>
        <li>
          • Collect, clean, and analyze small business data using Excel, SQL,
          and other tools.
        </li>
        <li>
          • Develop reports and dashboards to present data insights to
          stakeholders.
        </li>
        <li>
          • Assist in conducting market research and analyzing industry trends.
        </li>
        <li>• Support the development and maintenance of client databases.</li>
        <li>
          • Collaborate with team members to identify opportunities for process
          improvement.
        </li>
        <li>
          • Participate in training and professional development opportunities
          to improve data analysis skills.
        </li>
      </ul>
    );
    jobQualifications = (
      <ul>
        <li>
          • Currently pursuing a Bachelor's or Master's degree in Business,
          Economics, Statistics, or a related field.
        </li>
        <li>• Strong proficiency in Excel and SQL.</li>
        <li>
          • Good understanding of statistics and data analysis techniques.
        </li>
        <li>• Strong problem-solving skills and attention to detail.</li>
        <li>• Excellent communication and collaboration skills.</li>
        <li>• Passion for small business and helping them grow.</li>
      </ul>
    );
    jobDuration = "4-6 months";
  } else if (setTitle === "internship-project-manager") {
    jobTitle = "Internship Project Manager";
    salary = "Unpaid";
    jobDescription = (
      <ul>
        <li>
          • Assist in developing project plans, timelines, and budgets in
          collaboration with stakeholders.
        </li>
        <li>
          • Monitor project progress and identify and mitigate risks and issues.
        </li>
        <li>
          • Communicate project status, risks, and issues to stakeholders in a
          timely and effective manner.
        </li>
        <li>
          • Facilitate meetings, ensure action items are tracked and completed,
          and ensure project documentation is up-to-date.
        </li>
        <li>
          • Collaborate with team members to continuously improve project
          management processes and methodologies.
        </li>
        <li>
          • Ensure adherence to project management best practices and company
          standards.
        </li>
      </ul>
    );

    jobQualifications = (
      <ul>
        <li>
          • Currently pursuing a Bachelor's or Master's degree in Business
          Administration, Project Management, or a related field.
        </li>
        <li>
          • Strong project management skills, including the ability to develop
          project plans, manage budgets, and track progress.
        </li>
        <li>
          • Excellent communication and interpersonal skills, with the ability
          to effectively communicate with stakeholders at all levels of the
          organization.
        </li>
        <li>
          • Strong problem-solving and analytical skills, with the ability to
          identify and mitigate risks and issues.
        </li>
        <li>
          • Strong leadership and team management skills, with the ability to
          motivate and manage cross-functional teams.
        </li>
      </ul>
    );

    jobDuration = "6-9 months";
  } else if (setTitle === "full-time-software-engineer") {
    jobTitle = "Full-Time Software Engineer";
    salary = "$120,000 - $150,000 per year";
    jobDescription = (
      <ul>
        <li>
          • Design, develop, and maintain software applications using Java and
          Python.
        </li>
        <li>• Write clean, efficient, and well-documented code.</li>
        <li>
          • Collaborate with cross-functional teams to identify requirements and
          provide technical solutions.
        </li>
        <li>• Debug software and identify and fix bugs.</li>
        <li>
          • Participate in code reviews and contribute to the development of
          best practices and standards.
        </li>
        <li>
          • Continuously learn new technologies and programming languages to
          improve skills and knowledge.
        </li>
      </ul>
    );

    jobQualifications = (
      <ul>
        <li>
          • Bachelor's or master’s degree in computer science or a related
          field.
        </li>
        <li>• 3+ years of experience in software engineering.</li>
        <li>• Strong knowledge of Java and Python.</li>
        <li>
          • Good understanding of data structures, algorithms, and software
          development principles.
        </li>
        <li>
          • Experience with cloud technologies (e.g., AWS, Azure) and
          microservices architecture.
        </li>
        <li>
          • Experience with software development tools such as Git, JIRA, etc.
        </li>
        <li>
          • Ability to work effectively in a team and communicate ideas clearly.
        </li>
        <li>• Strong problem-solving skills and attention to detail.</li>
      </ul>
    );
    jobDuration = "6-9 months";
  } else if (setTitle === "full-time-data-scientist") {
    jobTitle = "Full-Time Data Scientist";
    salary = "$80,000 - $100,000 per year";
    jobDescription = (
      <ul>
        <li>
          • Collect, analyze, and interpret data from various sources to provide
          insights and recommendations to small business clients.
        </li>
        <li>
          • Develop customized reports and dashboards using Excel, Power BI, or
          other tools.
        </li>
        <li>
          • Work with clients to identify key performance indicators (KPIs) and
          track progress against them.
        </li>
        <li>
          • Conduct market research and analyze industry trends to provide
          guidance on business strategy.
        </li>
        <li>
          • Develop and maintain databases to store and track client data.
        </li>
        <li>
          • Provide training and support to clients on data-related tools and
          techniques.
        </li>
      </ul>
    );
    jobQualifications = (
      <ul>
        <li>
          • Bachelor's or Master's degree in Business, Economics, Statistics, or
          a related field.
        </li>
        <li>• 3+ years of experience in data analysis.</li>
        <li>
          • Strong proficiency in Excel, Power BI, or other data visualization
          tools.
        </li>
        <li>
          • Good understanding of statistics and data analysis techniques.
        </li>
        <li>
          • Familiarity with database management systems such as MySQL or SQL
          Server.
        </li>
        <li>• Strong problem-solving skills and attention to detail.</li>
        <li>• Excellent communication and collaboration skills.</li>
        <li>
          • Experience working with small businesses or a passion for helping
          small businesses grow.
        </li>
      </ul>
    );
    jobDuration = "6-9 months";
  } else if (setTitle === "full-time-project-manager") {
    jobTitle = "Full-Time Project Manager";
    salary = "$90,000 - $110,000 per year";
    jobDescription = (
      <ul>
        <li>
          • Lead cross-functional teams to successfully deliver projects on time
          and within budget.
        </li>
        <li>
          • Develop project plans, timelines, and budgets in collaboration with
          stakeholders.
        </li>
        <li>
          • Monitor project progress and proactively identify and mitigate risks
          and issues.
        </li>
        <li>
          • Communicate project status, risks, and issues to stakeholders in a
          timely and effective manner.
        </li>
        <li>
          • Facilitate meetings, ensure action items are tracked and completed,
          and ensure project documentation is up-to-date.
        </li>
        <li>
          • Collaborate with team members to continuously improve project
          management processes and methodologies.
        </li>
        <li>
          • Ensure adherence to project management best practices and company
          standards.
        </li>
      </ul>
    );

    jobQualifications = (
      <ul>
        <li>
          • Bachelor's or Master's degree in Business Administration, Project
          Management, or a related field.
        </li>
        <li>
          • 5+ years of experience in project management, with a track record of
          successfully delivering complex projects.
        </li>
        <li>
          • Strong project management skills, including the ability to develop
          project plans, manage budgets, and track progress.
        </li>
        <li>
          • Excellent communication and interpersonal skills, with the ability
          to effectively communicate with stakeholders at all levels of the
          organization.
        </li>
        <li>
          • Strong problem-solving and analytical skills, with the ability to
          identify and mitigate risks and issues.
        </li>
        <li>
          • Strong leadership and team management skills, with the ability to
          motivate and manage cross-functional teams.
        </li>
        <li>
          • Familiarity with project management software such as Asana, Trello,
          or Microsoft Project.
        </li>
        <li>
          • Project management certification such as PMP or PRINCE2 is a plus.
        </li>
      </ul>
    );

    jobDuration = "6-9 months";
  }

  // title("new");
  // console.log(title);

  return (
    <>
      <section className="jobdes">
        <div className="container">
          <div className="px-9 pt-9 pb-9">
            <div className="text-center text-violet-700">
              <h1>{jobTitle}</h1>
            </div>
            <br />
            <div className=" text-black text-left text-violet-700">
              <h3>Company: Diamond Tofu Inc. </h3>
              <br />
              <h3>Location: Cambridge, MA </h3>
              <br />
              <h3>Salary: {salary} </h3>
              <br />
            </div>
            <div className=" text-black text-left text-violet-700">
              <h3>Responsibilities: </h3>
              <div>{jobDescription}</div>
              <br />
            </div>
            <div className=" text-black text-left text-violet-700">
              <h3>Qualifications: </h3>
              <p>{jobQualifications}</p>
              <br />
            </div>
            <div className="text-black text-left">
              <h3>Job Information:</h3>
              <p>
                Location: Boston, MA (Remote until further notice) Duration:{" "}
                {jobDuration}
              </p>
            </div>
            <br />
            <div className="btnpadding btn-block ">
              <Button
                onClick={() => {
                  window.location.replace(`/pre`);
                }}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
