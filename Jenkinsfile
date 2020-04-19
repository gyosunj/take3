pipeline {
    agent {
        docker {
            image 'node:12'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo '=== Building starts ==='
                sh './ci/build.sh'
            }
        }
        stage('Test') {
            steps {
                echo '=== Testing starts ==='
                sh './ci/test.sh'
            }
        }
        stage('Sanity check') {
            steps {
                input "ok to deploy?"
            }
        }
        stage('Deploy') {
            steps {
                echo '=== Deployment starts ==='
                sh './ci/deploy.sh'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
            deleteDir() /* clean up our workspace */
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}