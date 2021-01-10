import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/Etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html'
 
})
export class AddEtudiantComponent implements OnInit {
  newEtudiant = new Etudiant();
  message : string;

  constructor(private etudiantService: EtudiantService) { 
    
  }

  ngOnInit(): void {
  }

 
  addEtudiant(){
    this.etudiantService.ajouterEtudiant(this.newEtudiant)
    .subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['etudiants']).then(() => {
      window.location.reload();
      });
      
    }
    

}
