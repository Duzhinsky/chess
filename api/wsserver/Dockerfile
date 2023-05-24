FROM gradle:7.6-jdk17 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src/wsserver
RUN gradle build --no-daemon

FROM openjdk:17

EXPOSE 8080
RUN mkdir /app
COPY --from=build /home/gradle/src/wsserver/build/libs/*.jar /app/spring-boot-application.jar
ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-Djava.security.egd=file:/dev/./urandom","-jar","/app/spring-boot-application.jar"]