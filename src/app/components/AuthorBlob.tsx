import Image from 'next/image';

type AuthorBlobProps = {
    image?: string; // Make optional if you're providing a default
    date: string;
    author: string;
    timeToRead: string;
}

export default function AuthorBlob(props: AuthorBlobProps) {
    // Use hero-image.jpg as the default image
    const authorImage = "/images/blog/hero-image.jpg";
    
    return (
      <div className="flex items-center mb-4">
        <Image 
          src={authorImage} 
          alt="Author"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4 my-4">
          <p className="text-sm font-roboto">{props.author}</p>
          <p className="text-xs font-roboto">
            {props.date} &nbsp; | &nbsp; {props.timeToRead}
          </p>
        </div>
      </div>
    );
}