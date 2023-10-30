import { BehaviorSubject, Observable } from 'rxjs';

export class StoreService<T> {
  protected constructor(initialState: T) {
    this.initialState = initialState;
    this._state = new BehaviorSubject(initialState);
    this.state = this._state.asObservable();
  }

  /**
   * Estado inicial do objeto.
   */
  private initialState: T;
  private readonly _state: BehaviorSubject<T>;
  /**
   * Observable da store (apenas leitura).
   */
  readonly state: Observable<T>;

  /**
   * Retorna o valor atual do estado do objeto.
   */
  get currentValue(): T {
    return this._state.getValue();
  }

  /**
   * Atribui o valor no estado e dispara o evento a todos os observables assinados.
   */
  private set currentValue(val: T) {
    this._state.next(val);
  }

  /**
   * Atribui o valor no estado do store.
   * @param val Objeto que será atribuido no estado.
   */
  add(val: T) {
    this.currentValue = val;
  }

  /**
   * Remove o valor atual do estado do objeto e retorna para o estado inicial.
   */
  remove() {
    this.currentValue = this.initialState;
  }
}
