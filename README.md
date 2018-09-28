## Pre-requisite(s)

The only prerequisite for running SonarQube is to have Java (Oracle JRE 8 or OpenJDK 8) installed on your machine.  `https://docs.sonarqube.org/display/SONAR/Requirements`


## Download below software(s)
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
    `sonar-scanner.properties` can get under location <path_of_sonarqube_scanner/<choose_platform/conf>
    `For e.g. ~/Documents/software/sonar-scanner-3.2.0.1227-macosx/conf`

2. Create a `sonar-project.properties` file in root location of your nodejs app.
3. Add below configuration properties in above created file:
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