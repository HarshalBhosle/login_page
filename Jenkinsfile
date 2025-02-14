node {
    def APP_NAME = "my-app"
    def VERSION = "1.0.0"

    stage('Checkout') {
        echo 'Checking out code from repository...'
        git branch: 'main', url: 'https://github.com/HarshalBhosle/login_page.git'
    }

    stage('Build') {
        echo 'Building the application...'
        bat 'mvn clean package' // Replaced `sh` with `bat`
    }

    stage('Test') {
        echo 'Running tests...'
        bat 'mvn test' // Replaced `sh` with `bat`
    }

    stage('Deploy') {
        echo 'Deploying the application...'
        
        // Ensure Docker is installed and running
        bat "docker build -t ${APP_NAME}:${VERSION} ."
        bat "docker tag ${APP_NAME}:${VERSION} your-dockerhub-username/${APP_NAME}:${VERSION}"
        bat "docker login -u your-dockerhub-username -p your-dockerhub-password"
        bat "docker push your-dockerhub-username/${APP_NAME}:${VERSION}"
    }

    // Post-build actions
    if (currentBuild.result == 'SUCCESS') {
        echo 'Pipeline succeeded!'
    } else {
        echo 'Pipeline failed!'
    }
}
