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
          key: "email",
          type: "input",
          templateOptions: {
            type: "email",
            label: "Email address",
            placeholder: "Enter email",
            required: true
          }
        }
      ]
    };
  }
}
