import { InMemoryDbService } from "angular-in-memory-web-api";
import { ThemeDb } from "./themes";
import { FormDb } from "./forms";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      themes: [
        {
          id: 1,
          name: "Genpact",
          theme: "web-theme",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/1200px-Genpact_logo.svg.png",
          user: "https://image.flaticon.com/icons/svg/17/17004.svg"
        },
        {
          id: 2,
          name: "HeadStrong",
          theme: "hr-theme",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/1200px-Genpact_logo.svg.png",
          user: "https://image.flaticon.com/icons/svg/17/17004.svg"
        }
      ],
      forms: [
        {
          ControlName: "email",
          ControlType: "input",
          SubType: "email",
          ControlLabel: "Email address",
          Placeholder: "Enter email",
          IsRequired: true
        },
        {
          ControlName: "phone",
          ControlType: "input",
          SubType: "number",
          ControlLabel: "Phone number",
          Placeholder: "Enter phone number",
          IsRequired: true
        },
        {
          ControlName: "Dept",
          ControlType: "select",
          SubType: "radio",
          ControlLabel: "Please select",
          Placeholder: "Please select",
          IsRequired: true,
          ListItems: [
            { value: 1, label: "Option 3" },
            { value: 2, label: "Option 2" },
            { value: 3, label: "Option 3" },
            { value: 4, label: "Option 4" }
          ]
        }
      ]
    };
  }
}
