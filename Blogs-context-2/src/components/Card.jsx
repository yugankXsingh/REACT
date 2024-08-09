const Card = ({ title, author, date, category, tags, content }) => {
  return (
    <div>
      <p className="font-medium text-lg">
        <strong>{title}</strong>
      </p>
      <p className="text-sm mt-2">
        By <span className="italic">{author}</span>
        on <span className="font-bold underline">{category}</span>
      </p>
      <p className="text-[10px] mt-[4px]">
        Posted On: <span>{date}</span>
      </p>
      <p className="text-md mt-[14px]">{content}</p>
      <div className="flex gap-x-3 mt-3">
        {tags.map((tag, index) => {
          return (
            <span
              key={index+tag}
              className="text-xs text-blue-700 underline font-bold"
            >{`#${tag}`}</span>
          );
        })}

      </div>
    </div>
  );
};

export default Card;
