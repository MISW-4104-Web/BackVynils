pipeline {
   agent any
   environment {
      GIT_REPO = 'BackVynils'
      GIT_CREDENTIAL_ID = '277a9d46-cf19-4119-afd9-4054a7d35151'
      SONARQUBE_URL = 'http://172.24.100.52:8082/sonar-misovirtual'
   }
   stages {
      stage('Checkout') {
         steps {
            scmSkip(deleteBuild: true, skipPattern:'.*\\[ci-skip\\].*')
            git branch: 'master',
            credentialsId: env.GIT_CREDENTIAL_ID,
            url: 'https://github.com/MISW-4104-Web/' + env.GIT_REPO
         }
      }
      stage('Build') {
         // Build app
         steps {
            script {
               docker.image('citools-isis2603:latest').inside('-u root') {
                  sh '''
                     npm i -s
                     nest build
                  '''
               }
            }
         }
      }
     stage('Test') {
         steps {
            script {
               docker.image('citools-isis2603:latest').inside('-u root') {
                  sh '''
                     npm run test:cov
                  '''
               }
            }
         }
      }
      stage('Static Analysis') {
         // Run static analysis
         steps {
            sh '''
               docker run --rm -u root -e SONAR_HOST_URL=${SONARQUBE_URL} -v ${WORKSPACE}:/usr/src sonarsource/sonar-scanner-cli:4.3
            '''
         }
      }
   }
   post {
      always {
         // Clean workspace
         cleanWs deleteDirs: true
      }
   }
}
