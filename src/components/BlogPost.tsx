type Props = {
  date: string;
  title: string;
  imgPath: string;
  altText: string;
  children: string;
};

export const BlogPost = ({
  date,
  title,
  imgPath,
  altText,
  children,
}: Props) => {
  return (
    <div className="post">
      <div>
        <div className="headers">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <img src={imgPath} alt={altText} />
      </div>
      <div className="text">
        <p>{children}</p>
        <a href="#test" className="post-link">
          Continues ...
        </a>
      </div>
    </div>
  );
};
