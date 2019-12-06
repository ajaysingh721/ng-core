import { InMemoryDbService } from "angular-in-memory-web-api";
import { ThemeDb } from "./themes";
import { FormDb } from "./forms";
import { MenuDb } from "./menus";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      themes: ThemeDb.themes,
      menues: MenuDb.menus,
      forms: FormDb.forms
    };
  }
}
