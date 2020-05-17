# **Serverless Data Stream with AWS**

This is a template for AWS IoT data stream using Serverless framework.

<img src="https://user-images.githubusercontent.com/23233648/82140154-97dbb300-9868-11ea-91ef-071c1965ec32.png">

## Overview

The data flow of this template is below.

1. Send data from devices via MQTT
2. IoT Core subscribes data and send it to Kinesis Firehose
3. Kinesis executes batch (transform data, Putting data together)
4. Send batched data to S3

If you have a device, you can test with it. Without a device, you can imitate device behavior from AWS IoT core.

## Setup

### Installation

1. You need Serverless cli if you don't have it

```
$ npm install -g severless
```

2. AWS creadential setup if you need it

```
$ brew install awscli
$ aws configure
```

3. Clone this repo

```
$ git clone https://github.com/egurinko/serverless-data-stream.git
$ cd serverless-data-stream
```

4. deploy

```
$ sls deploy --stage <stage name>
```

5. remove

```
$ sls remove --stage <stage name>
```

## Test

### Send data to AWS IoT core

The topic name IoT core subscribe is `iot/topic` . If you have a device, please send data to it.

If you don't have a device, please go to IoT Core page Test tab. And publish data to `iot/topic` like below.

<img src="https://user-images.githubusercontent.com/23233648/82140647-3a953100-986b-11ea-9cf6-244017cc7dd6.png">

## Check Kinesis batch

To check if kinesis is actually working, you have two ways.

1. Go to transformation Lambda function<br>
    - go to lambda Monitoring tab
    - Check cloud watch logs below

<img src="https://user-images.githubusercontent.com/23233648/82140750-f6566080-986b-11ea-9d8a-439123efda0d.png">


If you can see cloud watch log, at least you data reaches to Lambda.

2. Check destination S3 bucket
    - Go to the destination bucket. If your setup succeeds, you can seed some object inside of th bucket

<img src="https://user-images.githubusercontent.com/23233648/82140814-71b81200-986c-11ea-87d2-d1e042b5b568.png">

If you select data, you can see data you sent.

<img src="https://user-images.githubusercontent.com/23233648/82140809-6cf35e00-986c-11ea-9a4e-dc2d11fa235f.png">


## Links

- [AWS](https://aws.amazon.com/)
- [AWS Documentation](https://docs.aws.amazon.com/index.html)
- [Serverless](https://serverless-stack.com/)
