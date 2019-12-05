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
          SybType: "email",
          ControlLabel: "Email address",
          Placeholder: "Enter email",
          IsRequired: true
        },
        {
          ControlName: "phone",
          ControlType: "input",
          SybType: "number",
          ControlLabel: "Phone number",
          Placeholder: "Enter phone number",
          IsRequired: true
        },
        {
          ControlName: "Dept",
          ControlType: "select",
          SybType: "radio",
          ControlLabel: "Please select",
          Placeholder: "Please select",
          IsRequired: true,
          ListItem: [
            { ItemValue: 1, ItemLabel: "Option 3" },
            { ItemValue: 2, ItemLabel: "Option 2" },
            { ItemValue: 3, ItemLabel: "Option 3" },
            { ItemValue: 4, ItemLabel: "Option 4" }
          ]
        }
      ]
    };
  }
}
