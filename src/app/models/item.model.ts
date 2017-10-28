export class Item {
  constructor(
    public videoId: number,
    public channelId: number,
    public channelTitle: string,
    public imageLink: string,
    public title: string,
    public description: string,
    public date: string,
    public views: number,
    public likes: number,
    public dislikes: number
  ) {
    this.views = views || 0;
    this.likes = likes || 0;
    this.dislikes = dislikes || 0;
  }
}
