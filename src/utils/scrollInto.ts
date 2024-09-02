const scrollInto = (id: string) => {
  const element = document.getElementById(id);
  const yOffset = -67;
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
};

export default scrollInto;
