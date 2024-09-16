![npm](https://img.shields.io/npm/v/proxy-nexo.svg) ![release](https://img.shields.io/github/actions/workflow/status/drusco/proxy-nexo/ci.yml?branch=main&event=push) [![codecov](https://codecov.io/gh/drusco/proxy-nexo/graph/badge.svg?token=ALMIPSLT4U)](https://codecov.io/gh/drusco/proxy-nexo)

## Overview

**proxy-nexo** introduces support for the creation of ES6 proxies with or without a target object. Proxy handlers can be dynamically accessed through listeners attached either to a nexo instance or to individual proxy wrappers. Each proxy event follows the naming convention `"proxy.handlerName"`, where `handlerName` corresponds to one of the standard handler functions specified in the [MDN Proxy API documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy). For example, events such as `"proxy.apply"`, `"proxy.construct"`, and others will be emitted when the corresponding handler functions (`apply`, `construct`, etc.) are invoked.

## Features

- **Unique ID assignment**: Automatically generates a unique ID for each proxy, allowing for easy retrieval and management.
- **Target flexibility**: Proxies can be created with or without a target, supporting both virtual and real objects.
- **Sandbox support**: When no target is provided, the proxy interacts with a sandbox object, isolating property descriptors and operations.
- **Weak reference tracking**: Uses WeakRef to store proxy objects, ensuring efficient memory management by allowing garbage collection when proxies are no longer in use.
- **Event emission**: Emits events for every key proxy operation, including creation, handler functions for proxy traps (like get, set, defineProperty), proxy errors, and general errors, providing full monitoring and control over all proxy-related activities.

## Quick Start

```
Requirements
```

**node** >= v16.20.2  
**npm** >= v8.19.4

### Installation

```
npm install proxy-nexo
```

### Documentation

https://drusco.github.io/proxy-nexo/

### Examples

https://drusco.gitbook.io/proxy-nexo

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2024 Pedro Gallardo
