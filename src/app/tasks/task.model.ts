class Task {
  constructor(
    public id: number,
    public idcategory: number,
    public name: string,
    public taskCreated: string,
    public taskFinish: string,
    public deliveryEstimated: string,
    public description: string,
    public steps: string,
    public status: string,
    public category: string
  ) { }
}

export { Task };
