FROM java:openjdk-8-jre

WORKDIR /prod/program/bootapp
ADD build/libs/app.jar app.jar

EXPOSE 8080
CMD java -Dspring.profiles.active=production -jar app.jar