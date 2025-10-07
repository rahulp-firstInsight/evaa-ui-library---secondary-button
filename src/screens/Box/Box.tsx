import React from "react";
import SecondaryButton from "../../components/SecondaryButton";
import "./style.scss";

export const Box = (): JSX.Element => {
  return (
    <div className="box" data-model-id="637:4936-frame">
      <div className="div">
        <div className="button-column">
          <h3>Without Icon</h3>
          <SecondaryButton
            secondaryButton="default"
            textLabel="Book Appointment"
            withIcon={false}
          />
          <SecondaryButton
            secondaryButton="hover"
            textLabel="Book Appointment"
            withIcon={false}
          />
          <SecondaryButton
            secondaryButton="clicked"
            textLabel="Book Appointment"
            withIcon={false}
          />
          <SecondaryButton
            secondaryButton="disabled"
            textLabel="Book Appointment"
            withIcon={false}
          />
        </div>
        
        <div className="button-column">
          <h3>With Icon</h3>
          <SecondaryButton
            secondaryButton="default"
            textLabel="Book Appointment"
            withIcon
          />
          <SecondaryButton
            secondaryButton="hover"
            textLabel="Book Appointment"
            withIcon
          />
          <SecondaryButton
            secondaryButton="clicked"
            textLabel="Book Appointment"
            withIcon
          />
          <SecondaryButton
            secondaryButton="disabled"
            textLabel="Book Appointment"
            withIcon
          />
        </div>
      </div>
    </div>
  );
};
