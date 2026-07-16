import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Shell raíz de la aplicación.
 *
 * Navbar/Footer NO se incluyen aquí de forma fija: el layout (con o sin
 * cabecera/pie, como el modo "lectura" del Figma) se resuelve en un
 * LayoutComponent envolvente, generado en la Fase de Componentes.
 * Por ahora el shell se limita al router-outlet para mantener la
 * arquitectura desacoplada del layout visual.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
