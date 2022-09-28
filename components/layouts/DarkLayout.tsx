import React, {FC} from 'react';

type Props = {
    children: React.ReactNode
}

export const DarkLayout: FC<Props> = ({children}) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px',
            borderRadius: '5px'
        }}>
            <div>
                {children}
            </div>
        </div>
    );
};

