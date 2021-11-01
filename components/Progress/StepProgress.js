import React from 'react';

const StepProgress = () => {
  return (
    <Box>
      <div className="arrow-steps clearfix">
        <div className="step current">
          <span>Step 1</span>
        </div>
        <div className="step">
          <span>Step 2</span>
        </div>
        <div className="step">
          <span>Step 3</span>
        </div>
      </div>
    </Box>
  );
};

export default StepProgress;
