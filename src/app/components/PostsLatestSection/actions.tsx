const selectTag = (id:number) => {
  const clazz = 'active';
  const el = document.getElementById('tags-section');

  if (el) {
    const li = el.getElementsByTagName("li");
    Array.prototype.forEach.call(li, function (item) {
      const idLi = Number(item.id.replace('tag-', ''));
      if (idLi === id) {
        item.classList.add(clazz);
      } else {
        item.classList.remove(clazz);
      }
    });
  }
}

export {
  selectTag
}
