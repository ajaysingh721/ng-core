import { Theme } from "../../models/theme.model";
export class ThemeDb {
  public static themes: Theme[] = [
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
  ];
}
