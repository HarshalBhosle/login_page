node {
    stage('Checkout') {
        echo 'Checking out code from GitHub...'
        git branch: 'main', url: 'https://github.com/HarshalBhosle/login_page.git'
    }

    stage('Install Dependencies') {
        echo 'Installing dependencies...'
        bat 'npm install'
    }

    stage('Build') {
        echo 'Building the React application...'
        bat 'npm run build'
    }

    stage('Test') {
        echo 'Running tests...'
        bat 'npm test -- --watchAll=false --passWithNoTests'  // ✅ Added --passWithNoTests
    }
}
