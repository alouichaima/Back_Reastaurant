import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AdminService } from 'src/app/__services/admin.service';
import { Commande } from 'src/app/models/Commande';




@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule

  ],
})
export class CommandeComponent implements OnInit {

  isSpinning: boolean = false;
  commandes: any;

  constructor(private service: AdminService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getAllCommandes();
  }

  getAllCommandes() {
    this.isSpinning = true;
    this.service.getAllCommandes().subscribe(
      (res) => {
        console.log(res);
        this.commandes = res;
        this.isSpinning = false;
      },
      (error) => {
        console.log(error);
        this.isSpinning = false;
      }
    );
  }

  changeCommandeStatus(commandeId: number, status: string): void {
    let actionText: string;
    if (status === 'APPROVED') {
      this.service.accepterCommande(commandeId).subscribe(
        (res: Commande) => {
          actionText = 'Commande approuvée avec succès';
          this.handleSuccess(actionText);
        },
        (error) => {
          console.log(error);
          this.handleError();
        }
      );
    } else if (status === 'DISAPPROVED') {
      this.service.refuserCommande(commandeId).subscribe(
        (res: Commande) => {
          actionText = 'Commande refusée avec succès';
          this.handleSuccess(actionText);
        },
        (error) => {
          console.log(error);
          this.handleError();
        }
      );
    }
  }
  
  private handleSuccess(actionText: string): void {
    this.getAllCommandes(); // Mettre à jour la liste des commandes après le changement de statut
    this.snackBar.open(actionText, 'Fermer', {
      duration: 3000,
      panelClass: 'success-snackbar'
    });
  }
  
  private handleError(): void {
    this.getAllCommandes(); // Mettre à jour la liste des commandes en cas d'erreur
    this.snackBar.open('Quelque chose s\'est mal passé', 'Fermer', {
      duration: 3000,
      panelClass: 'error-snackbar'
    });
  }
}  