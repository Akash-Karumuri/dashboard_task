import React from "react";

import welcome from "./Images/welcome_img.png";
import stars from "./Images/stars.png";
import star from "./Images/star.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsBell,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { BiHomeAlt2, BiBuildings } from "react-icons/bi";
import {
  BsPeople,
  BsGrid,
  BsPeopleFill,
  BsCashStack,
  BsDiagram3,
} from "react-icons/bs";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar px-0">
        {/* Logo */}
        <div className="logo-container">
          <h2 className="logo">KRISP</h2>
          <div className="logo-subtitle">INTERIORS & ARCHITECTURE</div>
        </div>

        {/* Back button */}
        <div className="back-button-container d-inline-flex">
          <div className="horizontal-line"></div>
          <button className="back-button">
            <i className="bi bi-arrow-left"></i>
          </button>
        </div>

        {/* Menu Items */}
        <div className="menu-container pe-3">
          <a href="#" className="menu-item active py-0">
            <div className="menu-icon">
              <BiHomeAlt2 size={20} />
            </div>
            <span className="menu-label">Home</span>
          </a>

          <a href="#" className="menu-item">
            <div className="menu-icon">
              <BsPeople size={20} />
            </div>
            <span className="menu-label">HR Admin</span>
            <i className="bi bi-chevron-down"></i>
          </a>

          <a href="#" className="menu-item">
            <div className="menu-icon">
              <BiBuildings size={20} />
            </div>
            <span className="menu-label">Office Admin</span>
            <i className="bi bi-chevron-down"></i>
          </a>

          <a href="#" className="menu-item">
            <div className="menu-icon">
              <BsGrid size={20} />
            </div>
            <span className="menu-label">My Space</span>
            <i class="bi bi-chevron-down"></i>
          </a>

          <a href="#" className="menu-item">
            <div className="menu-icon">
              <BsPeopleFill size={20} />
            </div>
            <span className="menu-label">My Team</span>
            <i class="bi bi-chevron-down"></i>
          </a>

          <a href="#" className="menu-item">
            <div className="menu-icon">
              <BsCashStack size={20} />
            </div>
            <span className="menu-label">My Finances</span>
          </a>

          <a href="#" className="menu-item">
            <div className="menu-icon">
              <BsDiagram3 size={20} />
            </div>
            <span className="menu-label">Organization</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Nav */}
        <div className="top-nav">
          <div className="nav-tabs">
            <div className="nav-item">HR Admin</div>
            <div className="nav-item active">My Team</div>
            <div className="nav-item">My Space</div>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="container px-0">
          {/* Welcome and Quote row */}
          <div className="row px-0 mb-3">
            <div className="col-lg-7">
              <div className="welcome-card">
                <div className="row">
                  <div className="card-body">
                    <div className="row px-2">
                      <div className="col-lg-8">
                        <h4 className="card-title yesteryear-regular">
                          Good morning, Welcome Back Kheirna !
                        </h4>
                        <p className="card-text">
                          Team is right on track
                          <span className="text-primary"> Kindly</span> come on
                          boost your team productivity to reach your target.
                          Your Team Performance is
                          <span className="text-success"> good</span> !
                        </p>
                        <div className="badges">
                          <img src={stars} alt="Team" className="w-100 h-100" />
                        </div>
                      </div>
                      <div className="col-lg-3 text-end">
                        <div className="progress-circle">
                          <div className="percent">
                            <img src={star} alt="Team" className="w-50" />
                            <p>100%</p>
                          </div>
                        </div>
                        <img
                          src={welcome}
                          alt="Team"
                          className="welcome-image w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card quote-card mb-3">
                <div className="card-body">
                  <p className="quote-text mb-1">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-2">Quote Of The Day</h5>
                      <div className="mx-3">
                        <i className="me-2 bi bi-chevron-left"></i>
                        <i className="bi bi-chevron-right"></i>
                      </div>
                    </div>
                    "You are integral part of our team, & your contributions
                    matter. Your hard work and commitment are valued and
                    appreciated. Keep pushing forward, and together, we will
                    achieve greatness."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks and Task Overview row */}
          <div className="row px-0 mb-3">
            {/* Tasks Card */}
            <div className="col-lg-7">
              <div className="card task-card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0">Tasks</p>
                  </div>
                  <div>
                    <button className="btn btn-sm gen-btn me-2">Gen</button>
                    <button className="btn btn-sm btn-secondary">Today</button>
                  </div>
                  <div>
                    <span className="me-2">65%</span>
                    <BsChevronRight />
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-scroll">
                    <table className="table table-hover px-2 mb-0">
                      <tbody>
                        <tr>
                          <td width="5%">1</td>
                          <td width="40%">Employee Name 1</td>
                          <td width="15%">
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td width="15%">
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td width="15%" className="text-warning">
                            60%
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Employee Name 2</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td style={{ color: "#2BCB4E" }}>65%</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Employee Name 3</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td style={{ color: "#2BCB4E" }}>75%</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Employee Name 4</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td className="text-primary">80%</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Employee Name 5</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td style={{ color: "#FF7171" }}>35%</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Employee Name 6</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td style={{ color: "#FF7171" }}>35%</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Employee Name 7</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td style={{ color: "#FF7171" }}>35%</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Employee Name 8</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td style={{ color: "#FF7171" }}>35%</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>Employee Name 9</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td style={{ color: "#FF7171" }}>35%</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>Employee Name 10</td>
                          <td>
                            <span className="text-warning">08</span> / 15
                          </td>
                          <td>
                            <span style={{ color: "#FF7171" }}>07</span>
                          </td>
                          <td style={{ color: "#FF7171" }}>35%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Overview */}
            <div className="col-lg-5">
              <div className="card overview-card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Task Overview</h5>
                  <div>
                    <span className="text-success">80%</span> <BsChevronRight />
                  </div>
                </div>
                <div className="card-body">
                  {/* Task Overview content goes here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          {/* Projects Progress */}
          <div className="col-md-5">
            <div className="card project-card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Projects Progress</h5>
                <div>
                  <span className="text-success">70%</span> <BsChevronRight />
                </div>
              </div>
              <div className="card-body">
                <div className="project-table">
                  <div className="project-row header">
                    <div className="project-col-name">Project Name</div>
                    <div className="project-col-progress">Project Progress</div>
                    <div className="project-col-percent"></div>
                  </div>
                  <div className="project-row">
                    <div className="project-col-name">Project Name 1</div>
                    <div className="project-col-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                    </div>
                    <div className="project-col-percent">90%</div>
                  </div>
                  <div className="project-row">
                    <div className="project-col-name">Project Name 2</div>
                    <div className="project-col-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                    </div>
                    <div className="project-col-percent">90%</div>
                  </div>
                  <div className="project-row">
                    <div className="project-col-name">Project Name 3</div>
                    <div className="project-col-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                    </div>
                    <div className="project-col-percent">90%</div>
                  </div>
                  <div className="project-row">
                    <div className="project-col-name">Project Name 4</div>
                    <div className="project-col-progress">
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                    </div>
                    <div className="project-col-percent">90%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Progress */}
          <div className="col-md-7">
            <div className="card team-progress-card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Team Progress</h5>
                <div className="text-success">65%</div>
              </div>
              <div className="card-body">
                <div className="team-chart">
                  {/* This would be a bar chart in a real implementation */}
                  <img
                    src="/api/placeholder/620/170"
                    alt="Team Progress Chart"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Others Section */}
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Others</h5>
            <BsChevronDown />
          </div>
        </div>
      </div>

      {/* Right Notification Panel */}
      <div className="notification-panel">
        <div className="notification-icons">
          <div className="user-profile">
            <img
              src="https://vit.edu.in/wp-content/uploads/2023/06/Rectangle-34624432.png"
              alt="User"
              className="w-100"
            />
          </div>
          <div className="notification-sec">
            <div className="notification-num">
              <i class="bi bi-envelope"></i>
              <span className="badge bg-danger notification-badge">5</span>
            </div>
            <div className="notification-num">
              <BsBell />
              <span className="badge bg-danger notification-badge">5</span>
            </div>
          </div>
          <div className="notification-icon">
            <span className="text-T">T</span>
          </div>
          <div className="notification-icon">
            <span className="text-A">A</span>
          </div>
        </div>
        <div className="copyright-text">Copyright © 2023</div>
      </div>
    </div>
  );
};

export default Dashboard;
