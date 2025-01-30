import React, { createContext, useContext } from 'react';

const ServiceContainerContext = createContext({});
const useServiceContainer = () => useContext(ServiceContainerContext);
const ServiceContainerProvider = ({ children, serviceContainer }) => {
    return React.createElement(ServiceContainerContext.Provider, { value: serviceContainer }, children);
};
function withServiceContainer(WrappedComponent) {
    function WithServiceContainer(props) {
        return React.createElement(WrappedComponent, Object.assign({}, props, { serviceContainer: useServiceContainer() }));
    }
    WithServiceContainer.displayName = `WithVorarbeiter(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
    return WithServiceContainer;
}
ServiceContainerProvider.displayName = "VorarbeiterProvider";

export { ServiceContainerContext, ServiceContainerProvider, useServiceContainer, withServiceContainer };
//# sourceMappingURL=vorarbeiterreact.esm.js.map
