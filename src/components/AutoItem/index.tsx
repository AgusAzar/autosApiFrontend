import React from 'react';
import { useGet } from '../../hooks/useHttp';
import { Auto, Marca } from '../../types';
import './autosItem.css';
type Props = {
    auto: Auto;
};

const AutoItem: React.FC<Props> = ({ auto }) => {
    const marca = useGet<Marca>(`/Marca/${auto.MarcaId}`);
    return (
        <div className="auto-div" key={auto.Id}>
            <img
                className="auto-foto"
                src={auto.FotoUrl}
                alt={`imagen ${auto.Modelo}`}
            />
            <div className="auto-info">
                <p>
                    {marca.response?.MarcaName} {auto.Modelo}
                </p>
            </div>
        </div>
    );
};

export default AutoItem;
