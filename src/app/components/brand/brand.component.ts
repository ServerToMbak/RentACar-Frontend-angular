import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand:Brand;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }
  getBrands(){
    this.brandService.getbrands().subscribe(response=>{
      this.brands=response.data
    })
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return  "list-group-item active"
    }else{
        return "list-group-item"
    }
  }
  setAllBrandCClass(){
    this.currentBrand=null
    if(!this.currentBrand){
      return  "list-group-item active"
    }else{
        return "list-group-item"
    }

  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }
  getCurrentBrand(brand:Brand){
     if(brand==this.currentBrand){
       return  "list-group-item active"
      }else{
        return "list-group-item"
      }
  }
}
