const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

const apiKey = "b7166079e1mshf482422d9a32c25p1d1b0djsn3ea8fbf64317";

const init = async () => {
  const questions = [
    {
      type: "input",
      message: "Please enter a city?",
      name: "city",
    },
    {
      type: "confirm",
      message: "Would you like to add another city?",
      name: "anotherCity",
    },
  ];

  const inProgress = true;

  // Loop(while) through the questions using inProgress flag

  // Loop(map) through the answers and call the api

  // Omce the api has returned the response, generate the html
};
