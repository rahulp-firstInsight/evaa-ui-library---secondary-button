import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from "./SecondaryButton";

const meta: Meta<typeof SecondaryButton> = {
  title: "Components/SecondaryButton",
  component: SecondaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Button label text",
    },
    variant: {
      control: "select",
      options: ["default", "hover", "clicked", "disabled"],
      description: "Button state variant",
    },
    withIcon: {
      control: "boolean",
      description: "Show arrow icon",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  args: {
    label: "Book Appointment",
    variant: "default",
    withIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Book Appointment",
    variant: "default",
    withIcon: true,
  },
};

export const Hover: Story = {
  args: {
    label: "Book Appointment",
    variant: "hover",
    withIcon: false,
  },
};

export const HoverWithIcon: Story = {
  args: {
    label: "Book Appointment",
    variant: "hover",
    withIcon: true,
  },
};

export const Clicked: Story = {
  args: {
    label: "Book Appointment",
    variant: "clicked",
    withIcon: false,
  },
};

export const ClickedWithIcon: Story = {
  args: {
    label: "Book Appointment",
    variant: "clicked",
    withIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Book Appointment",
    variant: "disabled",
    withIcon: false,
  },
};

export const DisabledWithIcon: Story = {
  args: {
    label: "Book Appointment",
    variant: "disabled",
    withIcon: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <SecondaryButton label="Book Appointment" variant="default" withIcon={false} />
        <SecondaryButton label="Book Appointment" variant="default" withIcon={true} />
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <SecondaryButton label="Book Appointment" variant="hover" withIcon={false} />
        <SecondaryButton label="Book Appointment" variant="hover" withIcon={true} />
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <SecondaryButton label="Book Appointment" variant="clicked" withIcon={false} />
        <SecondaryButton label="Book Appointment" variant="clicked" withIcon={true} />
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <SecondaryButton label="Book Appointment" variant="disabled" withIcon={false} />
        <SecondaryButton label="Book Appointment" variant="disabled" withIcon={true} />
      </div>
    </div>
  ),
};
