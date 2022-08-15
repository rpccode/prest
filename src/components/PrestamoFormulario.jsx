import React from 'react'

const PrestamoFormulario = () => {
    return (
        <div className='formulario'>
            <h1 className='titulo mb-2'>Nuevo Prestamo</h1>
            <form className='' >
                <div className='mb-4' >
                    <label className='campoL'
                        htmlFor='nombre'>Nombre</label>
                    <input type="text" id='nombre' className='campo' />
                </div>
                <div className='mb-4' >
                    <label className='campoL'
                        htmlFor='apellido'>Apellido</label>
                    <input type="text" id='apellido' className='campo' />
                </div>
                <div className='mb-4 flex justify-between' >
                    <div className='w-1/2'>
                        <label className='campoL'
                            htmlFor='monto'>Monto</label>
                        <input type="number" id='monto' className='campo' />
                    </div>
                    <div className='w-1/2 ml-1 flex justify-between'>
                        <div className='w-1/2'>
                            <label className='campoL'
                                htmlFor='interes'>Int %</label>
                            <input type="number" id='interes' className='campo' />
                        </div>
                        <div className='w-1/2'>
                            <label className='campoL'
                                htmlFor='tipo'>tipo</label>
                            <select id='tipo' className='campo' >
                                <option value="comida">Unico</option>
                                <option value="casa">Diario</option>
                                <option value="gastos">Semanal</option>
                                <option value="suscripciones">Quincenal</option>
                                <option value="ocio">Mensual</option>
                                <option value="ahorro">Anual</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='mb-4' >
                    <label className='campoL'
                        htmlFor='nombre'>Periodo de Pago</label>
                    <select id='tipo' className='campo text-center' >
                        <option value="comida">Unico</option>
                        <option value="casa">Diario</option>
                        <option value="gastos">Semanal</option>
                        <option value="suscripciones">Quincenal</option>
                        <option value="ocio">Mensual</option>
                    </select>
                </div>
                <div className='mb-4 flex justify-between' >
                    <div className='w-1/2'>
                        <label className='campoL'
                            htmlFor='nombre'>Dia</label>
                        <input type="date" id='nombre' className='campo' />
                    </div>
                    <div className='w-1/2'>
                        <label className='campoL'
                            htmlFor='nombre'>Hora</label>
                        <input type="time" id='nombre' className='campo' />
                    </div>
                </div>

                <input type="submit" className='btn' value='guardar' />

            </form>

        </div>
    )
}

export default PrestamoFormulario