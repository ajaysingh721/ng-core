import { NavItem } from "./../../../models/nav-item.model";
import { NavService } from "../../../core/services/nav.service";
import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit,
  Input,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-sidenav-side",
  templateUrl: "./sidenav-side.component.html",
  styleUrls: ["./sidenav-side.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SidenavSideComponent implements AfterViewInit, OnInit {
  @ViewChild("sideNav", { static: false }) sideNav: ElementRef;
  @Input() sideNavItems: NavItem[];
  navItems: NavItem[];

  constructor(private navService: NavService) {}

  ngAfterViewInit() {
    this.navService.sideNav = this.sideNav;
  }

  ngOnInit() {
    this.navItems = [
      {
        displayName: "DevFestFL",
        iconName: "close",
        children: [
          {
            displayName: "Speakers",
            iconName: "group",
            children: [
              {
                displayName: "Michael Prentice",
                iconName: "person",
                route: "michael-prentice",
                children: [
                  {
                    displayName: "Create Enterprise UIs",
                    iconName: "star_rate",
                    route: "material-design",
                    children: [
                      {
                        displayName: "Michael Prentice",
                        iconName: "person",
                        route: "michael-prentice",
                        children: [
                          {
                            displayName: "Create Enterprise UIs",
                            iconName: "star_rate",
                            route: "material-design"
                          }
                        ]
                      },
                      {
                        displayName: "Stephen Fluin",
                        iconName: "person",
                        route: "stephen-fluin",
                        children: [
                          {
                            displayName: "What's up with the Web?",
                            iconName: "star_rate",
                            route: "what-up-web"
                          }
                        ]
                      },
                      {
                        displayName: "Mike Brocchi",
                        iconName: "person",
                        route: "mike-brocchi",
                        children: [
                          {
                            displayName: "My ally, the CLI",
                            iconName: "star_rate",
                            route: "my-ally-cli"
                          },
                          {
                            displayName: "Become an Angular Tailor",
                            iconName: "star_rate",
                            route: "become-angular-tailer"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                displayName: "Stephen Fluin",
                iconName: "person",
                route: "stephen-fluin",
                children: [
                  {
                    displayName: "What's up with the Web?",
                    iconName: "star_rate",
                    route: "what-up-web"
                  }
                ]
              },
              {
                displayName: "Mike Brocchi",
                iconName: "person",
                route: "mike-brocchi",
                children: [
                  {
                    displayName: "My ally, the CLI",
                    iconName: "star_rate",
                    route: "my-ally-cli"
                  },
                  {
                    displayName: "Become an Angular Tailor",
                    iconName: "star_rate",
                    route: "become-angular-tailer"
                  }
                ]
              }
            ]
          },
          {
            displayName: "Sessions",
            iconName: "speaker_notes",
            children: [
              {
                displayName: "Create Enterprise UIs",
                iconName: "star_rate",
                route: "material-design"
              },
              {
                displayName: "What's up with the Web?",
                iconName: "star_rate",
                route: "what-up-web"
              },
              {
                displayName: "My ally, the CLI",
                iconName: "star_rate",
                route: "my-ally-cli"
              },
              {
                displayName: "Become an Angular Tailor",
                iconName: "star_rate",
                route: "become-angular-tailer"
              }
            ]
          },
          {
            displayName: "Feedback",
            iconName: "feedback",
            route: "feedback"
          }
        ]
      },
      {
        displayName: "Disney",
        iconName: "close",
        children: [
          {
            displayName: "Speakers",
            iconName: "group",
            children: [
              {
                displayName: "Michael Prentice",
                iconName: "person",
                route: "michael-prentice",
                children: [
                  {
                    displayName: "Create Enterprise UIs",
                    iconName: "star_rate",
                    route: "material-design"
                  }
                ]
              },
              {
                displayName: "Stephen Fluin",
                iconName: "person",
                route: "stephen-fluin",
                children: [
                  {
                    displayName: "What's up with the Web?",
                    iconName: "star_rate",
                    route: "what-up-web"
                  }
                ]
              },
              {
                displayName: "Mike Brocchi",
                iconName: "person",
                route: "mike-brocchi",
                children: [
                  {
                    displayName: "My ally, the CLI",
                    iconName: "star_rate",
                    route: "my-ally-cli"
                  },
                  {
                    displayName: "Become an Angular Tailor",
                    iconName: "star_rate",
                    route: "become-angular-tailer"
                  }
                ]
              }
            ]
          },
          {
            displayName: "Sessions",
            iconName: "speaker_notes",
            children: [
              {
                displayName: "Create Enterprise UIs",
                iconName: "star_rate",
                route: "material-design"
              },
              {
                displayName: "What's up with the Web?",
                iconName: "star_rate",
                route: "what-up-web"
              },
              {
                displayName: "My ally, the CLI",
                iconName: "star_rate",
                route: "my-ally-cli"
              },
              {
                displayName: "Become an Angular Tailor",
                iconName: "star_rate",
                route: "become-angular-tailer"
              }
            ]
          },
          {
            displayName: "Feedback",
            iconName: "feedback",
            route: "feedback"
          }
        ]
      },
      {
        displayName: "Orlando",
        iconName: "close",
        children: [
          {
            displayName: "Speakers",
            iconName: "group",
            children: [
              {
                displayName: "Michael Prentice",
                iconName: "person",
                route: "michael-prentice",
                children: [
                  {
                    displayName: "Create Enterprise UIs",
                    iconName: "star_rate",
                    route: "material-design"
                  }
                ]
              },
              {
                displayName: "Stephen Fluin",
                iconName: "person",
                route: "stephen-fluin",
                children: [
                  {
                    displayName: "What's up with the Web?",
                    iconName: "star_rate",
                    route: "what-up-web"
                  }
                ]
              },
              {
                displayName: "Mike Brocchi",
                iconName: "person",
                route: "mike-brocchi",
                children: [
                  {
                    displayName: "My ally, the CLI",
                    iconName: "star_rate",
                    route: "my-ally-cli"
                  },
                  {
                    displayName: "Become an Angular Tailor",
                    iconName: "star_rate",
                    route: "become-angular-tailer"
                  }
                ]
              }
            ]
          },
          {
            displayName: "Sessions",
            iconName: "speaker_notes",
            children: [
              {
                displayName: "Create Enterprise UIs",
                iconName: "star_rate",
                route: "material-design"
              },
              {
                displayName: "What's up with the Web?",
                iconName: "star_rate",
                route: "what-up-web"
              },
              {
                displayName: "My ally, the CLI",
                iconName: "star_rate",
                route: "my-ally-cli"
              },
              {
                displayName: "Become an Angular Tailor",
                iconName: "star_rate",
                route: "become-angular-tailer"
              }
            ]
          },
          {
            displayName: "Feedback",
            iconName: "feedback",
            route: "feedback"
          }
        ]
      },
      {
        displayName: "Maleficent",
        disabled: true,
        iconName: "close",
        children: [
          {
            displayName: "Speakers",
            iconName: "group",
            children: [
              {
                displayName: "Michael Prentice",
                iconName: "person",
                route: "michael-prentice",
                children: [
                  {
                    displayName: "Create Enterprise UIs",
                    iconName: "star_rate",
                    route: "material-design"
                  }
                ]
              },
              {
                displayName: "Stephen Fluin",
                iconName: "person",
                route: "stephen-fluin",
                children: [
                  {
                    displayName: "What's up with the Web?",
                    iconName: "star_rate",
                    route: "what-up-web"
                  }
                ]
              },
              {
                displayName: "Mike Brocchi",
                iconName: "person",
                route: "mike-brocchi",
                children: [
                  {
                    displayName: "My ally, the CLI",
                    iconName: "star_rate",
                    route: "my-ally-cli"
                  },
                  {
                    displayName: "Become an Angular Tailor",
                    iconName: "star_rate",
                    route: "become-angular-tailer"
                  }
                ]
              }
            ]
          },
          {
            displayName: "Sessions",
            iconName: "speaker_notes",
            children: [
              {
                displayName: "Create Enterprise UIs",
                iconName: "star_rate",
                route: "material-design"
              },
              {
                displayName: "What's up with the Web?",
                iconName: "star_rate",
                route: "what-up-web"
              },
              {
                displayName: "My ally, the CLI",
                iconName: "star_rate",
                route: "my-ally-cli"
              },
              {
                displayName: "Become an Angular Tailor",
                iconName: "star_rate",
                route: "become-angular-tailer"
              }
            ]
          },
          {
            displayName: "Feedback",
            iconName: "feedback",
            route: "feedback"
          }
        ]
      }
    ];
  }
}
