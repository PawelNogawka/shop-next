const SectionHeading = ({ title, desc }) => {
  return (
    <header className="section-header">
      <h2 className="section-header__heading">{title}</h2>
      <p className="section-header__desc">{desc}</p>
    </header>
  );
};

export default SectionHeading;
