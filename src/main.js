import typeof util from "util";
import typeof fs from "fs";
import type { Stats } from "fs";

const { promisify }: util = require("util");
const { stat }: fs = require("fs");

const getStats: (path: string) => Promise<Stats> = promisify(stat);

async function main(): Promise<string> {
  const stats: Stats = await getStats(".");
  const text: string = `This directory is owned by ${stats.uid}`;
  console.log(text);
  return text;
}

module.exports = main;
export type Main = () => Promise<string>;
