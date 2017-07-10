#!/usr/bin/env groovy

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'

                sh 'npm install'
                sh 'sencha app build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'

                sh 'npm test'
                sh 'npm run lint'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
