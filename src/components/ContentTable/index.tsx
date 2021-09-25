import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auto } from '../../types';
import { useGet } from '../../hooks/useHttp';
import AutoItem from '../AutoItem';
import './contentTable.css';

const ContentTable = () => {
    const history = useHistory();
    const Autos = useGet<Auto[]>('/Autos');
    console.log(Autos.response);
    return (
        <>
            <div className="header">
                <h1>Autos</h1>
                <button
                    className=" secondary-background-color add-button"
                    onClick={() => history.push('/agregarAuto')}
                >
                    Agregar auto
                </button>
            </div>
            <div className="grid-autos">
                {Autos.response?.map((i) => (
                    <AutoItem key={i.AutoId} auto={i} />
                ))}
            </div>
        </>
    );
};

export default ContentTable;
