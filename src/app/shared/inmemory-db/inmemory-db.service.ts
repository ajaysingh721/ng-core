import { InMemoryDbService } from "angular-in-memory-web-api";
import { ThemeDb } from "./themes.db";
import { FormDb } from "./forms.db";
import { MenuDb } from "./menus.db";
import { CustomerDb } from "./customers.db";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      themes: ThemeDb.themes,
      menues: MenuDb.menus,
      forms: FormDb.forms,
      customers:
    };
  }
}
