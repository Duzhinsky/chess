plugins {
    java
    id("org.springframework.boot") version "3.0.0"
}

tasks.findByName("jar")?.enabled = false

dependencies {

    // Modules
    implementation(project(":core"))

    // Spring Web
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.1.0")
    implementation("org.springframework.boot:spring-boot-starter-security:3.1.3")
    implementation("org.springframework.security:spring-security-web:6.1.3")
    implementation("org.springframework.security:spring-security-oauth2-client:6.1.3")
    implementation("org.springframework.security:spring-security-oauth2-jose:6.1.3")


    // Lombok
    compileOnly("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")

    // Testing
    testImplementation("org.springframework.boot:spring-boot-starter-test")

    // Tools
    developmentOnly("org.springframework.boot:spring-boot-devtools")
}
