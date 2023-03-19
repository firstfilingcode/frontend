import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import userCheck from "../common/Images/user-check.png";
import setting from "../common/Images/setting.png";
import users from "../common/Images/users.png";
import usertie from "../common/Images/usertie.png";
import Count from "./Count";

const Counter = () => {
  return (
    <>
      <div className="card aboutCard2">
        <div className="card-body card-body-user">
          <div className="row">
            <div className="col-md-3 col-6 text-center">
              <img src={userCheck} alt="userCheck" />
              <h3 className="pt-2 counterNum">
                <Count
                  end={1452}
                  className="mobile_font count"
                ></Count>
              </h3>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-3 col-6 text-center">
              <img src={setting} alt="setting" />
              <h3 className="pt-2 counterNum">

                <Count
                  end={100}
                  className="mobile_font count"
                ></Count>
              </h3>
              <p>Projects</p>
            </div>
            <div className="col-md-3 col-6 text-center">
              <img src={usertie} alt="usertie" />
              <h3 className="pt-2 counterNum"><Count
                end={750}
                className="mobile_font count"
              ></Count></h3>
              <p>Contractors</p>
            </div>
            <div className="col-md-3 col-6 text-center">
              <img src={users} alt="users" />
              <h3 className="pt-2 counterNum"><Count
                end={500}
                className="mobile_font count"
              ></Count></h3>
              <p>Employees</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Counter;
