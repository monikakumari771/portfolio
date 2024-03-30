import React from "react";
import { Line, Circle } from "rc-progress";

function Circleprogress() {
  return (
    <>
      <div className="circle-sec">
        <h3>Other Skills</h3>
        <div className="skill-par">
          <div className="circle-skill">
            <div class="innerCircle">
              <div id="number">80%</div>
              <div id="skill">Communication</div>
            </div>
            <Circle percent={10} strokeWidth={10} strokeColor="#17cf73" />
          </div>
          <div className="circle-skill">
            <div class="innerCircle">
              <div id="number">80%</div>
              <div id="skill">Logic</div>
            </div>
            <Circle percent={10} strokeWidth={10} strokeColor="#17cf73" />
          </div>
          <div className="circle-skill">
            <div class="innerCircle">
              <div id="number">75%</div>
              <div id="skill">Problem Solving</div>
            </div>
            <Circle percent={10} strokeWidth={10} strokeColor="#17cf73" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Circleprogress;
