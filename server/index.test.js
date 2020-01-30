import server, { api } from './index'

/**
 * TODO: add Jest config for server tests
 */
describe('The server', () => {
  it('registers route', () => {
    const app = {
      get: jest.fn()
    };
    server(app);

    expect(app.get).toHaveBeenCalledWith(api.conditions)
  });
});
