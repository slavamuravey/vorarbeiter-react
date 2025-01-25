import React, { FC, PropsWithChildren, ComponentType } from "react";
import { ServiceContainer } from "vorarbeiter";
export interface ServiceContainerContextValue extends ServiceContainer {
}
export declare const ServiceContainerContext: React.Context<ServiceContainerContextValue>;
export declare const useServiceContainer: () => ServiceContainerContextValue;
export interface ServiceContainerProviderProps {
    serviceContainer: ServiceContainer;
}
export declare const ServiceContainerProvider: FC<PropsWithChildren<ServiceContainerProviderProps>>;
export interface WithServiceContainerProps {
    serviceContainer: ServiceContainer;
}
export declare function withServiceContainer<T extends WithServiceContainerProps = WithServiceContainerProps>(WrappedComponent: ComponentType<T>): {
    (props: Omit<T, keyof WithServiceContainerProps>): React.JSX.Element;
    displayName: string;
};
