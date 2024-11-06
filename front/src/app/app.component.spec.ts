import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JokesService } from "./services/jokes.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

// Import des modules Material utilisés dans AppComponent
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientTestingModule,
        // Ajout des modules Material nécessaires pour ce composant
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule
      ],
      providers: [JokesService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
