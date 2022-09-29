function loadImage(path: string) {
  return new URL(path, import.meta.url).toString();
}

export { loadImage };
