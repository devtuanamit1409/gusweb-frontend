import React from 'react';
import { Flex, Progress } from 'antd';

const App: React.FC = () => (
    <Flex>
        <Progress percent={78} showInfo={false}
            trailColor="#ffffff"
            strokeColor={{
                '0%': '#45D7DF',
                '100%': '#45D7DF',
            }}
        />
    </Flex>
);

export default App;