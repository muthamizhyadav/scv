import { Component, OnInit } from '@angular/core';
import { ScvServiceService } from '../scv-service.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-manage-cart',
  templateUrl: './manage-cart.component.html',
  styleUrls: ['./manage-cart.component.css'],
})
export class ManageCartComponent implements OnInit {
  constructor(private service: ScvServiceService, private fb: FormBuilder) {}
  scvFrom: any = false;
  scvEditeFrom = false;
  fileName: any = '';
  scvfile: any;
  AllCArts: any;
  editeimage: any;
  singleData: any;
  ngOnInit(): void {
    this.fetchCart();
  }

  scvForms: any = new FormGroup({
    vehicleName: new FormControl('', Validators.required),
    vehicleNumber: new FormControl('', Validators.required),
    cartName: new FormControl('', Validators.required),
    cartLocation: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
  // Edit Form Controll

  scvEditeForms: any = this.fb.group({
    vehicleName: new FormControl('', Validators.required),
    vehicleNumber: new FormControl('', Validators.required),
    cartName: new FormControl('', Validators.required),
    cartLocation: new FormControl('', Validators.required),
    image: new FormControl(''),
  });

  // file event Handling in change
  fileChangeFun(e: any) {
    this.fileName = e.target.files[0].name;
    this.scvfile = e.target.files[0];
  }
  submit = false;

  submitScvForm() {
    this.submit = true;
    if (this.scvForms.valid) {
      let formData: any = new FormData();
      formData.append('vehicleName', this.scvForms.get('vehicleName').value);
      formData.append(
        'vehicleNumber',
        this.scvForms.get('vehicleNumber').value
      );
      formData.append('cartName', this.scvForms.get('cartName').value);
      formData.append('cartLocation', this.scvForms.get('cartLocation').value);

      formData.append('image', this.scvfile);
      // Api Call
      this.service.SendSCVFrm(formData).subscribe((e: any) => {
        this.scvFrom = false;
        this.submit = true;
        this.fetchCart();
        this.scvForms.reset();
      });
    }
  }

  // fetch All Cart
  fetchCart() {
    this.service.getScvCarts().subscribe((e: any) => {
      this.AllCArts = e;
      this.submit = false;
    });
  }

  // Remove Cart

  RemoveCart(id: any) {
    this.service.removeCart(id).subscribe((e: any) => {
      this.fetchCart();
    });
  }

  // Edite SCV Functions'

  EditFun(index: any) {
    this.scvEditeFrom = true;
    this.singleData = this.AllCArts[index];
    this.scvEditeForms.patchValue({
      vehicleName: this.singleData.vehicleName,
      vehicleNumber: this.singleData.vehicleNumber,
      cartName: this.singleData.cartName,
      cartLocation: this.singleData.cartLocation,
    });
  }

  imageshow = false;
  editImageScv(e: any) {
    this.editeimage = e.target.files[0];
    this.imageshow = true;
  }

  // Submit Edit Form
  SubmitEdit(id: any) {
    let formData: any = new FormData();
    formData.append('vehicleName', this.scvEditeForms.get('vehicleName').value);
    formData.append(
      'vehicleNumber',
      this.scvEditeForms.get('vehicleNumber').value
    );
    formData.append('cartName', this.scvEditeForms.get('cartName').value);
    formData.append(
      'cartLocation',
      this.scvEditeForms.get('cartLocation').value
    );
    if (
      this.imageshow &&
      this.scvEditeForms.get('image').value != '' &&
      this.scvEditeForms.get('image').value != null
    ) {
      formData.append('image', this.editeimage);
    }
    this.service.EditeScvCart(id, formData).subscribe((e: any) => {
      this.unShowScvEditeForm();
      this.fetchCart();
    });
  }

  // Scv Form Popup Enable Disable
  ShowScvForm() {
    this.scvFrom = true;
  }
  unShowScvForm() {
    this.scvFrom = false;
  }
  ShowScvEditeForm() {
    this.scvEditeFrom = true;
  }
  unShowScvEditeForm() {
    this.scvEditeFrom = false;
  }
}
