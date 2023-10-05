import styles from './Filtros.module.scss';
import filtros from './filtros.json';
import React from 'react';

type IOpcao = typeof filtros[0];

    interface Props {
        filtro: number  |  null;
        setFiltro: React.Dispatch<React.SetStateAction<number  |  null>>
    }



export default function filtros(){
    return(
        <div className={styles.filtro}>
            {filtros.map((opcao) =>(
                <button className= {styles.filtro_filtro} key={opcao.id}>
                        {opcao.label}
                    </button>
            
            ))}
            </div>
    )
}