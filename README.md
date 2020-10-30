# TuneInRadio Demo Project

### Installation

Install the dependencies and start the server.

```sh
$ git clone https://github.com/jdavis-software/TuneInRadioDemo.git
$ npm install -d
$ npm run dev
```

### Notable Feature

Multi-param filtering, which can filter the Radio Stations by - search value, favorites, and category. 

### Project Notes

While browsing [tuneinradio.com] I noticed the multi-param search feature re-painted everytime a param was added. I figured I would spend most the time building a better more performant multi-search feature providing a real-world use case, and code that you guys could actually use.

Although I didn't build a "stations recommendations" feature it would be simple enough to just save the station tags "categories" that the user listen to and then weight the categories/tags based on how long the user listened to eah station, then recommend other stations with that similar tags and filter the categories by time listened.

### Feature Enhancements

I actually spend alot of time reading about some of the new [Web Audio API],[Streams API],[Service Worker API], I was very interested in these and thought of some of cool features that could be built out.

- Audio Visualizations
- Ads (Audio & Video)
- Audio Decoding 
- Compression
- Filtering


### Notable Packages

* [reselect] - Simple “selector” library for Redux.
* [redux-persist] - Persist and rehydrate a redux store.
* [redux-thunk] - Thunk middleware for Redux.
* [lodash] - A modern JavaScript utility library delivering modularity, performance, & extras.


[reselect]: <https://github.com/reduxjs/reselect>
[redux-persist]: <https://github.com/rt2zz/redux-persist>
[redux-thunk]: <https://github.com/reduxjs/redux-thunk>
[lodash]: <https://github.com/lodash/lodash>
[tuneinradio.com]: <https://tunein.com/radio/home/> 
[Web Audio API]: <https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API>
[Streams API]: <https://developer.mozilla.org/en-US/docs/Web/API/Streams_API>
[Service Worker API]: <https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API>
