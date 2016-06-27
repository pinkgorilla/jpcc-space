export class App {
  configureRouter(config, router) {
    config.title = 'JPCC.space';
    config.map([
      { route: ['', 'sermons'], name: 'sermons', moduleId: './sermons/index', nav: true, title: 'Sermons' }
    ]);

    this.router = router;
  }
}
