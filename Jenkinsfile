node {
    def APP_NAME = "my-app"
    def VERSION = "1.0.0"

    stage('Checkout') {
        echo 'Checking out code from GitHub...'
        git branch: 'main', url: 'https://github.com/HarshalBhosle/login_page.git'
    }

    stage('Build') {
        echo 'Building the application...'
        bat 'mvn clean package'  // Use `sh` for Linux/Mac
    }

    stage('Test') {
        echo 'Running tests...'
        bat 'mvn test'
    }

    stage('Deploy') {
        echo 'Skipping deployment as no Docker is used.'
    }

    if (currentBuild.result == 'SUCCESS') {
        echo 'Pipeline succeeded!'
    } else {
        echo 'Pipeline failed!'
    }
}
