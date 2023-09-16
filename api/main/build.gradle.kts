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


    // Lombok
    compileOnly("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")

    // Testing
    testImplementation("org.springframework.boot:spring-boot-starter-test")

    // Tools
    developmentOnly("org.springframework.boot:spring-boot-devtools")
}
