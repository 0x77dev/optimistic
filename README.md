<p align="center"><img src="icon.png" width="150px" height="150px" /></p>

# ✍️ Optimistic (moodleclient)

Vue.js Moodle Client based on moodle mobile api [(webservices)](https://docs.moodle.org/dev/Web_service_API_functions).

![GitHub issues](https://img.shields.io/github/issues/0x77dev/optimistic) ![GitHub pull requests](https://img.shields.io/github/issues-pr/0x77dev/optimistic) ![GitHub](https://img.shields.io/github/license/0x77dev/optimistic) ![GitHub contributors](https://img.shields.io/github/contributors/0x77dev/optimistic) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/0x77dev/optimistic) ![GitHub package.json version](https://img.shields.io/github/package-json/v/0x77dev/optimistic)

![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=up&url=https%3A%2F%2Foptimistic.0x77.page) ![Chromium HSTS preload](https://img.shields.io/hsts/preload/optimistic.0x77.page)

## Purpose
This project was reverse engineering experiment, but now I'm going to create fully-featured Moodle Multi-Platform client.

## Roadmap

- [x] PoC: Auth implementation 🔐, webservices basic requests ⛓.
- [x] [50%] Fully-Working Courses and Lesson View📚, with acceptable design👨‍💻.
- [ ] Lesson Questions Support ❓
- [ ] Auto Lesson (automatically brute force correct answers) _[If moodle server will support]_ 🤖

## CHANGELOG
See in [CHANGELOG.md](CHANGELOG.md) 📓

## Getting Started Locally 🖥
### Install the dependencies
```bash
yarn
```

#### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

#### Lint the files
```bash
yarn run lint
```

#### Build the app for production
```bash
quasar build
```

### Customizing the quasar configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
