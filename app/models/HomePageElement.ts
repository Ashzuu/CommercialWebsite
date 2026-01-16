export class HomePageElement {
  private id: number;
  private label: string;
  private title: string;
  private description: string;
  private imageUrl: string;

  constructor(id: number, label:string, title: string, description: string, imageUrl: string) {
    this.id = id;
    this.label = label;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  /**
   * Get the identifier of the HomePageElement.
   * @return {number} The identifier.
   */
  get Id(): number {
    return this.id;
  }

  /**
   * Get the label of the HomePageElement.
   * @return {string} The label.
   */
  get Label(): string {
    return this.label;
  }

  /**
   * Get the title of the HomePageElement.
   * @return {string} The title.
   */
  get Title(): string {
    return this.title;
  }

  /**
   * Get the description of the HomePageElement.
   * @return {string} The description.
   */
  get Description(): string {
    return this.description;
  }

  /**
   * Get the image URL of the HomePageElement.
   * @return {string} The image URL.
   */
  get ImageUrl(): string {
    return this.imageUrl;
  }
}