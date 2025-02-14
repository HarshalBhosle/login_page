pipeline {
    agent any

    environment {
        APP_NAME = "my-app"
        VERSION = "1.0.0"
        DOCKER_HUB_USER = credentials('docker-hub-username') // Store in Jenkins credentials
        DOCKER_HUB_PASS = credentials('docker-hub-password') // Store in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                git branch: 'main', url: 'https://github.com/HarshalBhosle/login_page.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    try {
                        echo 'Building the application...'
                        bat 'mvn clean package'
                    } catch (Exception e) {
                        error "Build failed: ${e.message}"
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        echo 'Running tests...'
                        bat 'mvn test'
                    } catch (Exception e) {
                        error "Tests failed: ${e.message}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    try {
                        echo 'Deploying the application...'
                        
                        bat "docker build -t ${APP_NAME}:${VERSION} ."
                        bat "docker tag ${APP_NAME}:${VERSION} ${DOCKER_HUB_USER}/${APP_NAME}:${VERSION}"
                        
                        echo 'Logging into Docker Hub...'
                        bat "docker login -u ${DOCKER_HUB_USER} -p ${DOCKER_HUB_PASS}"
                        
                        bat "docker push ${DOCKER_HUB_USER}/${APP_NAME}:${VERSION}"
                    } catch (Exception e) {
                        error "Deployment failed: ${e.message}"
                    }
                }
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
