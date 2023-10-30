import { StorageServices } from './storage.service';
import { TestBed } from '@angular/core/testing';

describe('StorageServices', () => {
  const mockValues = {
    key: 'chave',
    value: 'valor',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageServices],
    }).compileComponents();
  });

  test('should create', () => {
    expect(StorageServices).toBeTruthy();
  });

  test('should getLocal', () => {
    localStorage.setItem(mockValues.key, JSON.stringify(mockValues));
    expect(StorageServices.getLocal(mockValues.key)).toEqual(mockValues);
  });

  test('should setLocal', () => {
    StorageServices.setLocal(mockValues.key, mockValues);
    expect(StorageServices.getLocal(mockValues.key)).toEqual(mockValues);
  });

  test('should removeLocal', () => {
    StorageServices.removeLocal(mockValues.key);
    expect(StorageServices.getLocal(mockValues.key)).toBe(null);
  });

  test('should getSession', () => {
    sessionStorage.setItem(mockValues.key, JSON.stringify(mockValues));
    expect(StorageServices.getSession(mockValues.key)).toEqual(mockValues);
  });

  test('should setSession', () => {
    StorageServices.setSession(mockValues.key, mockValues);
    expect(StorageServices.getSession(mockValues.key)).toEqual(mockValues);
  });

  test('should removeSession', () => {
    StorageServices.removeSession(mockValues.key);
    expect(StorageServices.getSession(mockValues.key)).toBe(null);
  });

  test('should removeAll', () => {
    StorageServices.removeAll(mockValues.key);
    expect(StorageServices.getLocal(mockValues.key)).toBe(null);
    expect(StorageServices.getSession(mockValues.key)).toBe(null);
  });

  test('should clearAll', () => {
    StorageServices.clearAll();
    expect(localStorage.length).toBe(0);
    expect(sessionStorage.length).toBe(0);
  });
});
