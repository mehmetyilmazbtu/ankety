import { Component } from '@angular/core';
import { AnketService } from '../anket-servis.service';
import { Tutorial } from '../models/anket.model';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { arr } from '../models/anket.array.model';

@Component({
  selector: 'app-anket-gonder',
  templateUrl: './anket-gonder.component.html',
  styleUrls: ['./anket-gonder.component.css']
})
export class AnketGonderComponent {

  productForm: FormGroup;
  name = 'Angular';
  tutorial: Tutorial= {
    title: '',
    description: arr[''],
    published: false
  };
  submitted = false;
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  firstFieldName = 'First Item name';
  firstField = true;
  constructor(private anketService: AnketService,
    private fb:FormBuilder) {
      this.productForm = this.fb.group({  
        name: '',  
        quantities: this.fb.array([]) ,  
      });  
    }
  

  saveTutorial(): void {
    const data = {
      title: this.productForm.value.name,
      description: this.productForm.value.quantities
    };

    this.anketService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          window.location.reload()
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: arr[''],
      published: false
    };
  }
  addFieldValue() {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',    
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }
   
     
 

}
