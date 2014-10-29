cd ../lib
java -Xms512M -Xmx512M -XX:MaxPermSize=256M -jar ${pom.artifactId}-${pom.version}.jar
pause