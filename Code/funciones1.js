function alquilerVehiculo (tipoVehiculo, cantDias, sillaBebe = false)
{
    let precio = 0;
    switch(tipoVehiculo)
    {
        case "Compacto":
            precio = 14000;
            break;
        case "Mediano":
            precio = 17000;
            break;
        case "Camioneta":
            precio = 28000;
            break;
    }
    if(sillaBebe)
    {
        return ((precio * cantDias) + 1200);
    }
    else
    {
    return (precio * cantDias)
    }


}

console.log(alquilerVehiculo("fitito", 5));
