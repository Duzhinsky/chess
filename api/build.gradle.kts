plugins {
    id("io.spring.dependency-management") version "1.1.0"
}

repositories {
    mavenCentral()
}

subprojects {
    group = "duzhinsky.chess"
    version = "0.0.1-SNAPSHOT"

    val java : JavaPluginExtension? = extensions.findByType(JavaPluginExtension::class);
    java?.sourceCompatibility = JavaVersion.VERSION_17;

    // Disable creating jar without dependencies
    tasks.findByName("jar")?.enabled = false;

    tasks.withType<Test> {
        useJUnitPlatform()
    }

    repositories {
        mavenCentral()
    }

    apply(plugin = "io.spring.dependency-management")
    dependencyManagement {
        imports {
            mavenBom("org.springframework.boot:spring-boot-dependencies:3.0.0")
        }
    }

    val annotationProcessor = configurations.findByName("annotationProcessor");
    val compileOnly = configurations.findByName("compileOnly");
    if (annotationProcessor != null) {
        compileOnly?.extendsFrom(annotationProcessor)
    }
}
