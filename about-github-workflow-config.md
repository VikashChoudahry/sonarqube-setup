# Purpose
To explain the usage of workflow action config which is being used in this excercise. Please note - It only explains about the property that are being used. If you need detailed info, please explore the [official documentation](https://docs.github.com/en/actions/using-workflows/about-workflows)

name: Build # Name of the of the Build. This is an user input and can be set to the appropriate name base on the usage.
on:
  push: # Denotes event name. For instance, if we want to trigger the workflow when something is being pushed on `master` branch then this config can be used. There are many such events and can be set/used as per the requirement.
    branches:
      - master  # On which branch event would get applied.
  pull_request: # This is another event that I have used here. How this works is? - Whenever any pull request(s) is/are opened/reopened/synchronized then this workflow would get triggered by GitHub. Based on the requirement this can be updated.
    types: [opened, synchronize, reopened]
jobs: # A workflow run is made up of one or more jobs, which run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the jobs.<job_id>.needs keyword. In this case, we have only one job but there can be added/defined more based on the use cases. And their job_id value is `SonarCloud`
  sonarcloud:
    name: SonarCloud  # Job Id value
    runs-on: ubuntu-latest  # to define the type of machine to run the job on.
    steps:  # Please read [this](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps)) to get the detailed understanding
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0  # Shallow clones should be disabled for a better relevancy of analysis
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:  # A map of environment variables that are available to all steps in the job. You can also set environment variables for the entire workflow or an individual step. For more information, see [this](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv).
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # Needed to get PR information, if any
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }} # Custom token that needs to be set. This can be set from, Login to GitHub -> Navigate to Repo -> Settings -> Security -> Secrets -> Action. As we know, it's a good practice to read the the secret(s) through env variable instead for hard-coding them.
          
