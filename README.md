# hello-mqtt-node
hello-mqtt-node is mqtt sample application.

## Configure

```
$ cp config.json.sample config.json
$ edit config.json
# configure mqtt server config
```
Put your [sango](https://sango.shiguredo.jp/) (or any other MQTT server config like [CloudMQTT](http://www.cloudmqtt.com/)) account information to `config.json`.

```
$ node subscriber
hogelog@github/hello hello # received from publisher.js
```

```
$ node publisher.js
```
