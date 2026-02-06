pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Rogerprawin/node-devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-devops-app:latest .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                  docker stop node-app || true
                  docker rm node-app || true
                  docker run -d -p 3000:3000 --name node-app node-devops-app:latest
                '''
            }
        }
    }
}
