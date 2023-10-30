import { Injectable } from '@angular/core';

@Injectable()
/**
 * Serviço para gestão do LocalStorage e SessionStorage.
 */
export class StorageServices {
  /**
   * Retorna o valor do LocalStorage atual associado à chave fornecida ou null se a chave fornecida não existir.
   * @param key Chave de armazenamento do valor.
   * @returns Objeto armazenado ou null caso não existir.
   */
  static getLocal<T>(key: string): T {
    const obj = localStorage.getItem(key);
    return obj ? JSON.parse(obj) : null;
  }

  /**
   * Define o valor o LocalStorage do par identificado por chave para valor, criando um novo par chave/valor se não existia para a chave anteriormente.
   * @param key Chave de armazenamento do valor.
   * @param object Objeto que será armazenado.
   */
  static setLocal<T>(key: string, object: T): void {
    localStorage.setItem(key, JSON.stringify(object));
  }

  /**
   * Remove do LocalStorage o par chave/valor identificado pela chave.
   * @param key Chave de armazenamento do valor.
   */
  static removeLocal(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Retorna o valor do SessionStorage atual associado à chave fornecida ou null se a chave fornecida não existir.
   * @param key Chave de armazenamento do valor.
   * @returns Objeto armazenado ou null caso não existir.
   */
  static getSession<T>(name: string): T {
    const obj = sessionStorage.getItem(name);
    return obj ? JSON.parse(obj) : null;
  }

  /**
   * Define o valor o SessionStorage do par identificado por chave para valor, criando um novo par chave/valor se não existia para a chave anteriormente.
   * @param key Chave de armazenamento do valor.
   * @param object Objeto que será armazenado.
   */
  static setSession<T>(name: string, object: T): void {
    sessionStorage.setItem(name, JSON.stringify(object));
  }

  /**
   * Remove do SessionStorage o par chave/valor identificado pela chave.
   * @param key Chave de armazenamento do valor.
   */
  static removeSession(name: string): void {
    sessionStorage.removeItem(name);
  }

  /**
   * Remove todos os itens do LocalStorage e SessionStorage pela chave.
   * @param name
   */
  static removeAll(name: string): void {
    this.removeLocal(name);
    this.removeSession(name);
  }

  /**
   * Remove todos os itens do LocalStorage e SessionStorage.
   */
  static clearAll(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
