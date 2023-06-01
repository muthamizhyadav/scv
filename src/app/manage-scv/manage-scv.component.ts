import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-manage-scv',
  templateUrl: './manage-scv.component.html',
  styleUrls: ['./manage-scv.component.css'],
})
export class ManageScvComponent implements OnInit {
  addscvformShow: any = false;
  preefShow: any = false;
  disableShow: any = false;
  editShow: any = false;
  addressFile: any;
  idFile: any;
  Allscv: any;
  proofdata: any;
  singleEditData: any;

  constructor(private service: ScvServiceService) {}
  ngOnInit(): void {
    this.getAllScv();
  }

  // Add Scv Flow
  scvForms: any = new FormGroup({
    Name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[6-9]{1}[0-9]{9}$'),
      Validators.minLength(10),
    ]),
    address: new FormControl('', Validators.required),
    landMark: new FormControl('', Validators.required),
    pinCode: new FormControl('', Validators.required),
    addreddProof: new FormControl('', Validators.required),
    idProof: new FormControl('', Validators.required),
  });

  AddressfileChangeFun(e: any) {
    this.addressFile = e.target.files[0];
  }
  IdfileChangeFun(e: any) {
    this.idFile = e.target.files[0];
    console.log(e);
  }
  submitForm() {
    let formData: any = new FormData();
    let phoneNumber = parseInt(this.scvForms.get('phoneNumber').value);
    formData.append('Name', this.scvForms.get('Name').value);
    formData.append('email', this.scvForms.get('email').value);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', this.scvForms.get('address').value);
    formData.append('pinCode', this.scvForms.get('pinCode').value);
    formData.append('landMark', this.scvForms.get('landMark').value);
    formData.append('addreddProof', this.addressFile);
    formData.append('idProof', this.idFile);
    this.service.AddSCV(formData).subscribe((e: any) => {
      this.addscvformShow = false;
      this.scvForms.reset();
      this.getAllScv();
    });
  }

  getAllScv() {
    this.service.getAllSCV().subscribe((e: any) => {
      this.Allscv = e;
      console.log(e);
    });
  }

  ViewProof(i: any) {
    this.preefShow = true;
    this.proofdata = this.Allscv[i];
    console.log(this.proofdata);
  }

  type: any;
  id: any;
  name: any;
  disableFun(e: any, id: any, i: any) {
    this.id = id;
    this.name = this.Allscv[i].Name;
    if (e == true) {
      this.type = 'inactive';
      this.disableShow = true;
    }
    if (e == false) {
      this.type = 'active';
      this.disableSCV();
    }
  }

  disableSCV() {
    this.service
      .Active_InActive(this.id, { type: this.type })
      .subscribe((e: any) => {
        this.getAllScv();
        this.disableShow = false;
      });
  }

  checkedFun(val: any) {
    if (val === true) {
      return false;
    } else {
      return true;
    }
  }

  // Edit forms

  scvEditForms: any = new FormGroup({
    Name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[6-9]{1}[0-9]{9}$'),
      Validators.minLength(10),
    ]),
    address: new FormControl('', Validators.required),
    landMark: new FormControl('', Validators.required),
    pinCode: new FormControl('', Validators.required),
    addreddProof: new FormControl('', Validators.required),
    idProof: new FormControl('', Validators.required),
  });

  openEditForm(i: any) {
    this.editShow = true;
    this.singleEditData = this.Allscv[i];
    this.scvEditForms.patchValue({
      Name: this.singleEditData.Name,
      email: this.singleEditData.email,
      phoneNumber: this.singleEditData.phoneNumber,
      address: this.singleEditData.address,
      landMark: this.singleEditData.landMark,
      pinCode: this.singleEditData.pinCode,
    });
  }

  editAdressFile: any = '';
  editIdFiles: any = '';

  editaddFile(e: any) {
    this.editAdressFile = e.target.files[0];
    console.log(this.editAdressFile);
  }

  editIdFile(e: any) {
    this.editIdFiles = e.target.files[0];
    console.log(this.editIdFiles);
  }

  Editsubmit(id: any) {
    let editFormData: any = new FormData();
    let phoneNumber = parseInt(this.scvEditForms.get('phoneNumber').value);

    editFormData.append('Name', this.scvEditForms.get('Name').value);
    editFormData.append('email', this.scvEditForms.get('email').value);
    editFormData.append('address', this.scvEditForms.get('address').value);
    editFormData.append('phoneNumber', phoneNumber);
    editFormData.append('landMark', this.scvEditForms.get('landMark').value);
    editFormData.append('pinCode', this.scvEditForms.get('pinCode').value);
    if (this.editAdressFile != '') {
      editFormData.append('addreddProof', this.editAdressFile);
    }
    if (this.editIdFiles != '') {
      editFormData.append('idProof', this.editIdFiles);
    }
    this.service.EditScv(id, editFormData).subscribe((e: any) => {
      console.log(e);
      this.getAllScv();
      this.editShow = false;
    });
  }

  // popups
  AddSCVShow() {
    this.addscvformShow = true;
  }
  AddSCVUnShow() {
    this.addscvformShow = false;
  }
  PreefShow() {
    this.preefShow = true;
  }
  PreefUnShow() {
    this.preefShow = false;
  }
  closeDisable() {
    this.disableShow = false;
    this.getAllScv();
  }
  editScv() {
    this.editShow = true;
  }
  closeEdit() {
    this.editShow = false;
  }
}
