import { MdRoutingModule } from './md-routing.module';

describe('MdRoutingModule', () => {
  let mdRoutingModule: MdRoutingModule;

  beforeEach(() => {
    mdRoutingModule = new MdRoutingModule();
  });

  it('should create an instance', () => {
    expect(mdRoutingModule).toBeTruthy();
  });
});
