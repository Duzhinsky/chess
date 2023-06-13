## How to launch

Use docker-compose to run

```shell
docker compose -f docker-compose.common.yaml -f docker-compose.dev.yaml up -d --build
```

It'll build server application on each run, so, to use the last image use
```shell
docker compose -f docker-compose.common.yaml -f docker-compose.dev.yaml up -d --no-build 
```

At production server run with 
```shell
docker compose -f docker-compose.common.yaml -f docker-compose.prod.yaml -f docker-compose.watchtower.yaml up -d 
```
