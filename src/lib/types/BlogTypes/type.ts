export type blog = {
  banner: string;
  idx: number;
  title: string;
  context: string;
  userIdx: number;
  name: string;
  regdate: string;
  likesCount: number;
  views: number;
};

export type BlogType = {
  blogList: blog[];
};
