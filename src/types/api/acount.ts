export type Account = {
  name: string;
  media: { data: [postDataObj] };
  id: string;
}


export type postDataObj = {
  caption: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  id: string;
}

export type TargetAccountData = {
  business_discovery: {
    id: string;
    followers_count: number;
    media_count: number;
    ig_id: number;
    media: { data: Array<TargetMediaData> }
  },
  id: string
}

export type TargetMediaData = {
  caption: string;
  media_url?: string;
  media_type: string;
  like_count: number;
  comments_count: number;
  timestamp: string;
  thumbnail_url?: string;
  id: string;
}