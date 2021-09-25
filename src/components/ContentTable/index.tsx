import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auto } from '../../types';
import { useGet } from '../../hooks/useHttp';
import AutoItem from '../AutoItem';
import './contentTable.css';

const ContentTable = () => {
    const history = useHistory();
    const Autos = useGet<Auto[]>('/Autos');
    return (
        <>
            <div className="header">
                <h1>Autos</h1>
                <button
                    className="add-button"
                    onClick={() => history.push('/agregarAuto')}
                >
                    Agregar auto
                </button>
            </div>
            <div className="grid-autos">
                {Autos.response?.map((i) => (
                    <AutoItem auto={i} key={i.Id} />
                ))}
            </div>
        </>
    );
};

export default ContentTable;
