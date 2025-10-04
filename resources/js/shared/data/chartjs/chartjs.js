import { computed, ref, } from "vue";

export const data = ref([0, 10, 5, 2, 20, 30, 45]);

export const linedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgb(152, 95, 253)',
            borderColor: 'rgb(152, 95, 253)',
            data: data.value,
        },
    ],
};

export const bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(152, 95, 253, 0.2)',
                'rgba(255, 73, 205, 0.2)',
                'rgba(253, 175, 34, 0.2)',
                'rgba(50, 212, 132, 0.2)',
                'rgba(0, 201, 255, 0.2)',
                'rgba(255, 103, 87, 0.2)',
                'rgba(10, 10, 10, 0.2)',
            ],
            borderColor: [
                'rgb(152, 95, 253)',
                'rgb(255, 73, 205)',
                'rgb(253, 175, 34)',
                'rgb(50, 212, 132)',
                'rgb(0, 201, 255)',
                'rgb(255, 103, 87)',
                'rgb(10, 10, 10)',
            ],
            borderWidth: 1,
        },
    ],
};

export const singledata = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: ['rgb(132, 90, 223)', 'rgb(35, 183, 229)', 'rgb(245, 184, 73)'],
            hoverOffset: 4,
        },
    ],
};

export const singledata2 = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(132, 90, 223)',
                'rgb(75, 192, 192)',
                'rgb(245, 184, 73)',
                'rgb(201, 203, 207)',
                'rgb(35, 183, 229)',
            ],
        },
    ],
};

export const radialdata = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(132, 90, 223, 0.2)',
            borderColor: 'rgb(132, 90, 223)',
            pointBackgroundColor: 'rgb(132, 90, 223)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(132, 90, 223)',
        },
        {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(35, 183, 229, 0.2)',
            borderColor: 'rgb(35, 183, 229)',
            pointBackgroundColor: 'rgb(35, 183, 229)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(35, 183, 229)',
        },
    ],
};


export const Bubbledata = {
    datasets: [
        {
            label: 'First Dataset',
            data: [
                { x: 20, y: 30, r: 15 },
                { x: 40, y: 10, r: 10 },
            ],
            backgroundColor: 'rgb(132, 90, 223)',
        },
    ],
};


export const scatterdata = {
    datasets: [
        {
            label: 'Scatter Dataset',
            data: [
                { x: -10, y: 0 },
                { x: 0, y: 10 },
                { x: 10, y: 5 },
                { x: 0.5, y: 5.5 },
            ],
            backgroundColor: 'rgb(132, 90, 223)',
        },
    ],
};
