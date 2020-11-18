const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// Устанавливаем макет адаптера (экземпляр по умолчанию)
const mock = new MockAdapter(axios);

// конечные точки данных (data endpoint)
mock.onGet('/api/data/repo_hierarchy').reply(200, require('./fixtures/repo_hierarchy.json'))
mock.onGet('/api/data/amount_of_repos').reply(200, require('./fixtures/open_source_vs_ep_repos.json'))
mock.onGet('/api/data/device_percentage').reply(200, require('./fixtures/device_percentage.json'))

// конечные точки конфигурации (configuration endpoints)
mock.onGet('/api/dashboard/repo_dash_config').reply(200, require('./fixtures/repo_dash_config.json'))

//  список мониторинга конечной точки (dashboard list endpoint)
mock.onGet('/api/dashboard-list').reply(200, [
  {
    path: "repo_dash_config",
    title: "Информация о репозитории EPAM",
    description: "Панель мониторинга содержит ВЫМЫШЛЕННЫЕ данные о иерархии филиалов организации EPAM, представлен линейный график сравнения репозиториев с открытым исходным кодом и корпоративных репозиториев, а также радиальный линейный график сравнения общего количества устройств с корпоративными управляемыми устройствами, содержащими кодовую базу организации."
  }
])