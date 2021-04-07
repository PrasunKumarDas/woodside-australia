pipeline {
    agent any
    tools {nodejs "node"}
    stages {
      stage('Build') {
          steps {
             bat 'npm install'
             echo '<---Build Step---->'
          }
      }
      stage('Deploy') {
                steps {
                   echo '<---Deploy Step---->'
                }
            }
      stage('Test') {
                steps {
                   echo '<---Test Step---->'
                }
            }
      stage('Release') {
                steps {
                   echo '<---Release Step---->'
                }
            }
      stage('Clean') {
                steps {
                   echo '<---Clean Step---->'
                }
            }
    }
}