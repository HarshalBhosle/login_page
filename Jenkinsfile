node {
    def APP_NAME = "my-app"
    def VERSION = "1.0.0"

    stage('Checkout') {
        echo 'Checking out code from repository...'
        git branch: 'main', url: 'https://github.com/your-repo/your-project.git'
    }

    stage('Build') {
        echo 'Building the application...'
        sh 'mvn clean package' // Example for a Maven project
    }

    stage('Test') {
        echo 'Running tests...'
        sh 'mvn test' // Example for running tests
    }

    stage('Deploy') {
        echo 'Deploying the application...'
        sh "docker build -t ${APP_NAME}:${VERSION} ."
        sh "docker push ${APP_NAME}:${VERSION}"
    }

    // Post-build actions
    if (currentBuild.result == 'SUCCESS') {
        echo 'Pipeline succeeded!'
    } else {
        echo 'Pipeline failed!'
    }
}
