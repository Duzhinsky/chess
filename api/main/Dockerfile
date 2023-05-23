FROM gradle:7.6-jdk17-alpine AS build
COPY --chown=gradle:gradle ../ /home/gradle/src
WORKDIR /home/gradle/src/main
RUN gradle build --no-daemon

FROM openjdk:17-alpine

EXPOSE 8080
RUN mkdir /app
COPY --from=build /home/gradle/src/main/build/libs/*.jar /app/spring-boot-application.jar
ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-Djava.security.egd=file:/dev/./urandom","-jar","/app/spring-boot-application.jar"]