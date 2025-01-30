(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vorarbeiterreact = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    const ServiceContainerContext = React.createContext({});
    const useServiceContainer = () => React.useContext(ServiceContainerContext);
    const ServiceContainerProvider = ({ children, serviceContainer }) => {
        return React__default["default"].createElement(ServiceContainerContext.Provider, { value: serviceContainer }, children);
    };
    function withServiceContainer(WrappedComponent) {
        function WithServiceContainer(props) {
            return React__default["default"].createElement(WrappedComponent, Object.assign({}, props, { serviceContainer: useServiceContainer() }));
        }
        WithServiceContainer.displayName = `WithVorarbeiter(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
        return WithServiceContainer;
    }
    ServiceContainerProvider.displayName = "VorarbeiterProvider";

    exports.ServiceContainerContext = ServiceContainerContext;
    exports.ServiceContainerProvider = ServiceContainerProvider;
    exports.useServiceContainer = useServiceContainer;
    exports.withServiceContainer = withServiceContainer;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vorarbeiterreact.umd.js.map
