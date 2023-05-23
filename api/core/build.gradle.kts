plugins {
    `java-library`
}

group = "duzhinsky.chess"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
}

dependencies {
    api("org.springframework.boot:spring-boot-starter-data-mongodb")
    testImplementation("org.junit.jupiter:junit-jupiter-api")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
    compileOnly("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}