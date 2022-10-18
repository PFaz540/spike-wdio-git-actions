const YAML = require("yaml");
const fs = require("fs");

function getSpecs(directoryPath) {
   const files = fs.readdirSync(directoryPath);
   return files.filter(file => file.includes(".spec.js"));
};

function createTestJobs(directoryPath) {
   let jsonObject = {};
   const specs = getSpecs(directoryPath);
   specs.forEach((spec) => {
      jsonObject[spec] = {
         "extends": ".test_template",
         "script": `npm test -- --spec=./tests/${spec}`,
      };
   });
   return YAML.stringify(jsonObject);
};

function addTestsToYaml() {
   const yamlFile = ".gitlab-tests-ci.yml"
   fs.appendFileSync(yamlFile, "\n");
   fs.appendFileSync(yamlFile, createTestJobs("tests/"));
};

addTestsToYaml();
