function readmeGenerator(response) {
  var currentYear = new Date().getFullYear();
  var readmeContent = 
  `# ${response.title}
  ### authored by ${response.name}, [GitHub](https://github.com/${response.github}/),  [email](${response.email})
  
  # Description 
  ${response.description}
  
  ## Table of Contents
  * [Installation Instructions](#Install)
  * [Usage Information](#Usage)
  * [Contribution Guidelines](#Contribution-Guidelines)
  * [Tests](#Tests)
  * [License](#License)

  ## Installation
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.install}

  ## Usage
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.usage}

  ## Contribution Guidelines
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.contribute}

  ## Tests
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.test}

  #### ${response.title}© ${currentYear} All Rights Reserved.  ${response.license}. All material must be cited or credited, when using material (free to use).`
  return readmeContent;
};

module.exports = readmeGenerator;