"use client";
import * as React from "react";
import { useState } from "react";
import SpaceBetween from "@cloudscape-design/components/space-between";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import { ColumnLayout, Select } from "@cloudscape-design/components";

export default function CreateForm({ item }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: {
      label: "Rajkot",
      value: "Rajkot",
    },
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <SpaceBetween direction="vertical" size="l">
        <ColumnLayout columns={2}>
          <FormField label="Name">
            <Input
              value={formData.name}
              ariaRequired={true}
              placeholder=""
              onChange={({ detail }) => handleChange("name", detail.value)}
            />
          </FormField>
          <FormField label="Email">
            <Input
              value={formData.email}
              ariaRequired={true}
              placeholder=""
              onChange={({ detail }) => handleChange("email", detail.value)}
            />
          </FormField>
        </ColumnLayout>
        <ColumnLayout columns={2}>
          <FormField label="Password">
            <Input
              type="password"
              name="password"
              value={formData.password}
              ariaRequired={true}
              placeholder=""
              onChange={({ detail }) => handleChange("password", detail.value)}
            />
          </FormField>
          <FormField label="Branch">
            <Select
              selectedOption={formData.branch}
              onChange={({ detail }) =>
                handleChange("branch", detail.selectedOption)
              }
              options={[
                { label: "Rajkot", value: "Rajkot" },
                { label: "Junagadh", value: "Junagadh" },
                { label: "Bhavnagar", value: "Bhavnagar" },
                { label: "Ahmedabad", value: "Ahmedabad" },
                { label: "Morbi", value: "Morbi" },
              ]}
            />
          </FormField>
        </ColumnLayout>
      </SpaceBetween>
    </form>
  );
}
