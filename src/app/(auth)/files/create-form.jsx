import * as React from "react";
import SpaceBetween from "@cloudscape-design/components/space-between";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import { Grid, Select } from "@cloudscape-design/components";

export default function CreateForm({ item }) {
  const [date, setDate] = React.useState("2024-11-13");
  const [branch, setBranch] = React.useState({
    label: "Rajkot",
    value: "Rajkot",
  });
  const [company, setCompany] = React.useState({
    label: "",
    value: "",
  });

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <SpaceBetween direction="vertical" size="l">
        {/* <ColumnLayout columns={3}> */}
        <Grid gridDefinition={[{ colspan: 4 }, { colspan: 4 }, { colspan: 4 }]}>
          <FormField label="Date" constraintText="">
            <Input
              disabled={true}
              value={"2024-11-13"}
              ariaRequired={true}
              placeholder=""
              onChange={() => {}}
            />
          </FormField>

          <FormField label="Branch">
            <Select
              selectedOption={branch}
              onChange={({ detail }) => setBranch(detail.selectedOption)}
              options={[
                { label: "Rajkot", value: "Rajkot" },
                { label: "Junagadh", value: "Junagadh" },
                { label: "Bhavnagar", value: "Bhavnagar" },
                { label: "Ahmedabad", value: "Ahmedabad" },
                { label: "Morbi", value: "Morbi" },
              ]}
            />
          </FormField>
          <FormField label="Company">
            <Select
              selectedOption={company}
              onChange={({ detail }) => setCompany(detail.selectedOption)}
              filteringType="auto"
              options={[
                { label: "AAA MORBI JAMANGAR", value: "AAA MORBI JAMANGAR" },
                {
                  label: "AADHAR HOUSING FINANCE JUNAGADH",
                  value: "AADHAR HOUSING FINANCE JUNAGADH",
                },
                {
                  label: "AASHIRVAAD HOUSING FINANCE RAJKOT",
                  value: "AASHIRVAAD HOUSING FINANCE RAJKOT",
                },
                {
                  label: "ABHISHEK HOUSING FINANCE",
                  value: "ABHISHEK HOUSING FINANCE",
                },
                {
                  label: "ADANI HOUSING FINANCE",
                  value: "ADANI HOUSING FINANCE",
                },
                {
                  label: "ADANI HOUSING FINANCE MORBI",
                  value: "ADANI HOUSING FINANCE MORBI",
                },
                {
                  label: "ADANI HOUSING FINANCE RAJKOT",
                  value: "ADANI HOUSING FINANCE RAJKOT",
                },
                {
                  label: "ADANI HOUSING FINANCE JUNAGADH",
                  value: "ADANI HOUSING FINANCE JUNAGADH",
                },
                {
                  label: "AGNI HOUSING FINANCE",
                  value: "AGNI HOUSING FINANCE",
                },
                {
                  label: "AGNI HOUSING FINANCE RAJKOT",
                  value: "AGNI HOUSING FINANCE RAJKOT",
                },
                {
                  label: "AGNI HOUSING FINANCE JUNAGADH",
                  value: "AGNI HOUSING FINANCE JUNAGADH",
                },
              ]}
            />
          </FormField>
        </Grid>
        {/* </ColumnLayout> */}

        <Grid gridDefinition={[{ colspan: 6 }, { colspan: 6 }]}>
          <div>
            <FormField label="Company Referance">
              <Input
                value={"RL1124021901"}
                ariaRequired={true}
                placeholder=""
                onChange={() => {}}
              />
            </FormField>
          </div>
          <div>
            <FormField label="Proposed Owner / Borrower / Applicant">
              <Input
                value={"JAYABEN NANJIBHAI RATHOD"}
                ariaRequired={true}
                placeholder=""
                onChange={() => {}}
              />
            </FormField>
          </div>
        </Grid>
        <FormField label="Current Owner" stretch={true}>
          <Input
            value={"JAYABEN NANJIBHAI RATHOD"}
            placeholder=""
            onChange={() => {}}
          />
        </FormField>
        <FormField label="Property Description" stretch={true}>
          <Input
            value={
              "AMRELI, VADIYA, SHEET NO. 16, PLOT NO. 17 P,HOUSE NO. 2816 (SQMT 60-00) , (GAMTAL)"
            }
            ariaRequired={true}
            placeholder=""
            onChange={() => {}}
          />
        </FormField>
      </SpaceBetween>
    </form>
  );
}
