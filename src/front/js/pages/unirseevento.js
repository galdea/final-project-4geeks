import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'semantic-ui-react';

export function UnirseEvento() {
    const [events, setEvents] = useState([]);
    const [nombreevento, setNombreEvento] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [integrantes, setIntegrantes] = useState('');
    const [publicooprivado, setPublicoOPrivado] = useState('');
    const [valor, setValor] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [is_active, setIsActive] = useState('');

    useEffect(() => {
        fetch(
            process.env.BACKEND_URL + "/api/crearevento", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.log(err));
    }, []);
    
    const handleSubmit = e => {
        e.preventDefault();
        fetch(
            process.env.BACKEND_URL + "/api/crearevento", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombreevento: nombreevento,
                descripcion: descripcion,
                integrantes: integrantes,
                publicooprivado: publicooprivado,
                valor: valor,
                ubicacion: ubicacion,
                is_active: is_active
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };
    
    return (
        <div>
            <h1>Unirse a evento</h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre del evento</Table.HeaderCell>
                        <Table.HeaderCell>Descripcion</Table.HeaderCell>
                        <Table.HeaderCell>Integrantes</Table.HeaderCell>
                        <Table.HeaderCell>Publico/Privado</Table.HeaderCell>
                        <Table.HeaderCell>Valor</Table.HeaderCell>
                        <Table.HeaderCell>Ubicacion</Table.HeaderCell>
                        <Table.HeaderCell>Activo</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
    
                <Table.Body>
                    {events.map(event => (
                        <Table.Row key={event.id}>
                            <Table.Cell>{event.nombreevento}</Table.Cell>
                            <Table.Cell>{event.descripcion}</Table.Cell>
                            <Table.Cell>{event.integrantes}</Table.Cell>
                            <Table.Cell>{event.publicooprivado}</Table.Cell>
                            <Table.Cell>{event.valor}</Table.Cell>
                            <Table.Cell>{event.ubicacion}</Table.Cell>
                            <Table.Cell>{event.activo}</Table.Cell>
                        </Table.Row>))}
                </Table.Body>
            </Table>
        </div>
    )}


    