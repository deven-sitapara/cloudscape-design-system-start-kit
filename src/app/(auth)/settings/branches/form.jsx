"use client";
import * as React from "react";
import SpaceBetween from "@cloudscape-design/components/space-between";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import { ColumnLayout } from "@cloudscape-design/components";

export default function CreateForm({ item }) {
  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <SpaceBetween direction="vertical" size="l">
        <ColumnLayout columns={2}>
          <FormField label="Branch Name">
            <Input
              value={""}
              ariaRequired={true}
              placeholder=""
              onChange={() => {}}
            />
          </FormField>
          <FormField label="Contact Person">
            <Input
              value={""}
              ariaRequired={true}
              placeholder=""
              onChange={() => {}}
            />
          </FormField>
        </ColumnLayout>
        <ColumnLayout columns={2}>
          <FormField label="Contact Phone" stretch={true}>
            <Input value={""} placeholder="" onChange={() => {}} />
          </FormField>
          <FormField label="Contact Email" stretch={true}>
            <Input
              value={""}
              ariaRequired={true}
              placeholder=""
              onChange={() => {}}
            />
          </FormField>
        </ColumnLayout>
      </SpaceBetween>
    </form>
  );
}
