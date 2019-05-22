interface Global {
  doGet(e): any
  doPost(e): any
  fetchSampleJson(): any
  plus1(num: number): void
  RotateLogDeme(): any
  SheetDemo(): any
  SlackDemo(): any
  test(): void
}

declare var global: Global
