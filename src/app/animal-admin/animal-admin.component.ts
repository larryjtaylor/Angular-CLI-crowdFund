import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-animal-admin',
  templateUrl: './animal-admin.component.html',
  styleUrls: ['./animal-admin.component.css'],
  providers: [AnimalsService],
})
export class AnimalAdminComponent implements OnInit {

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, funding: number, swag: string, id: string) {
    let newAnimal: Cause = new Cause(title, description, funding, swag, id);
    this.animalsService.addAnimal(newAnimal);
  }
}
