plugins {
    java
    id("org.springframework.boot") version "3.0.0"
}

tasks.findByName("jar")?.enabled = false

dependencies {
    implementation(project(":core"))

    implementation ("org.springframework.boot:spring-boot-starter-websocket")
    implementation ("org.webjars:webjars-locator-core")
    implementation ("org.webjars:sockjs-client:1.0.2")
    implementation ("org.webjars:stomp-websocket:2.3.3")
    implementation ("org.webjars:bootstrap:3.3.7")
    implementation ("org.webjars:jquery:3.1.1-1")
    
    compileOnly("org.projectlombok:lombok")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    annotationProcessor("org.projectlombok:lombok")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}