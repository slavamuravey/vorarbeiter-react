import React, { createContext, useContext } from "react";
export const ServiceContainerContext = createContext({});
export const useServiceContainer = () => useContext(ServiceContainerContext);
export const ServiceContainerProvider = ({ children, serviceContainer }) => {
    return React.createElement(ServiceContainerContext.Provider, { value: serviceContainer }, children);
};
export function withServiceContainer(WrappedComponent) {
    function WithServiceContainer(props) {
        return React.createElement(WrappedComponent, Object.assign({}, props, { serviceContainer: useServiceContainer() }));
    }
    WithServiceContainer.displayName = `WithVorarbeiter(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
    return WithServiceContainer;
}
ServiceContainerProvider.displayName = "VorarbeiterProvider";
//# sourceMappingURL=index.js.map