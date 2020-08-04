class Project {
  constructor(
    public title: string,
    public link: URL | string,
    public imageName: string,
    public iconName: string,
    public description: string
  ) {}
}

export { Project };
