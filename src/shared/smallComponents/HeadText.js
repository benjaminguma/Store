import React from 'react';

const HeadText = ({head, text}) => {
  return (
    <div className="head_text_1">
      <h3 className="heading_med weit-3 cap col-bl-1">
        {head}
      </h3>
      <p className="col-g-svg">
        {text}
      </p>
    </div>
  );
};

export default HeadText;
