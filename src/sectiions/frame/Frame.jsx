import "./frame.scss";

const Frame = () => {
  return (
    <div className="frame">
      <h1 className="text" data-text="Awesome">
        <span class="actual-text">&nbsp;Javascript&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Javascript&nbsp;
        </span>
      </h1>
      <h1 className="text" data-text="Awesome">
        <span class="actual-text">&nbsp;React&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;React&nbsp;
        </span>
      </h1>
      <h1 className="text" data-text="Awesome">
        <span class="actual-text">&nbsp;Html&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Html&nbsp;
        </span>
      </h1>
      <h1 className="text" data-text="Awesome">
        <span class="actual-text">&nbsp;Css&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Css&nbsp;
        </span>
      </h1>
      <h1 className="text" data-text="Awesome">
        <span class="actual-text">&nbsp;Git&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Git&nbsp;
        </span>
      </h1>
      <h1 className="text" data-text="Awesome">
        <span class="actual-text">&nbsp;Github&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Github&nbsp;
        </span>
      </h1>
    </div>
  );
};

export default Frame;
