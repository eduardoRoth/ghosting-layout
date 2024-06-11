import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBadge,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-ghost',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    FormsModule,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonBadge,
    IonCard,
    IonText,
    NgClass,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Ghosting in elements</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list
        [ngClass]="{ 'ghost-listing': !isShowingAll() }"
        class="ion-no-padding"
      >
        @for (user of preview(); track user.id) {
          <ion-card>
            <ion-item button lines="none">
              <ion-avatar slot="start">
                <img [src]="user.picture" [alt]="user.name" />
              </ion-avatar>
              <ion-label>
                <h2>{{ user.name }}</h2>
                <p>{{ user.email }}</p>
              </ion-label>
              <ion-badge slot="end" color="secondary">{{ user.id }}</ion-badge>
            </ion-item>
          </ion-card>
        }
      </ion-list>
      <ion-item lines="none" button (click)="showAll()">
        <ion-label class="ion-text-center">
          <ion-text color="primary">
            Show {{ isShowingAll() ? 'less' : 'all users' }}
          </ion-text>
        </ion-label>
      </ion-item>
    </ion-content>
  `,
  styles: `
    .ghost-listing {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(
          180deg,
          rgba(var(--ion-background-color-rgb, 255,255,255), 0) 0%,
          rgba(var(--ion-background-color-rgb, 255, 255, 255), 1) 60%
        );
        z-index: 99;
        margin-bottom: -15px;
      }
    }
  `,
})
export class GhostPage {
  items = new Array(50).fill(0).map((_, i) => ({
    id: i,
    name: `Element ${i + 1}`,
    picture: `https://randomuser.me/api/portraits/men/${i}.jpg`,
    email: `email-${i}@herodevs.com`,
  }));

  users = signal(this.items);
  limit = signal(5);
  preview = computed(() => this.users().slice(0, this.limit()));
  isShowingAll = computed(() => this.limit() === this.users().length);

  showAll() {
    if (this.isShowingAll()) {
      this.limit.set(5);
    } else {
      this.limit.set(this.users().length);
    }
  }
}
