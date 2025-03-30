class MemoryObjects{
  constructor(map = new Map()) {
    this.map = map
  }

  clone(target_memory_object_name) {
    return new MemoryObjects(
      new Map(
        [...this.map].map(([key, value]) => 
          [key, key === target_memory_object_name ? value.clone() : value])
      )
    )
  }

  upsert(key, new_memory_object) {
    this.map.set(key, new_memory_object)
  }

  get_map() {
    return this.map
  }
}

export default MemoryObjects