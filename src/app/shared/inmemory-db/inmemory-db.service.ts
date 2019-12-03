import { InMemoryDbService } from "angular-in-memory-web-api";
import { ThemeDb } from "./themes";
import { FormDb } from "./forms";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      themes: ThemeDb.themes,
      forms: FormDb.forms
    };
  }
}
