import { MdMaterialModule } from './md-material.module';

describe('MdMaterialModule', () => {
  let mdMaterialModule: MdMaterialModule;

  beforeEach(() => {
    mdMaterialModule = new MdMaterialModule();
  });

  it('should create an instance', () => {
    expect(mdMaterialModule).toBeTruthy();
  });
});
