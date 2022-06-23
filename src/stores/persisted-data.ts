import { ref, watch } from "vue";

export default persisted;

function persisted<T>(fn: () => Promise<T>, def: T) {
  return new Persisted(fn, def);
}

class Persisted<T> {
  private fn: () => Promise<T>;
  private def: T;

  private value = ref<T>();

  constructor(fn: () => Promise<T>, def: T) {
    this.fn = fn;
    this.def = def;
  }

  private async gen(reload: boolean) {
    if (this.value.value != undefined && !reload) return;
    this.value.value = await this.fn();
  }

  public get(reload: boolean = false) {
    this.gen(reload);
    return this.value.value ?? this.def;
  }

  public getRef() {
    return this.value;
  }

  public onChange(cb: () => void) {
    watch(this.value, cb);
  }
}
