export class ProcessusPropsClient {
  private readonly BREAKPOINT_VALUE:number = 1200;
  private step1:Ref<boolean> = ref(false);
  private step2:Ref<boolean> = ref(false);
  private step3:Ref<boolean> = ref(false);
  private handleScroll: OmitThisParameter<() => void>;

  private logicScroll() {
    this.step1.value = this.calculateFor(1);
    this.step2.value = this.calculateFor(2);
    this.step3.value = this.calculateFor(3);
    this.updateDOM();
  }

  constructor() {
    this.handleScroll = this.logicScroll.bind(this);
  }

  /**
   * Initialize the listener between the scroll and the logic of scrolling.
   */
  public init():void  {
    document.addEventListener("scroll", this.handleScroll);
  }

  /**
   * Destroy the link between the logic & the event
   */
  public destroy():void {
    document.removeEventListener("scroll", this.handleScroll);
  }

  /**
   * Get whether Step1 is active.
   * @return {boolean} True if Step1 is active, false otherwise.
   */
  public get Step1(): Ref<boolean> {
    return ref(this.step1);
  }

  /**
   * Get whether Step2 is active
   * @return {boolean} True if Step1 is active, false otherwise.
   */
  public get Step2(): Ref<boolean> {
    return ref(this.step2);
  }

  /**
   * Get whether Step3 is active
   * @return {boolean} True if Step1 is active, false otherwise.
   */
  public get Step3(): Ref<boolean> {
    return ref(this.step3);
  }

  private calculateFor(nbStep:number):boolean {
    let res:boolean = false;
    const element:Element = document.getElementsByClassName("first-img-section")[0]!
    if(document.documentElement.clientWidth <= this.BREAKPOINT_VALUE) {
      const height:number = document.documentElement.clientHeight;
      const minSize:boolean = window.scrollY > (height/2)+element.clientHeight*(nbStep-1);
      if(minSize) {
        res = true;
      }
    }
    return res;
  }

  private updateDOM():void {
    this.manageClasses("first-img-section", this.Step1.value);
    this.manageClasses("second-img-section", this.Step2.value);
    this.manageClasses("third-img-section", this.Step3.value);
  }

  private manageClasses(className:string, step:boolean){
    const element:Element = document.getElementsByClassName(className)[0]!

    if(step){
      if(!element.classList.contains("active-darkness")){
        element.classList.add("active-darkness");
      }
    }
    else {
      element.classList.remove("active-darkness");
    }
  }

}