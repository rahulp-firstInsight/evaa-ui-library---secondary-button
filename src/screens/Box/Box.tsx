import React from "react";
import { SecondaryButton } from "../../components/SecondaryButton";
import "./style.scss";

export const Box = (): JSX.Element => {
  return (
    <div className="box" data-model-id="310:2090-frame">
      <div className="div">
        <SecondaryButton
          className="secondary-button-instance"
          secondaryButton="default"
          textLabel="Book Appointment"
          withIcon={false}
        />
        <SecondaryButton
          className="secondary-button-instance"
          secondaryButton="clicked"
          textLabel="Book Appointment"
          withIcon={false}
        />
        <SecondaryButton
          className="secondary-button-instance"
          secondaryButton="hover"
          textLabel="Book Appointment"
          withIcon={false}
        />
        <SecondaryButton
          className="secondary-button-instance"
          secondaryButton="disabled"
          textLabel="Book Appointment"
          withIcon={false}
        />
        <SecondaryButton
          className="secondary-button-instance"
          secondaryButton="default"
          textLabel="Book Appointment"
          withIcon
        />
        <SecondaryButton
          className="secondary-button-instance"
          secondaryButton="clicked"
          textLabel="Book Appointment"
          withIcon
        />
        <SecondaryButton
          className="secondary-button-instance"
          secondaryButton="hover"
          textLabel="Book Appointment"
          withIcon
        />
        <SecondaryButton
          className="secondary-button-instance"
          secondaryButton="disabled"
          textLabel="Book Appointment"
          withIcon
        />
      </div>
    </div>
  );
};
