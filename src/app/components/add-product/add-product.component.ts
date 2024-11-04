import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  showPopup: boolean = false;
  constructor(private fb:FormBuilder,private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    this.showPopup = true; 
  }
  closePopup() {
    this.showPopup = false;
  }
  confirm() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(
        () => {
          this.showPopup = false;
          this.productForm.reset();
          localStorage.removeItem('products');
        }
      )
    }
  }

}
