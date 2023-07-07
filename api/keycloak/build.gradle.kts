plugins {
    id("java")
    id("org.springframework.boot") version "2.6.7"
    id("io.freefair.lombok") version "8.1.0"
}

tasks.findByName("jar")?.enabled = false

repositories {
    mavenCentral()
    maven { setUrl("https://jitpack.io") }
}

dependencyManagement {
    imports {
        mavenBom("com.github.thomasdarimont.embedded-spring-boot-keycloak-server:embedded-keycloak-server-spring-boot-parent:8.0.0")
    }
}

dependencies {
    implementation("com.github.thomasdarimont.embedded-spring-boot-keycloak-server:embedded-keycloak-server-spring-boot-starter:8.0.0")
}
