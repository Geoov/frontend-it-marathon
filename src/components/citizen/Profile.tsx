import React, { useState } from "react";
import "./Profile.scss";
import UserImg from "../../assets/images/user.png";
import { Typography } from "@material-ui/core";

function Profile() {
  const [page, setPage] = useState(0);

  return (
    <div id="boxed-container-profile">
      <div className="left-section">
        <div className="user-wrapper">
          <div className="image-wrapper">
            <img src={UserImg} className="avatar-image"></img>
          </div>

          <div className="profile-pages-wrapper">
            <ul>
              <li>
                <Typography variant="h6" onClick={() => setPage(0)}>
                  PROFILE
                </Typography>
              </li>
              <li>
                <Typography variant="h6" onClick={() => setPage(1)}>
                  EVENTS LIST
                </Typography>
              </li>
              <li>
                <Typography variant="h6" onClick={() => setPage(2)}>
                  REWARDS LIST
                </Typography>
              </li>
              <li>
                <Typography variant="h6" onClick={() => setPage(3)}>
                  ACHIEVEMENTS LIST
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-section">
        {page === 0 && (
          <div className="user-wrapper">
            <h2>PROFILE</h2>
          </div>
        )}
        {page === 1 && (
          <div className="user-wrapper">
            <h2>EVENTS</h2>
          </div>
        )}

        {page === 2 && (
          <div className="user-wrapper">
            <h2>REWARDS</h2>
          </div>
        )}

        {page === 3 && (
          <div className="user-wrapper">
            <h2>ACHIEVEMENTS</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
