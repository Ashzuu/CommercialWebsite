import {HomePageElement} from "~/models/HomePageElement";

export default class HomePageProps {
  private elements:HomePageElement[];
  private currentSelectionIndex:number;

  constructor() {
    this.currentSelectionIndex = 0;
    this.elements = [
      new HomePageElement(
        1,
        "A l'écoute de vos envies",
        "Des sites internet sur-mesure, adaptés à vos besoins.",
        "Nous vous proposons une large gamme de services adaptée à vos besoins et à vos envies. " +
        "Que vous cherchiez un site internet pour votre entreprise, ou un site de gestion,  " +
        "toutes les idées sont possibles.",
        "/img/background/homepage1.webp"
        ),
      new HomePageElement(
        2,
        "A moindre coût",
        "Des sites internet à bas coût, sans négliger la qualité.",
        "Nous mettons un point d'honneur à vous proposer des services de qualité à des prix compétitifs. " +
        "Nous croyons que tout le monde devrait avoir accès à des solutions web performantes, " +
        "sans se ruiner.",
        "/img/background/homepage2.webp"
      ),
      new HomePageElement(
        3,
        "Accompagnement personnalisé",
        "Un accompagnement personnalisé à chaque étape de votre projet.",
        "Nous prenons le temps de comprendre vos besoins spécifiques afin de vous offrir un accompagnement sur mesure. " +
        " Que vous soyez novice ou expérimenté, nous sommes là pour vous guider à chaque étape de votre projet.",
        "/img/background/homepage3.webp"
      ),
      new HomePageElement(
        4,
        "Conseil",
        "Des conseils d'experts pour maximiser l'impact de votre présence en ligne.",
        "A votre disposition pour vous fournir des conseils avisés " +
        "et des stratégies efficaces afin de maximiser l'impact de votre présence en ligne. " +
        "Nous vous aidons à atteindre vos objectifs commerciaux grâce à des solutions web innovantes.",
        "/img/background/homepage4.webp"
      ),
    ];
  }

  /**
   * Get the identifier of the current selection.
   * @return {number} The identifier.
   */
  get Id(): number {
    return this.currentSelectionIndex;
  }

  /**
   * Get the image URL of the current selection.
   * @return {string} The image URL.
   */
  get Title():string {
    return this.elements[this.currentSelectionIndex]!.Title;
  }

  /**
   * Get the description of the current selection.
   * @return {string} The description.
   */
  get Description():string {
    return this.elements[this.currentSelectionIndex]!.Description;
  }

  /**
   * Get the image URL of the current selection.
   * @return {string} The image URL.
   */
  get ImageUrl():string {
    return this.elements[this.currentSelectionIndex]!.ImageUrl;
  }

  /**
   * Get the label of the current selection.
   * @return {string} The label.
   */
  get Label(): string {
    return this.elements[this.currentSelectionIndex]!.Label;
  }

  /**
   * Get the label of the previous selection.
   * @return {string} The label.
   */
  get PreviousLabel(): string | null {
    return  this.currentSelectionIndex > 0 ? this.elements[this.Id-1]!.Label : null;
  }

  /**
   * Get the label of the next selection.
   * @return {string} The label.
   */
  get NextLabel(): string | null {
    return this.elements.length-1 > this.currentSelectionIndex ? this.elements[this.Id+1]!.Label : null;
  }

  /**
   * Method to switch the current selection.
   * @param {id} The id to change the current selection to.
   */
  public ChangeCurrentSelection(id: number) {
    this.currentSelectionIndex = id;
  }

}