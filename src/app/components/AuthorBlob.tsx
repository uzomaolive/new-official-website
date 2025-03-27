type AuthorBlobProps = {
    image: string;
    date: string;
    author: string;
    timeToRead: string;
}

export default function AuthorBlob(props: AuthorBlobProps) {
    return (
      <div className="flex items-center mb-4">
        <img src={props.image} className="w-12 rounded-full" />
        <div className="ml-4 my-4">
          <p className="text-sm font-roboto text-bensonblack">{props.author}</p>
          <p className="text-xs font-roboto text-bensongrey">
            {props.date} &nbsp; | &nbsp; {props.timeToRead}
          </p>
        </div>
      </div>
    );
}