class Task {
  constructor(
    public id: number,
    public name: string,
    public taskCreated: string,
    public taskFinish: string,
    public deliveryEstimated: string,
    public description: string,
    public steps: number
  ) {}
}

export { Task }
