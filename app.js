const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'DevOps Tools List',
        status: 'success',
        devopsTools: [
            'Jenkins',
            'Docker',
            'Kubernetes',
            'Terraform',
            'Ansible',
            'GitLab CI/CD',
            'GitHub Actions',
            'CircleCI',
            'Travis CI',
            'Azure DevOps',
            'AWS CodePipeline',
            'Prometheus',
            'Grafana',
            'ELK Stack',
            'Datadog',
            'New Relic',
            'Splunk',
            'SonarQube',
            'HashiCorp Vault',
            'Helm',
            'ArgoCD',
            'Vagrant',
            'Puppet',
            'Chef',
            'Salt'
        ]
    }));
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
