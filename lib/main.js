"use strict";

const {
  promisify
} = require("util");

const {
  stat
} = require("fs");

const getStats = promisify(stat);

async function main() {
  const stats = await getStats(".");
  const text = `This directory is owned by ${stats.uid}`;
  console.log(text);
  return text;
}

module.exports = main;