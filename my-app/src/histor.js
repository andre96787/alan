import {createBrowserHistory} from "history";

let customHistory = createBrowserHistory();

export function getHistory() {
   return customHistory;
}