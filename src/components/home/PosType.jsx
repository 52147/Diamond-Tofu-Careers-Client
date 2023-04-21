import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PosType = ({ setTitle, }) => {
  const data = [
    {
      id: "1",
      heading: "Software Engineer",
      summary:
        "An IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills to provide pratical solutions.",
      cover: "software-engineer.png", // image for card
      fullpage: "jobdes",
      internpage: "jobdes",
      title_intern: "internship-software-engineer",
      title_full: "full-time-software-engineer"

    },
    {
      id: "2",
      heading: "Data Scientist",
      summary:
        "An analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making in an organization.",
      cover: "data-scientist.png",
      fullpage: "jobdes",
      internpage: "jobdes",
      title_intern: "internship-data-scientist",
      title_full: "full-time-data-scientist"
    },
    {
      id: "3",
      heading: "Project Manager",
      summary:
        "Accountable for planning and allocating resources, preparing budgets, monitoring progress, and keeping stakeholders informed throughout the project lifecycle.",
      cover: "pm.png",
      fullpage: "jobdes",
      internpage: "jobdes",
      title_intern: "internship-project-manager",
      title_full: "full-time-project-manager"
    },
  ];

  // 不要用沒有用div， className 直接寫在 tag 上
  // 每一個button都是inline block
  return (
    <>
      <section className="container card-block">
        <div className="row card-group">
          {data.map((value) => {
            return (
              <div className="col-12 col-lg-4 card">
                <img className="card-image" src={value.cover} alt="" />

                <div className="card-info">
                  <h2 className="title">{value.heading}</h2>
                  <p className="summary">{value.summary}</p>
                </div>
                <div className="btn-block">
                  <Link to={value.fullpage}>
                    <Button
                      onClick={() => {
                        setTitle(value.title_full);
                        localStorage.setItem("apply", value.title_full);
                        // window.location.replace(`/${value.fullpage}`);
                      }}
                    >
                      Full Time
                    </Button>
                  </Link>
                  <Link to={value.internpage}>
                    <Button
                      onClick={() => {
                        setTitle(value.title_intern);
                        localStorage.setItem("apply", value.title_intern);
                        // window.location.replace(`/${value.internpage}`);
                      }}
                    >
                      Intern
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
