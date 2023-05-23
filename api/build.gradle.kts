plugins {
    id("io.spring.dependency-management") version "1.1.0"
}

group = "duzhinsky.chess"
version = "0.0.1-SNAPSHOT"

repositories {
    mavenCentral()
}

subprojects {
    apply(plugin = "io.spring.dependency-management")
    dependencyManagement {
        imports {
            mavenBom("org.springframework.boot:spring-boot-dependencies:3.0.0")
        }
    }
}