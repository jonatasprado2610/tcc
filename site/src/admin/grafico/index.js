import './index.scss';
import { Bar, Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend );


export default function Grafico(){

    const options = {

        Plugin: {
            Legend: {
                position: 'top',
            },
            Title: {
                display: true,
                Text: 'Fluxo de pessoas'
            },
        },
    };


    const labels = ['janeiro' ,'janeiro' , 'janeiro' , 'janeiro' , 'janeiro' ,  ];
    const fluxo = [503.12,600,700,800,900];

    
    const data =  {
        labels,
        datasets: [
            {
            label :'Compras',
            backgroundColor: ['red','green','blue','aqua','black'],
            data: fluxo
        },
    ]
}

    return(
        <main className='page-grafico'>
            <h1>vasco da gama</h1>

                        <div className='grafico'> 

                <Bar  options={options} data={data} />

                </div>

        </main>
    )


}