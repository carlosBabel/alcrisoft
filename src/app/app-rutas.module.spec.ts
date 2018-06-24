import { AppRutasModule } from './app-rutas.module';

describe('AppRutasModule', () => {
  let appRutasModule: AppRutasModule;

  beforeEach(() => {
    appRutasModule = new AppRutasModule();
  });

  it('should create an instance', () => {
    expect(appRutasModule).toBeTruthy();
  });
});
