import React from "react";
import SecondaryButton from "./SecondaryButton";

export default {
  title: "Components/SecondaryButton",
  component: SecondaryButton,
};

export const AllStates = () => (
  <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "40px", backgroundColor: "#f5f5f5" }}>
    <div>
      <h2 style={{ marginBottom: "20px", fontFamily: "Arial", fontSize: "18px", fontWeight: "bold" }}>Without Icon</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
    </div>

    <div>
      <h2 style={{ marginBottom: "20px", fontFamily: "Arial", fontSize: "18px", fontWeight: "bold" }}>With Icon</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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

export const Default = () => (
  <SecondaryButton
    secondaryButton="default"
    textLabel="Book Appointment"
    withIcon={false}
  />
);

export const WithIcon = () => (
  <SecondaryButton
    secondaryButton="default"
    textLabel="Book Appointment"
    withIcon
  />
);

export const Hover = () => (
  <SecondaryButton
    secondaryButton="hover"
    textLabel="Book Appointment"
    withIcon={false}
  />
);

export const Clicked = () => (
  <SecondaryButton
    secondaryButton="clicked"
    textLabel="Book Appointment"
    withIcon={false}
  />
);

export const Disabled = () => (
  <SecondaryButton
    secondaryButton="disabled"
    textLabel="Book Appointment"
    withIcon={false}
  />
);
