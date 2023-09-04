FROM gradle:7.6-jdk17 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src/
RUN gradle :main:build --no-daemon

FROM openjdk:17

EXPOSE 8080
RUN mkdir /app
COPY --from=build /home/gradle/src/main/build/libs/*.jar /app/spring-boot-application.jar
ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions","-Djava.security.egd=file:/dev/./urandom","-Dhttp.proxyHost=chess.duzhinsky.ru/api", "-Dhttp.proxyPort=80","-jar","/app/spring-boot-application.jar"]