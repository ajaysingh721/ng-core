import { InMemoryDbService } from "angular-in-memory-web-api";
import { ThemeDb } from "./themes";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      themes: ThemeDb.themes;
    };
  }
}
