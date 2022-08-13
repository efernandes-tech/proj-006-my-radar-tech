// Utils
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const BORDER_COLOR = {
    color1: '#0CABA8',
    color2: '#2680DE',
    color3: '#203245',
    color4: '#B5553A',
    color5: '#DE3226',
};

const BACKGROUND_COLOR = {
    color1: 'rgba(12, 171, 168, 0.5)',
    color2: 'rgba(255, 255, 255, 0.5)',
    color3: 'rgba(255, 255, 255, 0.5)',
    color4: 'rgba(255, 255, 255, 0.5)',
    color5: 'rgba(255, 255, 255, 0.5)',
};

function techs(config) {
    values = [];

    values.push("HTML");
    values.push("CSS");
    values.push("JavaScript");
    values.push("PHP");
    values.push("SQL");

    return values;
}

function radar(config) {
    values = [];

    values.push(getRandomInt(0, 100));
    values.push(getRandomInt(0, 100));
    values.push(getRandomInt(0, 100));
    values.push(getRandomInt(0, 100));
    values.push(getRandomInt(0, 100));

    return values;
}

// Setup

const DATA_COUNT = 5;
// const NUMBER_CFG = {
//     count: DATA_COUNT,
//     min: 0,
//     max: 100
// };

const my_techs = techs({
    count: DATA_COUNT
});

const dataFirstUsername = radar({
    count: DATA_COUNT,
});
// console.log(dataFirstUsername);
// const dataMiddleSkip = numbers(NUMBER_CFG);
// const dataLastSkip = numbers(NUMBER_CFG);

// dataFirstUsername[0] = null;
// dataMiddleSkip[Number.parseInt(dataMiddleSkip.length / 2, 10)] = null;
// dataLastSkip[dataLastSkip.length - 1] = null;

const data = {
    labels: my_techs,
    datasets: [{
            label: '@edersonlrf',
            data: dataFirstUsername,
            borderColor: BORDER_COLOR.color1,
            backgroundColor: BACKGROUND_COLOR.color1,
        },
        // {
        //     label: 'Skip mid dataset',
        //     data: dataMiddleSkip,
        //     borderColor: CHART_COLORS.blue,
        //     backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
        // },
        // {
        //     label: 'Skip last dataset',
        //     data: dataLastSkip,
        //     borderColor: CHART_COLORS.green,
        //     backgroundColor: transparentize(CHART_COLORS.green, 0.5),
        // }
    ]
};

// Config

const config = {
    type: 'radar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Radar Tech'
            }
        }
    },
};

// Actions

const actions = [{
    name: 'Randomize',
    handler(chart) {
        chart.data.datasets.forEach((dataset, i) => {
            const data = numbers({
                count: chart.data.labels.length,
                min: 0,
                max: 100
            });

            if (i === 0) {
                data[0] = null;
            } else if (i === 1) {
                data[Number.parseInt(data.length / 2, 10)] = null;
            } else {
                data[data.length - 1] = null;
            }

            dataset.data = data;
        });
        chart.update();
    }
}];

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);