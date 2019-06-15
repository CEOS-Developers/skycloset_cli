# \[ 🚧 Work in progress 👷‍♀️⛏👷🔧 🚧 \] SkyCloset 1.0 
<p align="center">
  <img src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/orange-mush/skycloset_cli#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/orange-mush/skycloset_cli/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/orange-mush/skycloset_cli/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/FranckAbgrall">
    <img alt="Twitter: FranckAbgrall" src="https://img.shields.io/twitter/follow/FranckAbgrall.svg?style=social" target="_blank" />
  </a>
</p>
React-Native based

👍 Comments and new issues created are welcomed.

🛑 We're currently not accepting external PRs that touch on the app's architecture.

---

# SkyCloset 1.0

(gif변경하기)
<img src="screenshots/plaid_demo.gif" width="300" align="right" hspace="20">

> *Recommend clothes for today's weather*

Skycloset is the closest md to making your day pleasant. At the beginning of the day, it gives brief weather information and recommends clothes with the appropriate thickness for today's wear. You can check this by time zone. Also, at the end of the day, this app receives the satisfaction of the day and grows every day to suit you better.

**[Install on Google Play (Beta Testing)](https://play.google.com/apps/testing/io.plaidapp)**
(링크 변경해야함)


### Screenshots

(스크린샷 변경하기)
<img src="screenshots/home_grid_framed.png" width="25%" />
<img src="screenshots/post_story_framed.png" width="25%" />
<img src="screenshots/dn_story_framed.png" width="25%" />
<img src="screenshots/dribbble_shot_framed.png" width="25%" />


### Libraries
1. [react-navigation](https://github.com/react-navigation/react-navigation)
2. [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service)
3. [react-native-async-storage](https://github.com/react-native-community/react-native-async-storage)


### API services
1. [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
2. [Darky Sky](https://darksky.net/dev)
3. [Air Korea](http://openapi.airkorea.or.kr/)
4. [SGIS Open API](https://sgis.kostat.go.kr/developer/html/home.html)


### Non-Goals
Skycloset is a small project for Demoday of CEOS, so it has limited manpower and time. In order to fully implement the features required to run the app under these conditions, it explicitly does not attempt to:
* Supports **IOS** environments; Doing so is entirely possible, but complicates things.
* Support **pre-JellyBean** devices; React Native apps target iOS 9.0 and Android 4.1 (API 16) or newer.


### License


```
Copyright 2015 Google, Inc.

Licensed to the Apache Software Foundation (ASF) under one or more contributor
license agreements. See the NOTICE file distributed with this work for
additional information regarding copyright ownership. The ASF licenses this
file to you under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
```