class CustomMap<K, V> {
  private keys: K[];
  private values: V[];

  constructor() {
    this.keys = [];
    this.values = [];
  }

  public set(key: K, value: V) {
    this.keys.push(key);
    this.values.push(value);
  }

  public get(key: K): V {
    const index = this.keys.indexOf(key);
    return this.values[index];
  }

  public isKey(key: K): boolean {
    return this.keys.includes(key);
  }

  public keySet(): K[] {
    return this.keys;
  }

  public getValues(): V[] {
    return this.values;
  }
}

function partition<T>(
  array: T[],
  func: (arg: T) => string
): CustomMap<string, T[]> {
  const map: CustomMap<string, T[]> = new CustomMap();
  for (const elem of array) {
    const index = func(elem);
    if (!map.isKey(index)) map.set(index, []);
    map.get(index).push(elem);
  }

  return map;
}

function loadImage(path: string) {
  return new URL(path, import.meta.url).toString();
}

export { partition, loadImage, CustomMap };
