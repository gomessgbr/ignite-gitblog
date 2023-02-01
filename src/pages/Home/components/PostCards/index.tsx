import {
  PostCardContent,
  PostCardContentBody,
  PostCardContentSubTitle,
  PostCardContentTitle,
} from "./styles";

import { Link } from "react-router-dom";
import { api } from "../../../../lib/axios";

interface PostCardProps {
  titlePost: string;
  bodyPost: string;
  numberPost: number;
  created_at: string;
}

export function PostCards({
  titlePost,
  bodyPost,
  numberPost,
  created_at,
}: PostCardProps) {
  return (
    <PostCardContent>
      <Link to={`/Post/${numberPost}`} title="Post" state={{ created_at }}>
        <PostCardContentTitle>
          <div style={{ width: "17.69rem" }}>
            <h1>{titlePost}</h1>
          </div>

          <span>{created_at}</span>
        </PostCardContentTitle>
      </Link>
      <PostCardContentSubTitle>
        <PostCardContentBody>{bodyPost}</PostCardContentBody>
      </PostCardContentSubTitle>
    </PostCardContent>
  );
}
