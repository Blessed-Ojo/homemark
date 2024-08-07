import "./worktool.scss";
import Tools from "../../components/tools/Tools";
import React, { useEffect, useRef } from "react";

const Worktool = () => {
  return (
    <div className="Worktool">
      <div className="text-t">
        These are the
        <br />
        technologies I’ve been using
      </div>
      <div className="box" >
          <div className="light"></div>
          <Tools />
      </div>
    </div>
  );
};

export default Worktool;
