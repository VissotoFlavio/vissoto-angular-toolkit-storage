import { StoreService } from './store.services';

describe('StoreService', () => {
  let storeService: StoreService<string>;

  const mockValue = 'ValueMockValue';

  beforeEach(() => {
    storeService = new (class xxx extends StoreService<string> {
      constructor() {
        super(mockValue);
      }
    })();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.clearAllTimers();
  });

  test('should create', () => {
    expect(storeService).toBeTruthy();
  });

  test('should currentValue (GET) and (SET)', () => {
    storeService.add(mockValue);
    expect(storeService.currentValue).toEqual(mockValue);
  });

  test('should remove', () => {
    const mockNewValue = 'NewValue';
    storeService.add(mockValue);
    expect(storeService.currentValue).toEqual(mockValue);
    storeService.add(mockNewValue);
    expect(storeService.currentValue).toEqual(mockNewValue);
    storeService.remove();
    expect(storeService.currentValue).toEqual(mockValue);
  });
});
