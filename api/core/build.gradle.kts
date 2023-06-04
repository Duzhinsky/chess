plugins {
    `java-library`
}

dependencies {
    api("org.springframework.boot:spring-boot-starter-data-mongodb")
    implementation("com.fasterxml.jackson.core:jackson-annotations")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    compileOnly("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")
}