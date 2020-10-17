## Pre-requisite(s)

The only prerequisite of running SonarQube is to have Java (Oracle JRE 8 or OpenJDK 8) installed on your machine .`https://docs.sonarqube.org/display/SONAR/Requirements`


## Download below software(s):
1. LTS version of Sonarqube. 
   `https://www.sonarqube.org/downloads/`
2. SonarQube-scanner based on your platform. 
   `https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner`

## Steps to setup the sonarqube properites configuration
1. Once `SonarQube-scanner` is downloaded, add below two properties in `sonar-scanner.properties`:
    ```
    #----- Default SonarQube server
    sonar.host.url=http://localhost:9000
    
    #----- Default source code encoding
    sonar.sourceEncoding=UTF-8
    ```
    `sonar-scanner.properties` file needs to be placed under location <path_of_sonarqube_scanner/<choose_platform/conf>
    `For e.g. ~/Documents/software/sonar-scanner-3.2.0.1227-macosx/conf`

2. Create a `sonar-project.properties` file in root location of your nodejs app.
3. Add following configuration in the above created properties file:
    ```
    # required metdata
    sonar.projectKey=<preferrable_node_app_name>
    sonar.projectVersion=<version>
    sonar.sourceEncoding=<source code encoding>

    # path to srouce directories
    sonar.sources=<your_node_app_folder_name>

    # excludes
    sonar.exclusions=<files or folder which you want to exclude>

    # coverage reporting
    sonar.javascript.lcov.reportPaths=<code coverage location>
    ```
    `Note:` These are required for sonar-scanner to analyaze and generate the report accordingly.

## Start the sonarqube server
    Go to SonarQube's downloaded location, and run below command:
    ```
    ~<path>/sonarqube-6.7.5/bin/macosx-universal-64 $ ./snoar.sh --help
    ```
    `For e.g.: ~/Documents/software/sonarqube-6.7.5/bin/macosx-universal-64 $ ./sonar.sh --start`

## Run the sonar-scanner
    Got to root directory of your project folder where you have created the `sonar-projects.properties` file and run the below command:
    ```
    ~<root path of your project> $ sonar-scanner
    ```
    `For e.g. ~/Documents/learning/sonarqube $ sonar-scanner`

## Access the generated report to analyaze further
1. Get the host url which you have set in the configuration and try accessing it.
2. Default username and password is: admin/admin
    `For e.g. http://localhost:9000/dashboard?id=<project_key>`

## Challenge(s) faced:
1. In Windows - bash: sonar-scanner: command not found
    ** Resolution: Update the PATH environment variable and re-run the command.
    Steps:
    - Navigate to control panel.
    - Search `enviornment` keyword from the right-top search bar.
    - Click on the `Edit the system environment variables`.
    - Click on `Enviornment Variables`.
    - Look for `Path` environment variable.
    - Add the `sonar-scanner` path. For e.g. C:\Users\vikash\Documents\softwares\sonar-scanner-4.5.0.2216-windows\bin
    - In addition if you want to add the `sonar-server` as well then follow the same steps as above. For e.g. C:\Users\vikash\Documents\softwares\sonarqube-8.5.0.37579\bin\windows-x86-64

    In Mac - bash: sonar-scanner: unknownd command
    ** Resolution: Update the path environment variable by exporting it and ensure that the same has been updated in the environment path. and re-run the command.
    Steps to set an environment variable: [Link](https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x)

    **Note:** `sonar-scanner` command must be executed from the path where `sonar-project.properties` file is added.

2. 'nyc' is not recognized as an internal or external command (In Windows)
   ** Resolution: Follow the below steps to fix:
   - Remove the node_modules
   - Re-run the `npm install` command from the app folder.
   - You should see the expected output.

3. Code coverage is not being displayed in the Sonarqube dashboard.
   ** Resolution:
    - We need to ensure that the coverage is generated in the lcov format.
    - Run `npm run coverage-lcov` command. As a result it generates the coverage in the lcov format and same can be seen from <project_root_path>/app/coverage/lcov-report
    - Re-reun the `sonar-scanner` command from the path where `sonar-project.properties` file is defined/added. This generates the analysis report.
    - Navigate to the `sonarqube` dashboard you should see the `coverage` statistics.

For any additional help, please write me to the `servikash@gmail.com`. I would be happy to help you!