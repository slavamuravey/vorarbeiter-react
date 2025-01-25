import React, { createContext, useContext, FC, PropsWithChildren, ComponentType } from "react";
import { ServiceContainer } from "vorarbeiter";

export interface ServiceContainerContextValue extends ServiceContainer {}

export const ServiceContainerContext = createContext<ServiceContainerContextValue>({} as ServiceContainerContextValue);

export const useServiceContainer = () => useContext<ServiceContainerContextValue>(ServiceContainerContext);

export interface ServiceContainerProviderProps {
  serviceContainer: ServiceContainer;
}

export const ServiceContainerProvider: FC<PropsWithChildren<ServiceContainerProviderProps>> = ({
  children,
  serviceContainer
}) => {
  return <ServiceContainerContext.Provider value={serviceContainer}>{children}</ServiceContainerContext.Provider>;
};

export interface WithServiceContainerProps {
  serviceContainer: ServiceContainer;
}

export function withServiceContainer<T extends WithServiceContainerProps = WithServiceContainerProps>(
  WrappedComponent: ComponentType<T>
) {
  const WithServiceContainer = (props: Omit<T, keyof WithServiceContainerProps>) => (
    <WrappedComponent {...(props as T)} serviceContainer={useServiceContainer()} />
  );

  WithServiceContainer.displayName = `WithVorarbeiter(${WrappedComponent.displayName || (WrappedComponent as { name: string }).name || "Component"})`;

  return WithServiceContainer;
}

ServiceContainerProvider.displayName = "VorarbeiterProvider";
