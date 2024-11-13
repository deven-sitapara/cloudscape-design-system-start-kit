"use client";
import * as React from "react";
import { useState } from "react";
import SpaceBetween from "@cloudscape-design/components/space-between";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import { ColumnLayout } from "@cloudscape-design/components";

export default function CreateForm({ item }) {
  const [formData, setFormData] = useState({
    name: "",
    contactPerson: "",
    tsrFee: "",
    vrFee: "",
    searchFee: "",
    contactPhone: "",
    contactEmail: "",
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
          <FormField label="Contact Person">
            <Input
              value={formData.contactPerson}
              ariaRequired={true}
              placeholder=""
              onChange={({ detail }) =>
                handleChange("contactPerson", detail.value)
              }
            />
          </FormField>
        </ColumnLayout>
        <ColumnLayout columns={3}>
          <FormField label="TSR Fee">
            <Input
              type="number"
              name="tsrfee"
              value={formData.tsrFee}
              ariaRequired={true}
              placeholder=""
              onChange={({ detail }) => handleChange("tsrFee", detail.value)}
            />
          </FormField>
          <FormField label="VR Fee">
            <Input
              type="number"
              name="vrfee"
              value={formData.vrFee}
              ariaRequired={true}
              placeholder=""
              onChange={({ detail }) => handleChange("vrFee", detail.value)}
            />
          </FormField>
          <FormField label="Search Fee">
            <Input
              type="number"
              name="searchfee"
              value={formData.searchFee}
              ariaRequired={true}
              placeholder=""
              onChange={({ detail }) => handleChange("searchFee", detail.value)}
            />
          </FormField>
        </ColumnLayout>

        <ColumnLayout columns={1}>
          <FormField label="Contact Email" stretch={true}>
            <Input
              value={formData.contactEmail}
              ariaRequired={true}
              placeholder=""
              onChange={({ detail }) =>
                handleChange("contactEmail", detail.value)
              }
            />
          </FormField>
        </ColumnLayout>
      </SpaceBetween>
    </form>
  );
}
