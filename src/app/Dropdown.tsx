import React, { ReactNode } from 'react';

// Dropdown component
const Dropdown: React.FC = () => {
    return (
        <div className="flex h-screen justify-center bg-neutral-900 px-3 py-12">
            <FlyouLink href="/some-path" FlyouContent={<div>Nội dung dropdown</div>}>
                Click here
            </FlyouLink>
        </div>
    );
};

// FlyouLink component with typed props
interface FlyouLinkProps {
    children: ReactNode;
    href: string;
    FlyouContent: ReactNode;
}

const FlyouLink: React.FC<FlyouLinkProps> = ({ children, href, FlyouContent }) => {
    return (
        <div className="relative group">
            <a href={href} className="text-white">
                {children}
            </a>
            {/* Dropdown content, shown on hover */}
            <div className="absolute hidden group-hover:block bg-white p-2">
                {FlyouContent}
            </div>
        </div>
    );
};

export default Dropdown;
