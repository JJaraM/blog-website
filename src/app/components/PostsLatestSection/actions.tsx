const selectTag = (id:number) => {
  const clazz = 'active';
  const el = document.getElementById('tags-section');

  if (el) {
    const li = el.getElementsByTagName("li");
    Array.prototype.forEach.call(li, function (item) {
      const idLi = Number(item.id.replace('tag-', ''));
      item.classList.remove(clazz);

      if (idLi === id) {
        console.log(item);
        item.classList.add(clazz);
      }
    });
  }
}

export {
  selectTag
}
