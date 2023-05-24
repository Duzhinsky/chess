## How to launch in dev environment 

Use docker-compose in ./env specifying dev profile to run locally.

```shell
cd env
docker-compose --profile dev up -d --build
```

It'll build server application on each run, so, to use the last image use
```shell
docker-compose --profile dev up -d --no-build
```

Don't forget to run build each time you switch between branches 