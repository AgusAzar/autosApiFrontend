import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Marca } from '../../types';
import { useGet, usePost } from '../../hooks/useHttp';
import './agregarAuto.css';

const AgregarAuto = () => {
    const Marcas = useGet<Marca[]>('/Marca');
    const [marcaId, setMarcaId] = useState<number>();
    const [marca, setMarca] = useState<string>('');
    const [modelo, setModelo] = useState<string>('');
    const [fotoUrl, setFotoUrl] = useState<string>('');
    const PostAuto = usePost('/Autos');
    return (
        <>
            <div className="agregar-auto-header">
                <Link className="volver" to="/">
                    Volver
                </Link>
                <h1>Agregar Autos</h1>
            </div>
            <div className="container">
                <form
                    className="agregar-auto-form secondary-background-color"
                    onSubmit={(e) => {
                        e.preventDefault();
                        PostAuto.postData({
                            modelo: modelo,
                            fotoUrl: fotoUrl,
                            marcaId: marcaId,
                        });
                    }}
                >
                    <label>
                        <p>Modelo:</p>
                        <input
                            className="form-input"
                            type="text"
                            name="modelo"
                            value={modelo}
                            onChange={(e) => {
                                setModelo(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        <p>Url de la foto:</p>
                        <input
                            className="form-input"
                            type="text"
                            name="fotoUrl"
                            value={fotoUrl}
                            onChange={(e) => {
                                setFotoUrl(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        <p>Marca:</p>
                        <select
                            className="form-input"
                            name="marca"
                            id="marca"
                            value={marca}
                            onChange={(e) => {
                                setMarcaId(parseInt(e.target.value));
                                setMarca(e.target.value);
                                setTimeout(() => console.log(marcaId), 1000);
                            }}
                        >
                            {Marcas.response?.map((marca) => (
                                <option
                                    key={marca.MarcaId}
                                    value={marca.MarcaId}
                                >
                                    {marca.Name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button className="add-button alternative-background-color">
                        Agregar auto
                    </button>
                </form>
            </div>
        </>
    );
};

export default AgregarAuto;
