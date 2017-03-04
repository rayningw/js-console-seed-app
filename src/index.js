//@flow

import P from 'bluebird';

import { question, println } from "./io";
import log from "./log";

println("console-seed-app");
showMenu().then(() => {
  println("Farewell");
});

function showMenu() {
  return question(`
What do you want to do?
*) Quit.
Please respond: `).then(answer => {
    switch (answer.trim()) {
      default:
        return P.resolve();
    }
  });
}
