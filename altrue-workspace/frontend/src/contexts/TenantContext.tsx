import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Tenant {
    id: string;
    name: string;
    logo: string;
    theme: string;
}

interface TenantContextType {
    tenant: Tenant | null;
    setTenant: (tenant: Tenant | null) => void;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const TenantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tenant, setTenant] = useState<Tenant | null>(null);

    return (
        <TenantContext.Provider value={{ tenant, setTenant }}>
            {children}
        </TenantContext.Provider>
    );
};

export const useTenant = (): TenantContextType => {
    const context = useContext(TenantContext);
    if (context === undefined) {
        throw new Error('useTenant must be used within a TenantProvider');
    }
    return context;
};