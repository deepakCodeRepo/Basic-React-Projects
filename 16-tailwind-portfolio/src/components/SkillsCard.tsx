type MyContainerProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const SkillsCard = ({ icon, title, text }: MyContainerProps) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

export default SkillsCard;
