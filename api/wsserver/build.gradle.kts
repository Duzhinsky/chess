plugins {
    java
    id("org.springframework.boot") version "3.0.0"
}

tasks.findByName("jar")?.enabled = false

dependencies {
    implementation(project(":core"))
    compileOnly("org.projectlombok:lombok")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    annotationProcessor("org.projectlombok:lombok")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}