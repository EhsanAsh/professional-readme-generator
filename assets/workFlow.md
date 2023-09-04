![Ehsan@sh](./Favicon.ico)

# User Story

>AS A developer
>*I WANT* a README generator,
>*SO THAT* I can quickly create a professional README for a new project.

---

# Acceptance Criteria

### GIVEN a command-line application that accepts user input,

- *WHEN I* am prompted for information about my application repository,
  *THEN* a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
- *WHEN I* enter my project title,
  *THEN* this is displayed as the title of the README.
- *WHEN I* enter a description, installation instructions, usage information, contribution guidelines, and test    instructions,
  *THEN* this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
- *WHEN I* choose a license for my application from a list of options,
  *THEN* a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
- *WHEN I* enter my GitHub username,
  *THEN* this is added to the section of the README entitled Questions, with a link to my GitHub profile.
- *WHEN I* enter my email address,
  *THEN* this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
- *WHEN I* click on the links in the Table of Contents,
  *THEN* I am taken to the corresponding section of the README.

  ---

# Algorithm:

>1. Start the command-line application.
>2. Prompt the user for information about their application repository.
>3. Generate a README.md file structure based on the user's input.
>4. Allow the user to input the title of their project.
>5. Enable sections for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
>6. As the user provides input for each section, populate the corresponding section in the README.md.
>7. Provide a list of licenses for the user to choose from.
>8. When a license is chosen, add a badge for that license and provide a notice in the License section.
>9. Enable the user to provide their GitHub username and email address.
>10. Create a link to the GitHub profile in the Questions section and provide the email address with instructions.
>11. Ensure that the Table of Contents links navigate to the corresponding sections in the README.md.

--- 

## Tasks:

### Development Phase:

- Set up the command-line application environment.
- Create prompts to get information about the user's application repository.
- Initiate README.md generation upon user's input.
- Implement the function to populate the README title based on user input.
- Design the sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
- Implement the functionality to populate each section based on user input.
- Develop a list of license options for the user.
- Implement badge addition for the chosen license and update the License section accordingly.
- Create input fields for GitHub username and email address.
- Link the GitHub username to the user's GitHub profile and provide email instructions in the Questions section.
- Develop the functionality to make the Table of Contents links functional.

### Testing Phase:

- Ensure that the command-line application runs without errors.
- Test all the prompts to make sure they gather the necessary information.
- Check if the README.md is generated correctly based on the user's input.
- Verify that the README title reflects the user's project title.
- Test each section to ensure they're populated correctly.
- Verify the correct badge and notice appear based on the license chosen.
- Test the Questions section to ensure the GitHub link works and the email instructions are correct.
- Confirm that the Table of Contents links navigate to the appropriate sections.

### Deployment Phase:

- Document how to initiate and use the command-line application.
- Ensure that the README generator is compatible across different operating systems.
- Implement any necessary error handling and logging for unforeseen issues.
- Package the application for easy distribution and usage.
- Monitor for user feedback and make necessary adjustments based on their experiences.

---

## Pattern Recognition:

>This problem demonstrates a pattern of dynamic content generation based on user input. The pattern involves capturing user input, processing it, and outputting it in a structured format. This pattern can be observed in many utilities and tools designed to simplify repetitive tasks, such as document generators, form builders, or configuration tools.

---

## PseudoCode:

### Procedure for starting the application

`Procedure START_APPLICATION
DISPLAY command-line interface
PROMPT user for project title
SAVE title to README.md under project title section
FOR each section in [Description, Installation, Usage, Contributing, Tests]
    PROMPT user for section information
    SAVE user input to the corresponding section in README.md
END FOR
DISPLAY list of license options
USER selects license
ADD badge of chosen license to README.md
ADD notice of chosen license to License section in README.md
PROMPT user for GitHub username and email address
ADD GitHub link to Questions section
ADD email and instructions to Questions section
GENERATE Table of Contents with links to each section in README.md`

### Main program

`CALL START_APPLICATION
WHILE Application is running
IF user wishes to edit a section
REDIRECT to the corresponding prompt for that section
UPDATE README.md based on new input
END IF
IF user wishes to exit
    EXIT application and SAVE all changes to README.md
END IF
END WHILE`