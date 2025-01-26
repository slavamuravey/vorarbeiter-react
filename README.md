<p align="center">
  <img
      alt="Vorarbeiter React bindings"
      src="https://repository-images.githubusercontent.com/922215583/2cc868f1-251f-40fe-9124-14ddcbb33b86"
  />
</p>

## React bindings for Vorarbeiter

### Installation

```shell
npm install vorarbeiter-react
```

To use Vorarbeiter service container in React application pass service container into provider:

### Basic usage

```typescript
import React, { FC } from "react";
import { createServiceContainer, createServiceSpecBuilder, ServiceContainer } from "vorarbeiter";
import { ServiceContainerProvider } from "vorarbeiter-react";
import { ServiceImpl } from "./path/to/service/impl";
import { App } from "./path/to/app";

export const RootComponent: FC = () => {
  const sb = createServiceSpecBuilder();
  sb.set("someService", () => new ServiceImpl());
  const serviceContainer = createServiceContainer(sb.getServiceSpec());
  
  return (
    <ServiceContainerProvider serviceContainer={serviceContainer}>
      <App />
    </ServiceContainerProvider>
  );
};
```

#### Get service container inside functional component

```typescript
import React, { FC } from "react";
import { useServiceContainer } from "vorarbeiter-react";
import { Service } from "./path/to/service";

const MyComponent: FC = () => {
  const serviceContainer = useServiceContainer();
  const someService: Service = serviceContainer.get("someService");
  
  return (
    <div>{someService.someFieldValue}</div>
  );
};
```

#### Get service container inside class component

```typescript
import React from "react";
import { withServiceContainer } from "vorarbeiter-react";
import { Service } from "./path/to/service";

const MyComponent = withServiceContainer(class MyComponent extends React.Component {
  render() {
    const { serviceContainer } = this.props;
    const someService: Service = serviceContainer.get("someService");
    
    return (
      <div>{someService.someFieldValue}</div>
    );
  }
});
```
