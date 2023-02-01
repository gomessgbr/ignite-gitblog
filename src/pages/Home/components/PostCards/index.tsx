import {
  PostCardContent,
  PostCardContentSubTitle,
  PostCardContentTitle,
} from "./styles";

import { Link } from "react-router-dom";
import { api } from "../../../../lib/axios";

interface PostCardProps {
  titlePost: string;
  bodyPost: string;
  numberPost: number;
  updated_at: string;
}

export function PostCards({
  titlePost,
  bodyPost,
  numberPost,
  updated_at,
}: PostCardProps) {
  return (
    <Link to={`/Post/${numberPost}`} title="Post" state={{ updated_at }}>
      <PostCardContent>
        <PostCardContentTitle>
          <div style={{ width: "17.69rem" }}>
            <h1>{titlePost}</h1>
          </div>

          <span>{updated_at}</span>
        </PostCardContentTitle>
        <PostCardContentSubTitle>
          <p>{bodyPost}</p>
        </PostCardContentSubTitle>
      </PostCardContent>
    </Link>
  );
}
