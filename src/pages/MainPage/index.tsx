import React from 'react';

import ContentTable from '../../components/ContentTable';

const MainPage = () => {
    return (
        <>
            <view className="titleSection">
                <h1 className="titulo">Titulo</h1>
            </view>
            <view className="contentSection">
                <ContentTable />
            </view>
        </>
    );
};

export default MainPage;
