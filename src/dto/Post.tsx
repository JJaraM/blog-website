interface Post {
  id: string;
  title: string;
  draftTitle: string;
  content: string;
  draftContent: string;
  image: string;
  draftImage: string;
  createDate: string;
  updateDate: string;
  tags: Array<number>;
}

export default Post;
