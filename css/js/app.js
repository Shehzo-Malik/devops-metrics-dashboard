const refreshBtn = document.getElementById('refresh-btn');
const cpuMetric = document.getElementById('cpu-metric');
const containerList = document.getElementById('container-list');

const containers = [
    { name: 'nginx-proxy-gateway', image: 'nginx:latest', port: '80:80', status: 'Running' },
    { name: 'node-backend-api', image: 'node:18-alpine', port: '5000:5000', status: 'Running' },
    { name: 'mysql-database', image: 'mysql:8.0', port: '3306:3306', status: 'Running' },
    { name: 'redis-cache-layer', image: 'redis:alpine', port: '6379:6379', status: 'Running' },
    { name: 'grafana-monitoring', image: 'grafana/grafana', port: '3000:3000', status: 'Running' }
];

function renderContainers() {
    containerList.innerHTML = '';
    containers.forEach((c, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${c.name}</strong></td>
            <td><code>${c.image}</code></td>
            <td>${c.port}</td>
            <td><span class="status-tag">${c.status}</span></td>
            <td><button class="action-btn" onclick="restartContainer(${index})">Restart</button></td>
        `;
        containerList.appendChild(row);
    });
}

function restartContainer(index) {
    alert(`Restarting container: ${containers[index].name}... Success!`);
}

refreshBtn.addEventListener('click', () => {
    const randomCpu = Math.floor(Math.random() * 40) + 25;
    cpuMetric.innerText = `${randomCpu}%`;
    renderContainers();
    alert('Metrics successfully refreshed from cluster node!');
});

// Initial load
renderContainers();