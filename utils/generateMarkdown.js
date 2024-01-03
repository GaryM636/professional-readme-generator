function renderLicenseBadge(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }

  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }

  return `[License](./LICENSE)`;
}

function renderLicenseSection(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }

  return `This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

\`${data.installation}\`

## Usage
${data.usage}

## License

${licenseSection}
${licenseLink}

## Contributing

${data.contributing}

## Tests

\`${data.tests}\`

## Questions
For any questions, please contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;

}

module.exports = generateMarkdown;
