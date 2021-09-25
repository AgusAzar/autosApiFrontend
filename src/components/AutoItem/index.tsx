import React from 'react';
import { useGet } from '../../hooks/useHttp';
import { Auto, Marca } from '../../types';
import './autosItem.css';
type Props = {
    auto: Auto;
};

const AutoItem: React.FC<Props> = ({ auto }) => {
    return (
        <div className="auto-div secondary-background-color">
            <img
                className="auto-foto"
                src={auto.FotoUrl}
                alt={`imagen ${auto.Modelo}`}
            />
            <div className="auto-info">
                <p>
                    {auto.MarcaActual?.Name} {auto.Modelo}
                </p>
            </div>
        </div>
    );
};

export default AutoItem;
